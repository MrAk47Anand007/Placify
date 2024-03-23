package com.training.placify.controller;

import com.training.placify.dto.LoginRequest;
import com.training.placify.dto.PasswordResetRequest;
import com.training.placify.security.jwt.JwtUtil;
import com.training.placify.service.Implementation.UserServiceImpl;
import com.training.placify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserServiceImpl userService;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Load UserDetails using the username
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());

        // Generate the token using UserDetails
        String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok().body(jwt);
    }

    @PostMapping("/forgotPassword")
    public ResponseEntity<?> forgotPassword(@RequestBody PasswordResetRequest passwordResetRequest) {
        try {

            userService.initiatePasswordReset(passwordResetRequest.getEmail());
            return ResponseEntity.ok().body("Password reset instructions have been sent to your email.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error initiating password reset: " + e.getMessage());
        }
    }
}