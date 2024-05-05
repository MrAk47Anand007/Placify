package com.training.placify.service.Implementation;

import com.training.placify.model.Department;
import com.training.placify.model.companyModel.Company;
import com.training.placify.model.companyModel.EligibilityCriteria;
import com.training.placify.model.companyModel.PlacementDrive;
import com.training.placify.repository.CompanyRepository;
import com.training.placify.repository.DepartmentRepository;
import com.training.placify.service.CompanyService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private DepartmentRepository departmentRepository; // Add this for fetching departments

    @Override
    @Transactional
    public Company addCompany(Company company) {
        // Handle eligible departments (fetch them if IDs are provided)
        if (company.getPlacementDrives() != null) {
            for (PlacementDrive drive : company.getPlacementDrives()) {
                EligibilityCriteria criteria = drive.getEligibilityCriteria();
                if (criteria != null && criteria.getEligibleDepartments() != null) {
                    List<Department> departments = criteria.getEligibleDepartments().stream()
                            .map(dept -> departmentRepository.findByName(dept.getName())
                                    .orElseThrow(() -> new EntityNotFoundException("Department not found")))
                            .collect(Collectors.toList());
                    drive.setCompany(company);
                    criteria.setEligibleDepartments(departments);
                }
            }
        }


        try {
            return companyRepository.save(company);
        } catch (Exception e) {
            // Handle the exception
            e.printStackTrace(); // Print the stack trace for debugging
            throw new RuntimeException("Error saving company: " + e.getMessage()); // Re-throw a more informative exception
        }
    }
}
