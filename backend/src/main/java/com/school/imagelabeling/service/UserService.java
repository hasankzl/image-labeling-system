package com.school.imagelabeling.service;

import com.school.imagelabeling.model.ApplicationUser;

public interface UserService {

    void save(ApplicationUser applicationUser);

    void delete(Long id);

    ApplicationUser findById(Long id);

}
