package com.training.placify;

import com.training.placify.dto.DepartmentDTO;
import com.training.placify.dto.UserDTO;
import com.training.placify.model.User;
import com.training.placify.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class PlacifyApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PlacifyApplication.class, args);

//		UserService userService = context.getBean(UserService.class);
//		BCryptPasswordEncoder passwordEncoder = context.getBean(BCryptPasswordEncoder.class);
//
//		// Test User Data
//		UserDTO testUserDTO = new UserDTO();
//		DepartmentDTO departmentDTO = new DepartmentDTO();
//		departmentDTO.setDeptName("Computer"); // Set the department name
//		testUserDTO.setDepartment(departmentDTO);
//		testUserDTO.setFirstName("Sample");
//		testUserDTO.setLastName("Test");
//		testUserDTO.setPersonalEmail("test1@example.com");
//		testUserDTO.setCollegeEmail("teast.dypit@dypvp.edu.in");
//
//		testUserDTO.setPassword(passwordEncoder.encode("testpassword"));
//
//		// Save the User
//		User savedUser = userService.saveUser(testUserDTO);
//		System.out.println("Saved User: " + savedUser);
	}
}