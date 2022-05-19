package com.school.imagelabeling.repository;

import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project,Long> {

    List<ProjectProjection> findAllProjectedBy();
}
