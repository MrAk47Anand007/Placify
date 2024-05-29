package com.training.placify.controller.MasterAdmin;

import com.training.placify.model.Student;
import com.training.placify.model.companyModel.EligibilityCriteria;
import com.training.placify.model.companyModel.PlacementDrive;
import com.training.placify.service.EligibilityEvaluator;
import com.training.placify.repository.PlacementDriveRepository;
import com.training.placify.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/eligibility")
public class EligibilityController {

    @Autowired
    private EligibilityEvaluator eligibilityEvaluator;

    @Autowired
    private PlacementDriveRepository placementDriveRepository;

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/check/{driveId}/{studentId}")
    public boolean checkEligibility(@PathVariable Long driveId, @PathVariable Long studentId) {
        PlacementDrive drive = placementDriveRepository.findById(driveId).orElse(null);
        Student student = studentRepository.findById(studentId).orElse(null);

        if (drive == null || student == null) {
            return false;
        }

        EligibilityCriteria criteria = drive.getEligibilityCriteria();
        return eligibilityEvaluator.isStudentEligible(student, criteria);
    }

    @GetMapping("/eligible-drives/{studentId}")
    public List<PlacementDrive> getEligibleDrives(@PathVariable Long studentId) {
        Student student = studentRepository.findById(studentId).orElse(null);
        if (student == null) {
            return null; // or throw an appropriate exception
        }

        List<PlacementDrive> allDrives = placementDriveRepository.findAll();
        return allDrives.stream()
                .filter(drive -> eligibilityEvaluator.isStudentEligible(student, drive.getEligibilityCriteria()))
                .collect(Collectors.toList());
    }
}
