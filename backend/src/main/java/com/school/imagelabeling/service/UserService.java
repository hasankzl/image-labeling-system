package com.school.imagelabeling.service;

import com.school.imagelabeling.Projection.SimpleUserProjection;
import com.school.imagelabeling.model.ApplicationUser;

import java.util.List;

public interface UserService {

    void save(ApplicationUser applicationUser);

    void delete(Long id);

    ApplicationUser findById(Long id);

    List<SimpleUserProjection> findAllSimple();

    ApplicationUser getLoginUser();
}
