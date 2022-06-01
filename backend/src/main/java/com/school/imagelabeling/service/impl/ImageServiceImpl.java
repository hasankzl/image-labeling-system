package com.school.imagelabeling.service.impl;

import com.school.imagelabeling.model.Image;
import com.school.imagelabeling.repository.ImageRepository;
import com.school.imagelabeling.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ImageServiceImpl  implements ImageService {

    private final ImageRepository imageRepository;
    @Override
    public void save(Image image) {

        imageRepository.save(image);
    }
}
