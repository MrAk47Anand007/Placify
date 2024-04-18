package com.training.placify.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    private String gender;

    private Boolean isEnabled;

    @NotNull // Ensure department is not null
    @Valid // Cascade validation to the properties of DepartmentDTO
    private DepartmentDTO department;

    private String password;

}

