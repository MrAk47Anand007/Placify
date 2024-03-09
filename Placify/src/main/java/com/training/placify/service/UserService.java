package com.training.placify.service;

import com.training.placify.dto.UserDTO;
import com.training.placify.model.User;
import jakarta.transaction.Transactional;


public interface UserService {
    User saveUser(UserDTO userDTO);
}
