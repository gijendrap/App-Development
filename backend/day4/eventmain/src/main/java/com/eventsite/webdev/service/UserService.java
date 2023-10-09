package com.eventsite.webdev.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.eventsite.webdev.dto.response.UserResponse;
import com.eventsite.webdev.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventsite.webdev.model.Role;
import com.eventsite.webdev.model.User;

@Service
public class UserService {
    
    @Autowired
    UserRepo userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }

    public Optional<User> read(Long id) {
        return userRepository.findById(id);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}
