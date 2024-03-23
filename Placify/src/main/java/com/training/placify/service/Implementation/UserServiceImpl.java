package com.training.placify.service.Implementation;

import com.training.placify.dto.UserDTO;
import com.training.placify.model.*;
import com.training.placify.repository.*;
import com.training.placify.service.UserService;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository; // Add this

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private StudentRepository studentRepository;


    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    @PostConstruct
    public void setupRoles() {
        createRoleIfNotExists(RoleType.STUDENT);
        createRoleIfNotExists(RoleType.ADMIN);
    }

    private void createRoleIfNotExists(RoleType roleType) {
        if (!roleRepository.existsByName(roleType)) {
            Role role = new Role();
            role.setName(roleType);
            roleRepository.save(role);
        }
    }


    @Override
    @Transactional
    public User saveUser(UserDTO userDTO) {
        Role role = determineRoleByEmail(userDTO.getCollegeEmail());
        User user;

        if (role.getName() == RoleType.ADMIN) {
            user = mapToAdmin(userDTO);
        } else if (role.getName() == RoleType.STUDENT) {
            user = mapToStudent(userDTO);
        } else {
            throw new IllegalArgumentException("Invalid email domain");
        }

        associateDepartment(user, userDTO.getDepartment().getDeptName());
        user.setRole(role);

        return userRepository.save(user);
    }

    @Override
    public void initiatePasswordReset(String email) {

    }


    private Role determineRoleByEmail(String email) {
        if (email.endsWith("@dypvp.edu.in")) {
            if (email.matches("^[0-9]{8}\\.dypit@dypvp\\.edu\\.in$")) {
                return getRoleEntity(RoleType.STUDENT);
            } else {
                return getRoleEntity(RoleType.ADMIN);
            }
        } else {
            throw new IllegalArgumentException("Invalid email domain");
        }
    }

    private Role getRoleEntity(RoleType roleType) {
        // Fetch or create a Role entity based on the RoleType
        return roleRepository.findByName(RoleType.valueOf(roleType.name().toUpperCase()))
                .orElseGet(() -> createRole(roleType));
    }

    private Role createRole(RoleType roleType) {
        Role role = new Role();
        role.setName(roleType);
        return roleRepository.save(role);
    }

    private Admin mapToAdmin(UserDTO userDTO) {
        Admin admin = modelMapper.map(userDTO,Admin.class);
//        Department department = departmentRepository.findByName(userDTO.getDepartment().getDeptName())
//                .orElseGet(() -> departmentRepository.save(new Department(userDTO.getDepartment().getDeptName())));
//        admin.setDepartment(department);
        admin.setPersonalEmail(userDTO.getPersonalEmail());
        admin.setCollegeEmail(userDTO.getCollegeEmail());
        //associateDepartment(admin, userDTO.getDepartment().getDeptName());

        System.out.println(admin);

        return admin;
    }

    private Student mapToStudent(UserDTO userDTO) {
        Student student = modelMapper.map(userDTO, Student.class);
//        Department department = departmentRepository.findByName(userDTO.getDepartment().getDeptName())
//                .orElseGet(() -> departmentRepository.save(new Department(userDTO.getDepartment().getDeptName())));
//        student.setDepartment(department);
        student.setPersonalEmail(userDTO.getPersonalEmail());
        student.setCollegeEmail(userDTO.getCollegeEmail());
        //associateDepartment(student, userDTO.getDepartment().getDeptName());
        System.out.println(student);
        return student;
    }

    private void associateDepartment(User user, String departmentName) {
        // Fetch or create Department
        Department department = departmentRepository.findByName(departmentName)
                .orElseGet(() -> departmentRepository.save(new Department(departmentName)));

        // Associate Department AFTER saving it
        user.setDepartment(department);
    }
}
