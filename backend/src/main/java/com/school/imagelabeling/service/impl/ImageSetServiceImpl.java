package com.school.imagelabeling.service.impl;

import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.model.ImageSet;
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

    private final UserService userService;

    @Override
    public void save(ImageSet imageSet) {
        imageSet.setUser(userService.getLoginUser());
        imageSetRepository.save(imageSet);
    }

    @Override
    public List<SimpleImageSetProjection> findAll() {
        return imageSetRepository.findAllProjectedByUser(userService.getLoginUser());
    }

    @Override
    public void deleteById(Long id) {
        imageSetRepository.deleteById(id);
    }
}
