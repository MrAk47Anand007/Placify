package com.training.placify.model.companyModel;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class PlacementDrive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // E.g., "Software Engineer Internship 2024"

    private String description;

    private Double costToCompany; // CTC offered

    private Date startDate;
    private Date endDate;

    private String location;

    private String otherDetails;

    @Column(columnDefinition = "TEXT") // If the description can be long
    private String selectionProcess;

    @Enumerated(EnumType.STRING)
    private EmploymentType employmentType; // E.g., FULL_TIME, INTERNSHIP, etc.

    @ManyToOne
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;

    @OneToMany(mappedBy = "placementDrive", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<JobApplication> jobApplications;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "eligibility_criteria_id")
    @JsonManagedReference
    private EligibilityCriteria eligibilityCriteria;

    private String fileUrl; // New field to store the URL of the uploaded file
}