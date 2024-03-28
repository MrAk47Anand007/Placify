package com.training.placify.controller.AdminApi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminStarter {
    @GetMapping("/welcome")
    public String welcome(){
        return "Hello Admin";
    }
}
