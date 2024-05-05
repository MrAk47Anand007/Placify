//package com.training.placify.controller;
//
//import com.training.placify.model.resumeModel.ResumeData;
//import com.training.placify.service.ResumeService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.nio.charset.StandardCharsets;
//
//@RestController
//@CrossOrigin(origins = "http://192.168.29.209")
//@RequestMapping("/student/resume") // Base path for resume API
//public class ResumeController {
//
//    @Autowired
//    private ResumeService resumeService;
//
//    @PostMapping("/generate")
//    public ResponseEntity<byte[]> generateResume(@RequestBody ResumeData resumeData, @RequestParam Long studentId) {
//        try {
//            // Save resume data and version
//            resumeService.saveResumeDataAndVersion(resumeData, studentId);
//
//            // Generate resume PDF
//            byte[] pdfData = resumeService.generateResume(resumeData);
//            return ResponseEntity.ok()
//                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=resume.pdf")
//                    .contentType(MediaType.APPLICATION_PDF)
//                    .body(pdfData);
//        } catch (Exception e) {
//            // Handle exceptions and return an appropriate error response
//            return ResponseEntity.badRequest().body(e.getMessage().getBytes(StandardCharsets.UTF_8));
//        }
//    }
//}

//@RestController
//@CrossOrigin(origins = "http://192.168.29.209")
//@RequestMapping("/student/resume") // Base path for resume API
//public class ResumeController {
//
//    @Autowired
//    private ResumeService resumeService;
//
//    @PostMapping("/generate")
//    public ResponseEntity<String> generateResume(@RequestBody ResumeData resumeData, @RequestParam Long studentId) {
//        try {
//            // Save resume data and version
//            resumeService.saveResumeDataAndVersion(resumeData, studentId);
//
//            // Generate resume PDF
//            byte[] pdfData = resumeService.generateResume(resumeData);
//
//            // Process the resume and return an OK response
//            return ResponseEntity.ok().body("Resume generated successfully");
//        } catch (Exception e) {
//            // Handle exceptions and return an appropriate error response
//            return ResponseEntity.badRequest().body("Failed to generate resume: " + e.getMessage());
//        }
//    }
//}

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
@CrossOrigin(origins = "http://192.168.29.209") // Adjust origin as needed
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
            resumeService.saveResumeDataAndVersion(resumeData, studentId);

            // Generate resume PDF
            byte[] pdfData = resumeService.generateResume(resumeData);

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
}