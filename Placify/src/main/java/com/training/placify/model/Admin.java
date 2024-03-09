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
public class Admin extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name=super.getFirstName()+" "+super.getLastName();

    private String personalEmail=super.getPersonalEmail();

    private String collegeEmail=super.getCollegeEmail();

    private String profilePic=super.getProfilePic();

    private String phone_no;

    private String deptName;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
