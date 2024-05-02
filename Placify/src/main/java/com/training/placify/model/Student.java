package com.training.placify.model;

import com.training.placify.model.resumeModel.ResumeVersion;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor // A no-argument constructor
@AllArgsConstructor // A constructor with all arguments
@Entity
public class Student extends User{

    private String phone_no;

    private Integer passoutYear;

    private String roll_no;

    private String prnNo;

    private String erpId;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<ResumeVersion> resumeVersions;

}
