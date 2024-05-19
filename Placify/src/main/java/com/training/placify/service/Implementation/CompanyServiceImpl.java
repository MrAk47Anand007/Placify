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
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    @Transactional
    public Company addCompany(Company company) {
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
            e.printStackTrace();
            throw new RuntimeException("Error saving company: " + e.getMessage());
        }
    }

    @Override
    public byte[] compressLogo(byte[] logoBytes) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Thumbnails.of(new ByteArrayInputStream(logoBytes))
                .size(200, 200)
                .outputQuality(0.75)
                .toOutputStream(outputStream);
        return outputStream.toByteArray();
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }
}
