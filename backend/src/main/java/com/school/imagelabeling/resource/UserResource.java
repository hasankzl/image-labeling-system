package com.school.imagelabeling.resource;


import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserResource {

    private final UserService userService;


    @PostMapping("/save")
    public void save(@RequestBody ApplicationUser applicationUser){
        userService.save(applicationUser);
    }


    @GetMapping("/findById/{id}")
    public ApplicationUser findById(@PathVariable Long id){
        return userService.findById(id);
    }
}
