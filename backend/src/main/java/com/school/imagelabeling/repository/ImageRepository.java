package com.school.imagelabeling.repository;

import com.school.imagelabeling.Projection.ImageLabelingProjection;
import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.model.Image;
import com.school.imagelabeling.model.ImageSet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image,Long> {

    List<ImageLabelingProjection> findAllByImageSetAndUser(ImageSet imageSet, ApplicationUser user);
}
