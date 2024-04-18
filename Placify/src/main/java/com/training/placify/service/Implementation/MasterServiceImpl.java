package com.training.placify.service.Implementation;

import com.training.placify.dto.AdminDTO;
import com.training.placify.dto.DepartmentDTO;
import com.training.placify.dto.StudentDTO;
import com.training.placify.model.Department;
import com.training.placify.model.Student;
import com.training.placify.repository.AdminRepository;
import com.training.placify.repository.DepartmentRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.service.MasterAdminService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MasterServiceImpl implements MasterAdminService {

    @Autowired
    private DepartmentRepository departmentRepository;

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
    public StudentDTO updateStudent(Long id, Map<String, Object> updates) {
        // Find the existing student
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Student not found with ID: " + id));

        // Use reflection to update fields dynamically
        updates.forEach((fieldName, fieldValue) -> {
            try {
                Field field = Student.class.getDeclaredField(fieldName);
                field.setAccessible(true);
                field.set(existingStudent, fieldValue);
            } catch (NoSuchFieldException | IllegalAccessException e) {
                // Handle exceptions for invalid field names or access issues
                throw new RuntimeException("Error updating field: " + fieldName, e);
            }
        });

        Student updatedStudent = studentRepository.save(existingStudent);
        return convertToDto(updatedStudent, departmentRepository);
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
        return studentRepository.findAll().stream()
                .map(student -> convertToDto(student, departmentRepository)) // Pass departmentRepository
                .collect(Collectors.toList());
    }

    @Override
    public List<StudentDTO> getStudentsByDepartment(Long departmentId) {
        return studentRepository.findStudentsByDepartment_Id(departmentId).stream()
                .map(student -> convertToDto(student, departmentRepository)) // Pass departmentRepository
                .collect(Collectors.toList());
    }

    @Override
    public List<StudentDTO> getEnabledStudents() {
        return studentRepository.findAll().stream()
                .filter(Student::getIsEnabled)
                .map(student -> convertToDto(student, departmentRepository)) // Pass departmentRepository
                .collect(Collectors.toList());
    }

    @Override
    public List<StudentDTO> getDisabledStudents() {
        return studentRepository.findAll().stream()
                .filter(student -> !student.getIsEnabled())
                .map(student -> convertToDto(student, departmentRepository)) // Pass departmentRepository
                .collect(Collectors.toList());
    }

    // Utility method to convert Student entity to StudentDTO
    private StudentDTO convertToDto(Student student, DepartmentRepository departmentRepository) {
        if (student == null) {
            return null;
        }

        StudentDTO studentDTO = new StudentDTO();

        // Mapping User fields (inherited by Student)
        studentDTO.setId(student.getId());
        studentDTO.setFirstName(student.getFirstName());
        studentDTO.setLastName(student.getLastName());
        studentDTO.setPersonalEmail(student.getPersonalEmail());
        studentDTO.setCollegeEmail(student.getCollegeEmail());
        studentDTO.setGender(student.getGender());
        studentDTO.setIsEnabled(student.getIsEnabled());

        // Convert Department to DepartmentDTO using provided repository
        if (student.getDepartment() != null) {
            studentDTO.setDepartment(convertDepartmentToDto(student.getDepartment(), departmentRepository)); // Pass repository
        }

        // Mapping Student specific fields
        studentDTO.setPhoneNo(student.getPhone_no());
        studentDTO.setPassoutYear(student.getPassoutYear());
        studentDTO.setRollNo(student.getRoll_no());
        studentDTO.setPrnNo(student.getPrnNo());
        studentDTO.setErpId(student.getErpId());

        return studentDTO;
    }

    // Hypothetical method to convert Department entity to DepartmentDTO
    private DepartmentDTO convertDepartmentToDto(Department department, DepartmentRepository departmentRepository) {
        DepartmentDTO departmentDTO = new DepartmentDTO();
        departmentDTO.setId(department.getId());
        departmentDTO.setDeptName(department.getName());
        // Add other fields as necessary
        return departmentDTO;
    }

//    @Override
//    public List<StudentDTO> getAllFemaleStudents() {
//        return studentRepository.findByGender("female").stream()
//                .map(this::convertToDto)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public List<StudentDTO> getAllFemaleStudentsByDepartment(Long departmentId) {
//        return studentRepository.findByGenderAndDepartment_Id("female", departmentId).stream()
//                .map(this::convertToDto)
//                .collect(Collectors.toList());
//    }

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
