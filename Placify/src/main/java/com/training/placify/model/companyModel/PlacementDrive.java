package com.training.placify.model.companyModel;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date; // Or a suitable date/time library
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
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
    private EmploymentType employmentType; // E.g., FULL_TIME, INTERNSHIP, etc. (create an enum)

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;


    @OneToMany(mappedBy = "placementDrive",cascade = CascadeType.ALL)
    private List<JobApplication> jobApplications;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "eligibility_criteria_id")
    private EligibilityCriteria eligibilityCriteria;
}

