package com.school.imagelabeling.service;

import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.model.ImageSet;

import java.util.List;

public interface ImageSetService {

    ImageSet save(ImageSet imageSet);

    List<SimpleImageSetProjection> findAll();

    void deleteById(Long id);
}
