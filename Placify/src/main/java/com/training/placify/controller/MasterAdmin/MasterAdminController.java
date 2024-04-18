package com.training.placify.controller.MasterAdmin;

import com.training.placify.dto.StudentDTO;
import com.training.placify.service.MasterAdminService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api") // Base URL for all endpoints in this controller
public class MasterAdminController {

    private final MasterAdminService masterAdminService;

    @Autowired
    public MasterAdminController(MasterAdminService masterAdminService) {
        this.masterAdminService = masterAdminService;
    }

    @GetMapping("/students")
    public ResponseEntity<List<StudentDTO>> getAllStudents() {
        List<StudentDTO> students = masterAdminService.getAllStudents();
        if (students.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(students);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<StudentDTO> updateStudent(@PathVariable Long id, @RequestBody StudentDTO studentDTO) {
        try {
            StudentDTO updatedStudent = masterAdminService.updateStudent(id, studentDTO);
            return ResponseEntity.ok(updatedStudent);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            // Generic exception handling, consider logging the error
            return ResponseEntity.badRequest().body(null);


            // Add more endpoints as needed
        }
    }
    @PatchMapping("/students/patch/{id}")
    public ResponseEntity<StudentDTO> updateStudentPartial(@PathVariable Long id, @RequestBody StudentDTO studentDTO) {
        try {
            StudentDTO updatedStudent = masterAdminService.updateStudent(id, studentDTO);
            return ResponseEntity.ok(updatedStudent);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            // Generic exception handling, consider logging the error
            return ResponseEntity.badRequest().body(null);
        }
    }
}