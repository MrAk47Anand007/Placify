package com.training.placify.model;

import jakarta.persistence.*;

@Entity
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Profile details: name, email, profilePic, etc.

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
