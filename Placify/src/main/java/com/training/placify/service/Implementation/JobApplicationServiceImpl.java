package com.training.placify.service.Implementation;

import com.training.placify.model.Student;
import com.training.placify.model.companyModel.ApplicationStatus;
import com.training.placify.model.companyModel.EligibilityCriteria;
import com.training.placify.model.companyModel.JobApplication;
import com.training.placify.model.companyModel.PlacementDrive;
import com.training.placify.model.resumeModel.ResumeVersion;
import com.training.placify.repository.JobApplicationRepository;
import com.training.placify.repository.PlacementDriveRepository;
import com.training.placify.repository.ResumeVersionRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.service.EligibilityEvaluator;
import com.training.placify.service.JobApplicationService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class JobApplicationServiceImpl implements JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PlacementDriveRepository placementDriveRepository;

    @Autowired
    private ResumeVersionRepository resumeVersionRepository;

    @Autowired
    private EligibilityEvaluator eligibilityEvaluator; // Assuming you have this utility class

    @Override
    @Transactional
    public JobApplication applyForJob(Long studentId, Long placementDriveId, Long resumeVersionId) {
        // 1. Fetch entities
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
        PlacementDrive placementDrive = placementDriveRepository.findById(placementDriveId)
                .orElseThrow(() -> new EntityNotFoundException("Placement drive not found"));
        ResumeVersion resumeVersion = resumeVersionRepository.findById(resumeVersionId)
                .orElseThrow(() -> new EntityNotFoundException("Resume version not found"));

        // 2. Check eligibility
        EligibilityCriteria criteria = placementDrive.getEligibilityCriteria();
        if (!eligibilityEvaluator.isStudentEligible(student, criteria)) {
            throw new RuntimeException("Student is not eligible for this placement drive.");
        }

        // 3. Create JobApplication
        JobApplication jobApplication = new JobApplication();
        jobApplication.setStudent(student);
        jobApplication.setPlacementDrive(placementDrive);
        jobApplication.setResumeVersion(resumeVersion);
        jobApplication.setStatus(ApplicationStatus.APPLIED);
        jobApplication.setApplicationDate(new Date());

        // 4. Save and return
        return jobApplicationRepository.save(jobApplication);
    }

}
