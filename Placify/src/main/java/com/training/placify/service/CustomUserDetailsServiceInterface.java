package com.training.placify.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface CustomUserDetailsServiceInterface {
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}