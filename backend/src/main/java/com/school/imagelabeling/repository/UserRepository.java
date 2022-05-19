package com.school.imagelabeling.repository;

import com.school.imagelabeling.Projection.SimpleUserProjection;
import com.school.imagelabeling.model.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<ApplicationUser,Long> {

    ApplicationUser findByUsername(String username);

    List<SimpleUserProjection> findAllProjectedBy();
    SimpleUserProjection findAllProjectedByUsername(String username);
}
