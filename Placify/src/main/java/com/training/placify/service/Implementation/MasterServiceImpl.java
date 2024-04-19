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
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
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
    @Transactional
    public StudentDTO updateStudent(Long id, Map<String, Object> updates) {
        // Find the existing student
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Student not found with ID: " + id));

        // Iterate over the map to update fields dynamically using reflection
        for (Map.Entry<String, Object> entry : updates.entrySet()) {
            String fieldName = entry.getKey();
            Object fieldValue = entry.getValue();

            // Use reflection to update fields both in Student and User classes
            try {
                // First, try setting the field on the Student class
                Field field = trySetField(existingStudent.getClass(), existingStudent, fieldName, fieldValue);

                // If the field is not found in Student, try setting it on the User class
                if (field == null) {
                    field = trySetField(existingStudent.getClass().getSuperclass(), existingStudent, fieldName, fieldValue);
                }

                // If the field is still not found, log or handle accordingly
                if (field == null) {
                    System.out.println("Field not found: " + fieldName);
                }
            } catch (Exception e) {
                // Handle exceptions, possibly logging them or throwing a custom exception
                e.printStackTrace();
            }
        }

        // Save the updated student entity
        Student updatedStudent = studentRepository.save(existingStudent);


        // Assuming convertToDto also needs a DepartmentRepository to convert Department entity to DTO
        System.out.println(updatedStudent);
        return convertToDto(updatedStudent, departmentRepository);
    }

    private Field trySetField(Class<?> clazz, Object object, String fieldName, Object fieldValue) throws Exception {
        try {
            Field field = clazz.getDeclaredField(fieldName);
            field.setAccessible(true);
            field.set(object, fieldValue);
            return field;
        } catch (NoSuchFieldException e) {
            // Field not found in the current class, return null to indicate this
            return null;
        }
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
        studentDTO.setPhone_No(student.getPhone_no());
        studentDTO.setPassoutYear(student.getPassoutYear());
        studentDTO.setRoll_No(student.getRoll_no());
        studentDTO.setPrnNo(student.getPrnNo());
        studentDTO.setErpId(student.getErpId());
        System.out.println("Converted DTO: " + studentDTO);
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
