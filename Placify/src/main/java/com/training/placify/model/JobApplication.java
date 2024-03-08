package com.training.placify.model;


import jakarta.persistence.*;
import java.util.Date;

@Entity
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "placement_drive_id")
    private PlacementDrive placementDrive;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status; // Define the possible statuses below

    private Date applicationDate;

    // ... other fields, e.g., resume, cover letter (could be URLs)
}

