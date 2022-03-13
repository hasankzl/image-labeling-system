package com.school.imagelabeling.repository;

import com.school.imagelabeling.model.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<ApplicationUser,Long> {

    ApplicationUser findByUsername(String username);
}
