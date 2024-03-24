package com.training.placify.repository;

import com.training.placify.model.Role;
import com.training.placify.model.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Optional, but good practice
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleType name);

    boolean existsByName(RoleType roleType);
}
