package com.training.placify.dto;

import com.training.placify.model.resumeModel.ResumeData;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResumeVersionDTO {
    private Long id;
    private Integer version;
    private Date dateCreated;
    private String name;
    // Add getters and setters
}
