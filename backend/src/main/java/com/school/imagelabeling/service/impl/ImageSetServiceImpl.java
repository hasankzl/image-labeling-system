package com.school.imagelabeling.service.impl;

import com.school.imagelabeling.Projection.ImageProjection;
import com.school.imagelabeling.Projection.ImageSetProjectionWithImage;
import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.model.Image;
import com.school.imagelabeling.model.ImageSet;
import com.school.imagelabeling.repository.ImageRepository;
import com.school.imagelabeling.repository.ImageSetRepository;
import com.school.imagelabeling.service.ImageSetService;
import com.school.imagelabeling.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageSetServiceImpl implements ImageSetService {

    private final ImageSetRepository imageSetRepository;
    private final ImageRepository imageRepository;
    private final UserService userService;

    @Override
    public ImageSet save(ImageSet imageSet) {
        imageSet.setUser(userService.getLoginUser());
        return imageSetRepository.save(imageSet);
    }

    @Override
    public List<SimpleImageSetProjection> findAll() {
        return imageSetRepository.findAllProjectedByUser(userService.getLoginUser());
    }

    @Override
    public void deleteById(Long id) {
        ImageSetProjectionWithImage imageSet = imageSetRepository.findProjectedById(id);

        for(ImageProjection image : imageSet.getImageList()){
            imageRepository.deleteById(image.getId());
        }
        imageSetRepository.deleteById(id);
    }
}
