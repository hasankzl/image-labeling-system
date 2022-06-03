package com.school.imagelabeling.Projection;

import java.util.List;

public interface ImageProjection {

    Long getId();

    String getName();

    List<LabelProjection> getLabelList();
}
