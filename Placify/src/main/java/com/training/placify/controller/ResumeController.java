package com.training.placify.controller;

import com.training.placify.model.ResumeData;
import com.training.placify.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/resume") // Base path for resume API
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/generate")
    public ResponseEntity<byte[]> generateResume(@RequestBody ResumeData resumeData) {
        try {
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