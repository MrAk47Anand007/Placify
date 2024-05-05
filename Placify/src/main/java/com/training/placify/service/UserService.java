package com.training.placify.service;

import com.training.placify.dto.UserDTO;
import com.training.placify.model.User;

import java.util.Optional;


public interface UserService {
    User saveUser(UserDTO userDTO);

    void initiatePasswordReset(String email);


    Optional<User> getUserByUserName(String username);
}
