package com.training.placify.controller.StudentApi;

import com.training.placify.model.companyModel.JobApplication;
import com.training.placify.service.JobApplicationService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/apply")
    public ResponseEntity<JobApplication> applyForJob(
            @RequestParam Long studentId,
            @RequestParam Long placementDriveId,
            @RequestParam Long resumeVersionId) {
        try {
            JobApplication application = jobApplicationService.applyForJob(studentId, placementDriveId, resumeVersionId);
            return ResponseEntity.status(HttpStatus.CREATED).body(application);
        } catch (EntityNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    // Add more endpoints as needed for other operations like:
    // - Getting application status
    // - Updating application details
    // - Listing applications for a student or placement drive

}