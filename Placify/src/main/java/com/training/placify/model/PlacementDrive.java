package com.training.placify.model;


import jakarta.persistence.*;

import java.util.Date; // Or a suitable date/time library
import java.util.List;

@Entity
public class PlacementDrive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    private String title; // E.g., "Software Engineer Internship 2024"

    private String description;

    @Column(columnDefinition = "TEXT") // If the description can be long
    private String eligibilityCriteria;

    private Date startDate;
    private Date endDate;

    // ... other relevant details like location, selection process

    @OneToMany(mappedBy = "placementDrive")
    private List<JobApplication> jobApplications;
}

