package com.school.imagelabeling.Projection;


import java.util.Date;

public interface LabelProjection {

    String getHeight();

    String getWidth();

    String getX();

    String getY();

    ImageProjection getImage();

    Date getCreatedDate();

}
