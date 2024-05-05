package com.training.placify.security.jwtAuth;

import com.training.placify.model.User; // Import your User entity
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserDetailsImpl implements UserDetails {

    private User user;

    public UserDetailsImpl(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Assuming your User entity has a Role or Authority field that can be converted to GrantedAuthority
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole().getName()));
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getCollegeEmail(); // Or any unique field that represents the username
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // You might want to add logic to check if the account is expired
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Similarly, add logic to check if the account is locked
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // And check if the credentials (password) is expired
    }

    @Override
    public boolean isEnabled() {
        return user.getIsEnabled(); // Assuming your User entity has a field to check if the account is enabled
    }
}