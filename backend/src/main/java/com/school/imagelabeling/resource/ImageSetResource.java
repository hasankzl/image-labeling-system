package com.school.imagelabeling.resource;


import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.model.ImageSet;
import com.school.imagelabeling.service.ImageSetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/imageSet")
public class ImageSetResource {

    private final ImageSetService imageSetService;



    @GetMapping("/findAll")
    public List<SimpleImageSetProjection> findAll(){

        return imageSetService.findAll();
    }

    @PostMapping("/save")
    public void save(@RequestBody ImageSet imageSet){

        imageSetService.save(imageSet);
    }

    @DeleteMapping("/delete/{id}")
    public void  deleteById(@PathVariable Long id){
        imageSetService.deleteById(id);
    }



}
