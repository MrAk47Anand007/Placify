package com.training.placify.controller.MasterAdmin;

import com.github.fge.jsonpatch.JsonPatch;
import com.training.placify.dto.StudentDTO;
import com.training.placify.repository.AdminRepository;
import com.training.placify.repository.DepartmentRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.service.MasterAdminService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api") // Base URL for all endpoints in this controller
public class MasterAdminController {

    private final MasterAdminService masterAdminService;

    @Autowired
    public MasterAdminController(MasterAdminService masterAdminService) {
        this.masterAdminService = masterAdminService;
    }

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public ResponseEntity<List<StudentDTO>> getAllStudents() {
        List<StudentDTO> students = masterAdminService.getAllStudents();
        if (students.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(students);
    }

//    @PutMapping("/students/{id}")
//    public ResponseEntity<StudentDTO> updateStudent(@PathVariable Long id, @RequestBody StudentDTO studentDTO) {
//        try {
//            StudentDTO updatedStudent = masterAdminService.updateStudent(id, studentDTO);
//            return ResponseEntity.ok(updatedStudent);
//        } catch (EntityNotFoundException e) {
//            return ResponseEntity.notFound().build();
//        } catch (Exception e) {
//            // Generic exception handling, consider logging the error
//            return ResponseEntity.badRequest().body(null);
//
//
//            // Add more endpoints as needed
//        }
//    }
    @PatchMapping("/students/{id}")
    public ResponseEntity<StudentDTO> updateStudentPartial(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        try {
            StudentDTO updatedStudent = masterAdminService.updateStudent(id, updates);
            return ResponseEntity.ok(updatedStudent);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            // Generic exception handling, consider logging the error
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
    }
}