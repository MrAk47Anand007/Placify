//package com.training.placify.service.implementation;
//
//import com.training.placify.dto.StudentDTO;
//import com.training.placify.model.Student;
//import com.training.placify.model.Department;
//import com.training.placify.repository.DepartmentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ConversionService {
//
//    @Autowired
//    private DepartmentRepository departmentRepository;
//
//    public Student convertToEntity(StudentDTO studentDTO) {
//        Student student = new Student();
//        student.setId(studentDTO.getId());
//        student.setFirstName(studentDTO.getFirstName());
//        student.setLastName(studentDTO.getLastName());
//        student.setCollegeEmail(studentDTO.getCollegeEmail());
//        student.setPersonalEmail(studentDTO.getPersonalEmail());
//        student.setPassword(studentDTO.getPassword());
//        student.setErpId(studentDTO.getErpId());
//        student.setPassoutYear(studentDTO.getPassoutYear());
//        student.setPhone_no(studentDTO.getPhoneNo());
//        student.setPrnNo(studentDTO.getPrnNo());
//        student.setRoll_no(studentDTO.getRollNo());
//        student.setGender(studentDTO.getGender());
//        student.setIsEnabled(studentDTO.getIsEnabled());
//        // Assuming department name is enough to find the department entity
//        Department department = departmentRepository.findByName(studentDTO.getDepartment().getDeptName())
//                .orElseThrow(() -> new RuntimeException("Department not found"));
//        student.setDepartment(department);
//        return student;
//    }
//
//    public StudentDTO convertToDto(Student student) {
//        StudentDTO studentDTO = new StudentDTO();
//        studentDTO.setId(student.getId());
//        studentDTO.setFirstName(student.getFirstName());
//        studentDTO.setLastName(student.getLastName());
//        studentDTO.setEmail(student.getEmail());
//        studentDTO.setDepartment(student.getDepartment().getName()); // Assuming Department has a getName() method
//        return studentDTO;
//    }
//}