package com.school.imagelabeling.model;

import com.school.imagelabeling.Projection.ImageLabelingProjection;
import com.school.imagelabeling.Projection.ProjectLabelingProjection;
import lombok.Data;

import java.util.List;

@Data
public class LabelingProject {

    private ProjectLabelingProjection project;

    private  List<ImageLabelingProjection> imageList;

}
