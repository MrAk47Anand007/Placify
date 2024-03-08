package com.training.placify.model;

import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Profile details: name, email, profilePic, address, etc.

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // ... other academic details
}
