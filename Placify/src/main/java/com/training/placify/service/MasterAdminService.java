package com.training.placify.service;

import com.training.placify.dto.AdminDTO;
import com.training.placify.dto.StudentDTO;
import java.util.List;

public interface MasterAdminService {
    // CRUD operations for Students
    StudentDTO createStudent(StudentDTO studentDTO);
    StudentDTO updateStudent(Long id, StudentDTO studentDTO);
    void deleteStudent(Long id);
    StudentDTO blockStudent(Long id, StudentDTO studentDTO);
    List<StudentDTO> getAllStudents();
    List<StudentDTO> getAllStudentsByDepartment();
    List<StudentDTO> getAllFemaleStudents();
    List<StudentDTO> getAllFemaleStudentsByDepartment();






    // CRUD operations for Admins
    AdminDTO createAdmin(AdminDTO adminDTO);
    AdminDTO updateAdmin(Long id, AdminDTO adminDTO);
    void deleteAdmin(Long id);
    List<AdminDTO> getAllAdmins();
    List<AdminDTO> getAllAdminsByDepartment();


}