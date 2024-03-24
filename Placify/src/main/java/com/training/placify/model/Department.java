package com.training.placify.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public Department(String name) {
        this.name = name;
    }


    @OneToMany(mappedBy = "department",fetch = FetchType.EAGER) // Assuming bidirectional
    @Fetch(FetchMode.SELECT)
    private List<Student> students;

    @OneToMany(mappedBy = "department",fetch = FetchType.EAGER)
    @Fetch(FetchMode.SELECT)
    private List<Admin> admins;



}
