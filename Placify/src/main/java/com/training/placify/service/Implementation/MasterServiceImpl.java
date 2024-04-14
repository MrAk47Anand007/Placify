package com.training.placify.service.Implementation;

import com.training.placify.dto.AdminDTO;
import com.training.placify.dto.StudentDTO;
import com.training.placify.model.Student;
import com.training.placify.repository.AdminRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.service.MasterAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MasterServiceImpl implements MasterAdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private StudentRepository studentRepository;
    @Override
    public StudentDTO createStudent(StudentDTO studentDTO) {
//        // Assuming you have a method to convert a StudentDTO to a Student entity
//        Student student = convertToEntity(studentDTO);
//        // Save the student entity using the repository
//        Student savedStudent = studentRepository.save(student);
//        // Convert the saved student entity back to a DTO to return
//        return convertToDto(savedStudent);
        return null;
    }

    @Override
    public StudentDTO updateStudent(Long id, StudentDTO studentDTO) {
        //studentRepository.updateStudentById(studentDTO,id);
        return null;
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public StudentDTO blockStudent(Long id, StudentDTO studentDTO) {
        return null;
    }

    @Override
    public List<StudentDTO> getAllStudents() {
        return null;
    }

    @Override
    public List<StudentDTO> getAllStudentsByDepartment() {
        return null;
    }

    @Override
    public List<StudentDTO> getAllFemaleStudents() {
        return null;
    }

    @Override
    public List<StudentDTO> getAllFemaleStudentsByDepartment() {
        return null;
    }

    @Override
    public AdminDTO createAdmin(AdminDTO adminDTO) {
        return null;
    }

    @Override
    public AdminDTO updateAdmin(Long id, AdminDTO adminDTO) {
        return null;
    }

    @Override
    public void deleteAdmin(Long id) {

    }

    @Override
    public List<AdminDTO> getAllAdmins() {
        return null;
    }

    @Override
    public List<AdminDTO> getAllAdminsByDepartment() {
        return null;
    }
}
