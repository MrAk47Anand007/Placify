package com.training.placify.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "department") // Assuming bidirectional
    private List<Student> students;

    @OneToMany(mappedBy = "department")
    private List<Admin> admins;
}
