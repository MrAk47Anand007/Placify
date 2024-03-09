/*package com.training.placify.service.Implementation;

import com.training.placify.model.User;
import com.training.placify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String collegeEmail) throws UsernameNotFoundException {
        User user = userRepository.findByCollegeEmail(collegeEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with college email: " + collegeEmail));

        return new org.springframework.security.core.userdetails.User(
                user.getCollegeEmail(),
                user.getPassword(),
                getAuthorities(user) // We'll create this helper method
        );
    }

    private List<GrantedAuthority> getAuthorities(User user) {
        return user.getRole().getPermissions().stream() // Assumes roles have associated permissions
                .map(permission -> new SimpleGrantedAuthority(permission.getName()))
                .collect(Collectors.toList());
    }
}
*/