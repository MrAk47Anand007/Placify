package com.training.placify.repository;

import com.training.placify.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom query methods here if needed in the future.
    Optional<User> findByCollegeEmail(String collegeEmail);
}
