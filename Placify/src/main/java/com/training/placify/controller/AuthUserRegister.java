package com.training.placify.controller;

import com.training.placify.dto.UserDTO;
import com.training.placify.model.User;
import com.training.placify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class AuthUserRegister {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserDTO userDTO) {
        try {
            // Assuming UserService has a method saveUser that takes a UserDTO and returns a User
            User registeredUser = userService.saveUser(userDTO);
            // You might want to return a DTO instead of the User entity directly for security reasons
            return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle exceptions, e.g., email already exists
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}