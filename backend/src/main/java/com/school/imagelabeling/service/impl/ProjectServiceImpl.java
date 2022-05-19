package com.school.imagelabeling.service.impl;


import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.Projection.SimpleUserProjection;
import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.model.Project;
import com.school.imagelabeling.repository.ProjectRepository;
import com.school.imagelabeling.repository.UserRepository;
import com.school.imagelabeling.service.ProjectService;
import io.jsonwebtoken.impl.DefaultClaims;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    @Override
    public void save(Project project) {
        DefaultClaims claims = (DefaultClaims) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        // login olan kullanicinin bilgilerini al
        SimpleUserProjection currentUser = userRepository.findAllProjectedByUsername(claims.getSubject());
        ApplicationUser applicationUser = new ApplicationUser();
        applicationUser.setId(currentUser.getId());
        project.setAdmin(applicationUser);
        projectRepository.save(project);
    }

    @Override
    public List<ProjectProjection> findAll() {
        return projectRepository.findAllProjectedBy();
    }

    @Override
    public void deleteById(Long id) {

        projectRepository.deleteById(id);
    }
}
