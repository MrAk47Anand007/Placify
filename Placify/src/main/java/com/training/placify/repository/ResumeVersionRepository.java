package com.training.placify.repository;

import com.training.placify.model.resumeModel.ResumeVersion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

public interface ResumeVersionRepository extends JpaRepository<ResumeVersion, Long> {
    @Query("SELECT MAX(rv.version) FROM ResumeVersion rv WHERE rv.student.id = :studentId")
    Optional<Integer> findLatestVersionByStudentId(@Param("studentId") Long studentId);


    List<ResumeVersion> findAllByStudentId(Long studentId);
}
