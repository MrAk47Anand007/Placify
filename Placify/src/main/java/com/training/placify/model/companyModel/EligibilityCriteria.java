package com.training.placify.model.companyModel;

import com.training.placify.model.Department;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class EligibilityCriteria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer minimumTenthMarks;
    private Integer minimumTwelfthMarks;
    private Boolean allowCurrentBacklogs;
    private Integer maximumPreviousBacklogs;
    private Double minimumCgpa;

    private String gender;
    // ... other criteria fields ...


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "criteria_eligible_departments", // Change table name
            joinColumns = @JoinColumn(name = "criteria_id"),
            inverseJoinColumns = @JoinColumn(name = "department_id")
    )
    private List<Department> eligibleDepartments;

    @OneToOne(mappedBy = "eligibilityCriteria",cascade = CascadeType.ALL)
    private PlacementDrive placementDrive;
}