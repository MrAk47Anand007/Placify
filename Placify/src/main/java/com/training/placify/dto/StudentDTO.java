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
    private String phoneNo;
    private int passoutYear;
    private String rollNo;
    private String prnNo;
    private String erpId;

}