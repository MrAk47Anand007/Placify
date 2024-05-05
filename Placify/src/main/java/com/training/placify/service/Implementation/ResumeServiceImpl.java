package com.training.placify.service.Implementation;


import com.training.placify.model.Student;
import com.training.placify.model.resumeModel.*;
import com.training.placify.repository.ResumeDataRepository;
import com.training.placify.repository.ResumeVersionRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.service.ResumeService;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.*;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@Service
public class ResumeServiceImpl implements ResumeService {
    @Autowired
    private ResumeDataRepository resumeDataRepository;

    @Autowired
    private ResumeVersionRepository resumeVersionRepository;

    @Autowired
    private StudentRepository studentRepository;
    private ExecutorService executorService = Executors.newCachedThreadPool();
    @Override
    public byte[] generateResume(ResumeData resumeData) throws IOException, InterruptedException {
        PdfGenerationTask task = new PdfGenerationTask(resumeData);
        Future<String> future = executorService.submit(task, ""); // Submit with a placeholder result
        try {
            String pdfFilePath = future.get(); // Wait for the task to complete
            return task.getPdfByteArray();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Restore interrupted status
            throw new IOException("PDF generation interrupted", e);
        } catch (ExecutionException e) {
            // Unwrap the original exception from PdfGenerationTask
            Throwable cause = e.getCause();
            if (cause instanceof RuntimeException) {
                throw (RuntimeException) cause;
            } else {
                throw new IOException("PDF generation failed", cause);
            }
        }

    }

    @Transactional
    @Override
    public ResumeData saveResumeDataAndVersion(final ResumeData resumeData, Long studentId) {
        // Find the student by ID or throw an exception if not found

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + studentId));

        // Find the latest version of the resume for the student
        Optional<Integer> latestVersionOpt = resumeVersionRepository.findLatestVersionByStudentId(studentId);

        // If a version is found, increment it by 1, otherwise start from 1
        int newVersion = latestVersionOpt.map(version -> version + 1).orElse(1);

        // Create a new ResumeVersion object
        ResumeVersion resumeVersion = new ResumeVersion();
        resumeVersion.setStudent(student);
        resumeVersion.setResumeData(resumeData);
        resumeVersion.setVersion(newVersion);
        resumeVersion.setDateCreated(new Date()); // Use current date and time

        resumeData.getEducation().forEach(education -> education.setResumeData(resumeData));
        resumeData.getSkills().setResumeData(resumeData);
        resumeData.getExperience().forEach(experience -> experience.setResumeData(resumeData));
        resumeData.getExtraCurricularActivities().forEach(activity -> activity.setResumeData(resumeData));
        resumeData.getProjects().forEach(project -> project.setResumeData(resumeData));
        resumeData.getCoCurricularActivities().forEach(activity -> activity.setResumeData(resumeData));
        resumeData.getCertifications().forEach(certification -> certification.setResumeData(resumeData));

        // Save the ResumeData entity (this will cascade to child entities)
        resumeDataRepository.save(resumeData);

        // Set the now-persisted resumeData on the resumeVersion
        resumeVersion.setResumeData(resumeData);

        // Save the new ResumeVersion
        resumeVersionRepository.save(resumeVersion);

        // Return the saved resume data
        return resumeData;

    }
}
