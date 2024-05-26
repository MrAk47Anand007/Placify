package com.training.placify.model.companyModel;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class EligibilityCriteria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double minimumTenthMarks;
    private Double minimumTwelfthMarks;
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
    @JsonBackReference
    private List<Department> eligibleDepartments;

    @OneToOne(mappedBy = "eligibilityCriteria", cascade = CascadeType.ALL)
    @JsonBackReference
    private PlacementDrive placementDrive;
}
