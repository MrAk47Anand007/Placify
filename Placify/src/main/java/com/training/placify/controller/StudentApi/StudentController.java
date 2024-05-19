package com.training.placify.controller.StudentApi;


import com.training.placify.service.StudentService;
import net.sourceforge.tess4j.TesseractException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://192.168.29.79")
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/extract/image-data")
    public ResponseEntity<String> extractTextFromImage(@RequestParam("form-data") MultipartFile image) {
        try {
            String extractedText = studentService.performOcr(image);
            return ResponseEntity.ok(extractedText);
        } catch (IOException | TesseractException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
