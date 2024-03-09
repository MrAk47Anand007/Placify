package com.training.placify.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id; // Include this for potential updates later
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @Email
    private String personalEmail;
    @Email
    private String collegeEmail;

    @NotBlank
    private String DeptName;

    private String password;

}

