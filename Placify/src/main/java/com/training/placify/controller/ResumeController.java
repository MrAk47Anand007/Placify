package com.training.placify.controller;

import com.training.placify.model.resumeModel.ResumeData;
import com.training.placify.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;

@RestController
@CrossOrigin(origins = "http://192.168.29.79")
@RequestMapping("/api/resume") // Base path for resume API
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/generate")
    public ResponseEntity<byte[]> generateResume(@RequestBody ResumeData resumeData, @RequestParam Long studentId) {
        try {
            // Save resume data and version
            resumeService.saveResumeDataAndVersion(resumeData, studentId);

            // Generate resume PDF
            byte[] pdfData = resumeService.generateResume(resumeData);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=resume.pdf")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdfData);
        } catch (Exception e) {
            // Handle exceptions and return an appropriate error response
            return ResponseEntity.badRequest().body(e.getMessage().getBytes(StandardCharsets.UTF_8));
        }
    }
}