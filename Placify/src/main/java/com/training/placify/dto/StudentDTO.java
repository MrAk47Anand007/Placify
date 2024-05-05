package com.training.placify.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDTO extends UserDTO {
    private String phone_No;
    private Integer passoutYear;
    private String roll_No;
    private String prnNo;
    private String erpId;

}