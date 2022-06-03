package com.school.imagelabeling.Projection;

import java.util.List;

public interface ProjectLabelingProjection {


    Long getId();
    String getName();
    SimpleImageSetProjection getImageSet();
    List<LabelTypeProjection> getLabelTypeList();
}
