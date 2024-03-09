package com.training.placify.service.Implementation;

import com.training.placify.dto.UserDTO;
import com.training.placify.model.*;
import com.training.placify.repository.AdminRepository;
import com.training.placify.repository.RoleRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.repository.UserRepository;
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
        User user; // Keep User as the abstract type

        if (role.getName() == RoleType.ADMIN) {
            user = mapToAdmin(userDTO);
            // Merge back - Assuming department exists
            //user.setDepartment(admin.getDepartment());
            //user.setRole(role);
            adminRepository.save((Admin) user); // Save through AdminRepository
        } else if (role.getName() == RoleType.STUDENT) {
            user = mapToStudent(userDTO);
            // Merge back (Example)
            //user.setPassoutYear(student.getPassoutYear());
            //user.setDepartment(student.getDepartment());
            //user.setRole(role);
            studentRepository.save((Student) user); // Save through StudentRepository
        } else {
            throw new IllegalArgumentException("Invalid email domain");
        }

        return user;
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
        Admin admin = new Admin();
        admin.setId(userDTO.getId());
        admin.setFirstName(userDTO.getFirstName());
        admin.setLastName(userDTO.getLastName());
        admin.setCollegeEmail(userDTO.getCollegeEmail());
        admin.setPersonalEmail(userDTO.getPersonalEmail());
        admin.setPassword(userDTO.getPassword());

//        admin.setFirstName(userDTO.getFirstName());
//        admin.setLastName(userDTO.getLastName());
        // Handle department and other specific mappings if needed
        return admin;
    }

    private Student mapToStudent(UserDTO userDTO) {
        //Student student = modelMapper.map(userDTO, Student.class);
        // ... (Similar to mapToAdmin)
        Student student= new Student();
        student.setId(userDTO.getId());
        student.setFirstName(userDTO.getFirstName());
        student.setLastName(userDTO.getLastName());
        student.setCollegeEmail(userDTO.getCollegeEmail());
        student.setPersonalEmail(userDTO.getPersonalEmail());
        student.setPassword(userDTO.getPassword());
//        student.setFirstName(userDTO.getFirstName());
//        student.setLastName(userDTO.getLastName());
        return student;
    }
}
