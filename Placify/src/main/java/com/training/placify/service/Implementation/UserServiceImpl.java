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

    @Autowired
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

        // Pre-fetch Department (Assuming you have the department name in the DTO)
        Department department = departmentRepository.findByName(userDTO.getDeptName())
                .orElseThrow(() -> new IllegalArgumentException("Department not found"));
        user.setDepartment(department);
        user.setRole(role); // Set the role before saving

        return userRepository.save(user); // Save through userRepository
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
        System.out.println(admin);

        return admin;
    }

    private Student mapToStudent(UserDTO userDTO) {
        Student student = modelMapper.map(userDTO, Student.class);
        System.out.println(student);
        return student;
    }
}
