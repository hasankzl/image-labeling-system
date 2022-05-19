package com.school.imagelabeling.Projection;

import java.util.Date;

public interface SimpleImageSetProjection {

    Long getId();
    String getName();
    SimpleUserProjection getUser();
    Date getCreatedDate();
}
