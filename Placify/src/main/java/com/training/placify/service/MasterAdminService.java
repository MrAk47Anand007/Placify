package com.training.placify.service;

import com.training.placify.dto.AdminDTO;
import com.training.placify.dto.StudentDTO;
import java.util.List;
import java.util.Map;

public interface MasterAdminService {
    // CRUD operations for Students
    StudentDTO createStudent(StudentDTO studentDTO);
    StudentDTO updateStudent(Long id, Map<String,Object> map);
    void deleteStudent(Long id);
    StudentDTO blockStudent(Long id, StudentDTO studentDTO);
    List<StudentDTO> getAllStudents();

    

    List<StudentDTO> getStudentsByDepartment(Long departmentId);
    List<StudentDTO> getEnabledStudents();
    List<StudentDTO> getDisabledStudents();
//    List<StudentDTO> getAllFemaleStudents();
//    List<StudentDTO> getAllFemaleStudentsByDepartment(Long departmentId);






    // CRUD operations for Admins
    AdminDTO createAdmin(AdminDTO adminDTO);
    AdminDTO updateAdmin(Long id, AdminDTO adminDTO);
    void deleteAdmin(Long id);
    List<AdminDTO> getAllAdmins();
    List<AdminDTO> getAllAdminsByDepartment();


}