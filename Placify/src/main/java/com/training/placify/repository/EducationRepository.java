package com.training.placify.repository;

import com.training.placify.model.resumeModel.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education, Long> {
    List<Education> findByResumeDataId(Long resumeDataId);
}
