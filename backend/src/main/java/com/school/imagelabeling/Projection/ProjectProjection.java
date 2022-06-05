package com.school.imagelabeling.Projection;

import java.util.Date;
import java.util.List;

public interface ProjectProjection {

    Long getId();
    String getName();
    SimpleUserProjection getAdmin();
    List<SimpleUserProjection> getUserList();
    Date getCreatedDate();
    List<LabelTypeProjection> getLabelTypeList();

    ProjectImageSetProjection getImageSet();
}
