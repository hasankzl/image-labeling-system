package com.school.imagelabeling.model;

import lombok.Data;

import java.util.Date;

@Data
public class ExportLabelJson {

    private String width;
    private String height;
    private String x;
    private String y;
    private String fileName;
    private Date dateCaptured;
}
