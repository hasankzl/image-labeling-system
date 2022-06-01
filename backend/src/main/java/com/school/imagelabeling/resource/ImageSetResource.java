package com.school.imagelabeling.resource;


import com.school.imagelabeling.Projection.SimpleImageSetProjection;
import com.school.imagelabeling.config.FileUtil;
import com.school.imagelabeling.model.Image;
import com.school.imagelabeling.model.ImageSet;
import com.school.imagelabeling.service.ImageService;
import com.school.imagelabeling.service.ImageSetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/imageSet")
public class ImageSetResource {

    private final ImageSetService imageSetService;


    private final ImageService imageService;
    @GetMapping("/findAll")
    public List<SimpleImageSetProjection> findAll(){

        return imageSetService.findAll();
    }

    @PostMapping("/save")
    public void save(@RequestParam("imageSet") String imageSetName,@RequestParam("files") MultipartFile[] files){

            createDirIfNotExist();
            ImageSet imageSet = new ImageSet();
            imageSet.setName(imageSetName);
            ImageSet savedImageSet = imageSetService.save(imageSet);


            // read and write the file to the local folder
            Arrays.asList(files).stream().forEach(file -> {
                byte[] bytes = new byte[0];
                try {
                    bytes = file.getBytes();
                    Files.write(Paths.get(FileUtil.folderPath + savedImageSet.getId()+file.getOriginalFilename()), bytes);
                    Image image = new Image();
                    image.setName(savedImageSet.getId()+file.getOriginalFilename());
                    image.setUrl(FileUtil.folderPath +savedImageSet.getId()+ file.getOriginalFilename());
                    image.setImageSet(savedImageSet);
                    imageService.save(image);
                } catch (IOException e) {

                }
            });
    }

    @DeleteMapping("/delete/{id}")
    public void  deleteById(@PathVariable Long id){
        imageSetService.deleteById(id);
    }

    private void createDirIfNotExist() {
        //create directory to save the files
        File directory = new File(FileUtil.folderPath);
        if (! directory.exists()){
            directory.mkdir();
        }
    }

}
