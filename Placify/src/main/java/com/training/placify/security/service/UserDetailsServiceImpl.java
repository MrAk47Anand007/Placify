package com.training.placify.security.service;

import com.training.placify.model.User;
import com.training.placify.repository.UserRepository; // Assuming you have a  UserRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByCollegeEmail(email) // Find by college email
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + email));

        return new org.springframework.security.core.userdetails.User(
                user.getCollegeEmail(),
                user.getPassword(),
                List.of(new SimpleGrantedAuthority(user.getRole().getName().name()))
        );
    }
}
