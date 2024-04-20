package com.training.placify.model.resumeModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExtraCurricularActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String activityName;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resume_data_id")
    private ResumeData resumeData;
}


