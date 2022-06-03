package com.school.imagelabeling.resource;

import com.school.imagelabeling.model.Label;
import com.school.imagelabeling.service.LabelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/label")
public class LabelResource {

    private final LabelService labelService;



    @PostMapping("/saveAll")
    public void saveAll(@RequestBody List<Label> labelList){
        labelService.saveAll(labelList);
    }
}
