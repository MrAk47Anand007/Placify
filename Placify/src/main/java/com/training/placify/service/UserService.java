package com.training.placify.service;

import com.training.placify.dto.UserDTO;
import com.training.placify.model.User;

public interface UserService {
    User saveUser(UserDTO userDTO);
}
