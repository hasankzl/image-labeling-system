package com.school.imagelabeling.service.impl;

import com.school.imagelabeling.model.ApplicationUser;
import com.school.imagelabeling.repository.UserRepository;
import com.school.imagelabeling.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public void save(ApplicationUser applicationUser) {

        applicationUser.setPassword(bCryptPasswordEncoder.encode(applicationUser.getPassword()));
        userRepository.save(applicationUser);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public ApplicationUser findById(Long id) {
        Optional<ApplicationUser> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("user not exist");
        }

        return user.get();
    }
}
