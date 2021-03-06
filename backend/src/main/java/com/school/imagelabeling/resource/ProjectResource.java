package com.school.imagelabeling.resource;


import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.model.ExportLabelJson;
import com.school.imagelabeling.model.LabelingProject;
import com.school.imagelabeling.model.Project;
import com.school.imagelabeling.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/project")
public class ProjectResource {

    private final ProjectService projectService;



    @PostMapping("/save")
    public void save(@RequestBody Project project){

        projectService.save(project);
    }

    @GetMapping("/findAll")
    public  List<ProjectProjection> findAll(){
        return projectService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void  deleteById(@PathVariable Long id){
        projectService.deleteById(id);
    }

    @GetMapping("/findLabelingById/{id}")
    public LabelingProject findLabelingById(@PathVariable Long id){
        return projectService.getLabelingProject(id);
    }


    @GetMapping("/exportJson/{id}")
    public List<ExportLabelJson> exportJson(@PathVariable Long id){
        return projectService.exportLabelAsJson(id);
    }
}
