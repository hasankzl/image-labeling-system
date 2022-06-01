package com.school.imagelabeling.service.impl;


import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.model.Label;
import com.school.imagelabeling.repository.LabelRepository;
import com.school.imagelabeling.service.LabelService;
import com.school.imagelabeling.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LabelServiceImpl implements LabelService {

    private final LabelRepository labelRepository;
private final UserService userService;
    @Override
    public void save(Label label) {
        ApplicationUser user = userService.getLoginUser();
        label.setUser(user);
        labelRepository.save(label);
    }

    @Override
    public void saveAll(List<Label> labelList) {
        ApplicationUser user = userService.getLoginUser();

        labelList.stream().map(label ->{
            label.setUser(user);
            return label;
        });

        labelRepository.saveAll(labelList);

         
    }
}
