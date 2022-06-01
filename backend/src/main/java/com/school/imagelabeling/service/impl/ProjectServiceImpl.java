package com.school.imagelabeling.service.impl;


import com.school.imagelabeling.Projection.*;
import com.school.imagelabeling.model.*;
import com.school.imagelabeling.repository.ImageRepository;
import com.school.imagelabeling.repository.ImageSetRepository;
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
    private final ImageSetRepository imageSetRepository;
    private final ImageRepository imageRepository;

    @Override
    public void save(Project project) {


        ImageSetProjectionWithImage imageSet = imageSetRepository.findProjectedById(project.getImageSet().getId());

        int imageCountByPerson = imageSet.getImageList().size() / project.getUserList().size();
        int counter = 0;
        for (ApplicationUser applicationUser :
                project.getUserList()) {

            for (int i = imageCountByPerson * counter; i < imageCountByPerson + (imageCountByPerson * counter); i++) {
                Image image = imageRepository.findById(imageSet.getImageList().get(i).getId()).get();
                image.setUser(applicationUser);
                imageRepository.save(image);
            }
            counter++;
        }
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

    @Override
    public LabelingProject getLabelingProject(Long id) {
        LabelingProject labelingProject = new LabelingProject();
        ProjectLabelingProjection projectLabelingProjection = projectRepository.findProjectedById(id);
        labelingProject.setProject(projectLabelingProjection);
        ImageSet imageSet = new ImageSet();
        imageSet.setId(projectLabelingProjection.getImageSet().getId());
        List<ImageLabelingProjection> imageList = imageRepository.findAllByImageSetAndUser(imageSet,userService.getLoginUser());
        labelingProject.setImageList(imageList);
        return labelingProject;
    }
}
