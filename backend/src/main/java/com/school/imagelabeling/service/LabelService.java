package com.school.imagelabeling.service;

import com.school.imagelabeling.model.Label;

import java.util.List;

public interface LabelService {

    void save(Label label);
    void saveAll(List<Label> labelList);

}
