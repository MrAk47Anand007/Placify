//package com.training.placify.controller.Student;
//
//import com.training.placify.dto.JobApplicationDTO;
//import com.training.placify.model.companyModel.ApplicationStatus;
//import com.training.placify.model.companyModel.JobApplication;
//import com.training.placify.service.JobApplicationService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/jobApplications")
//public class JobApplicationController {
//
//    @Autowired
//    private JobApplicationService jobApplicationService;
//
//    @PostMapping("/apply")
//    public ResponseEntity<JobApplication> applyForJob(@RequestBody JobApplicationDTO jobApplicationDTO) {
//        try {
//            JobApplication jobApplication = new JobApplication();
//            jobApplication.setStudentId(jobApplicationDTO.getStudentId());
//            jobApplication.setPlacementDriveId(jobApplicationDTO.getPlacementDriveId());
//            jobApplication.setApplicationDate(jobApplicationDTO.getApplicationDate());
//            jobApplication.setResumeVersionId(jobApplicationDTO.getResumeVersionId());
//            jobApplication.setStatus(ApplicationStatus.APPLIED); // Set default status to APPLIED
//
//            JobApplication savedJobApplication = jobApplicationService.applyForJob(jobApplication);
//            return ResponseEntity.status(HttpStatus.CREATED).body(savedJobApplication);
//        } catch (Exception e) {
//            // Handle the exception appropriately
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
//}
