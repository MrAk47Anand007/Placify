package com.training.placify.repository;

import com.training.placify.dto.StudentDTO;
import com.training.placify.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    @NonNull
    Optional<Student> findById(@NonNull Long id);

    @Override
    void delete(@NonNull Student entity);

    @Override
    void deleteById(@NonNull Long id);

    List<Student> findByGender(String gender);

    List<Student> findByGenderAndDepartment_Id(String gender, Long departmentId);




    Optional<Student> findStudentsByDepartment_Id(Long id);
}
