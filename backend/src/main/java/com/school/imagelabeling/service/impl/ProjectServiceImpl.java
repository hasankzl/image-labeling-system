package com.school.imagelabeling.service.impl;


import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.Projection.SimpleUserProjection;
import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.model.Project;
import com.school.imagelabeling.repository.ProjectRepository;
import com.school.imagelabeling.repository.UserRepository;
import com.school.imagelabeling.service.ProjectService;
import com.school.imagelabeling.service.UserService;
import io.jsonwebtoken.impl.DefaultClaims;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final UserService userService;

    @Override
    public void save(Project project) {



        project.setAdmin(userService.getLoginUser());
        projectRepository.save(project);
    }

    @Override
    public List<ProjectProjection> findAll() {

        ApplicationUser applicationUser = new ApplicationUser();
        applicationUser.setId(userService.getLoginUser().getId());
        return projectRepository.findAllProjectedByAdmin(applicationUser);
    }

    @Override
    public void deleteById(Long id) {

        projectRepository.deleteById(id);
    }
}
