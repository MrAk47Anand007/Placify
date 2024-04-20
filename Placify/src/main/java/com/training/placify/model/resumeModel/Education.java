package com.training.placify.model.resumeModel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String degree;
    private String institution;
    private String dates;

    @ElementCollection
    private List<String> relevantCoursework;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resume_data_id")
    private ResumeData resumeData;
}