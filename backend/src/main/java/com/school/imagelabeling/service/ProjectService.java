package com.school.imagelabeling.service;

import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.model.Project;

import java.util.List;

public interface ProjectService {


    void save(Project project);

    List<ProjectProjection> findAll();

    void deleteById(Long id);

}
