//package com.training.placify.model.resumeModel;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.util.List;
//
//
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//public class ResumeData {
//
//    private String name;
//    private String address;
//    private String phoneNumber;
//    private String email;
//    private String linkedin;
//    private String website;
//    private String objective;
//    private List<Education> education;
//    private Skills skills;
//    private List<Experience> experience;
//    private List<Project> projects;
//    private List<String> extraCurricularActivities;
//
//    @Getter
//    @Setter
//    @AllArgsConstructor
//    @NoArgsConstructor
//    public static class Education {
//        private String degree;
//        private String institution;
//        private String dates;
//        private List<String> relevantCoursework;
//    }
//
//    @Getter
//    @Setter
//    @AllArgsConstructor
//    @NoArgsConstructor
//    public static class Skills {
//        private List<String> technicalSkills;
//        private List<String> softSkills;
//    }
//
//    @Getter
//    @Setter
//    @AllArgsConstructor
//    @NoArgsConstructor
//    public static class Experience {
//        private String role;
//        private String company;
//        private String location;
//        private String dates;
//        private List<String> responsibilities;
//    }
//
//    @Getter
//    @Setter
//    @AllArgsConstructor
//    @NoArgsConstructor
//    public static class Project {
//        private String title;
//        private String description;
//        private String link;
//    }
//}

package com.training.placify.model.resumeModel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ResumeData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String phoneNumber;
    private String email;
    private String linkedin;
    private String website;
    private String objective;


    @OneToMany(mappedBy = "resumeData", cascade = CascadeType.ALL)
    private List<Education> education;

    @OneToOne(mappedBy = "resumeData", cascade = CascadeType.ALL)
    private Skills skills;

    @OneToMany(mappedBy = "resumeData", cascade = CascadeType.ALL)
    private List<Experience> experience;

    @OneToMany(mappedBy = "resumeData", cascade = CascadeType.ALL)
    private List<ExtraCurricularActivity> extraCurricularActivities;

    @OneToMany(mappedBy = "resumeData", cascade = CascadeType.ALL)
    private List<Project> projects;

}
