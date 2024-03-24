package com.training.placify.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor // A no-argument constructor
@AllArgsConstructor // A constructor with all arguments
@Entity
public class Student extends User{

    private String phone_no;

    private int passoutYear;


}
