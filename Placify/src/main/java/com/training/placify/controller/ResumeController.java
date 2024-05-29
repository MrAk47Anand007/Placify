package com.training.placify.controller;

import com.training.placify.dto.ResumeVersionDTO;
import com.training.placify.model.resumeModel.ResumeData;
import com.training.placify.model.resumeModel.ResumeVersion;
import com.training.placify.repository.ResumeVersionRepository;
import com.training.placify.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://192.168.29.79") // Adjust origin as needed
@RequestMapping("/student/resume")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @Autowired
    private ResumeVersionRepository resumeVersionRepository;

    @PostMapping("/generate")
    public ResponseEntity<String> generateResume(@RequestBody ResumeData resumeData, @RequestParam Long studentId) {
        try {
            // Save resume data and version
            ResumeData savedResumeData = resumeService.saveResumeDataAndVersion(resumeData, studentId);

            // Generate resume PDF
            byte[] pdfData = resumeService.generateResume(savedResumeData, studentId, resumeVersionRepository.findLatestVersionByStudentId(studentId).orElse(1));

            // Encode PDF data to Base64
            String base64PdfData = Base64.getEncoder().encodeToString(pdfData);

            return ResponseEntity.ok(base64PdfData);
        } catch (Exception e) {
            // Handle exceptions, log the error and return appropriate message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error generating resume");
        }
    }

    @GetMapping("/versions/{studentId}")
    public ResponseEntity<List<ResumeVersionDTO>> getResumeVersions(@PathVariable Long studentId) {
        List<ResumeVersion> resumeVersions = resumeVersionRepository.findAllByStudentId(studentId);

        // Convert ResumeVersion entities to DTOs
        List<ResumeVersionDTO> resumeVersionDTOs = resumeVersions.stream()
                .map(version -> new ResumeVersionDTO(version.getId(), version.getVersion(),
                        version.getDateCreated(), version.getResumeData().getName()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(resumeVersionDTOs);
    }

    @DeleteMapping("/delete/{resumeVersionId}")
    public ResponseEntity<Void> deleteResume(@PathVariable Long resumeVersionId) {
        try {
            resumeService.deleteResume(resumeVersionId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}