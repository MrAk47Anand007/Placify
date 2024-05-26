package com.training.placify.model.companyModel;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.training.placify.model.Student;
import com.training.placify.model.resumeModel.ResumeVersion;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "placement_drive_id")
    private PlacementDrive placementDrive;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    private Date applicationDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resume_version_id")
    private ResumeVersion resumeVersion;

    // ... other fields, e.g., resume, cover letter (could be URLs)
}
