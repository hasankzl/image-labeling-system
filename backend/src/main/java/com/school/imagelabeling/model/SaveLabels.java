package com.school.imagelabeling.model;

import lombok.Data;

import java.util.List;

@Data
public class SaveLabels {
    private Image image;
    private List<Label> labelList;
}
