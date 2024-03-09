package com.training.placify.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor // A no-argument constructor
@AllArgsConstructor // A constructor with all arguments
@Entity
public class Student extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String personalEmail=super.getPersonalEmail();

    private String collegeEmail=super.getCollegeEmail();

    private String profilePic=super.getProfilePic();

    private String phone_no;

    private int passoutYear;

    private String deptName;



    // Profile details: name, email, profilePic, address, etc.

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // ... other academic details
}
