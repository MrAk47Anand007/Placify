package com.training.placify.controller.MasterAdmin;

import com.training.placify.model.companyModel.Company;
import com.training.placify.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://192.168.29.79")
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/add")
    public ResponseEntity<Company> addCompany(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam(value = "logo", required = false) MultipartFile logoFile
    ) {
        try {
            Company company = new Company();
            company.setName(name);
            company.setDescription(description);

            if (logoFile != null) {
                byte[] compressedLogo = companyService.compressLogo(logoFile.getBytes());
                company.setLogo(compressedLogo);
            }

            Company savedCompany = companyService.addCompany(company);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCompany);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies, HttpStatus.OK);

    }
    
}
