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
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String role;
    private String company;
    private String location;
    private String dates;

    @ElementCollection // Use ElementCollection for List<String>
    private List<String> responsibilities;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resume_data_id")
    private ResumeData resumeData;
}