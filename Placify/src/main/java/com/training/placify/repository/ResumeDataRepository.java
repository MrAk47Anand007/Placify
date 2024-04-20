package com.training.placify.repository;

import com.training.placify.model.resumeModel.ResumeData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeDataRepository extends JpaRepository<ResumeData,Long> {

}
