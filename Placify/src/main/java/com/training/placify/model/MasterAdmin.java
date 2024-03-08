package com.training.placify.model;

import jakarta.persistence.*;

@Entity
public class MasterAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Profile Details - name, email, profilePic etc.
    private String name;
    private String email;
    private String profilePic;

}

