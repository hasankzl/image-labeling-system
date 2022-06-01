package com.school.imagelabeling.repository;

import com.school.imagelabeling.Projection.ImageSetProjectionWithImage;
import com.school.imagelabeling.Projection.ProjectProjection;
import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.model.ImageSet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageSetRepository extends JpaRepository<ImageSet,Long> {

    List<SimpleImageSetProjection> findAllProjectedByUser(ApplicationUser applicationUser);
    ImageSetProjectionWithImage findProjectedById(Long id);

}
