package com.training.placify.service.Implementation;

import com.training.placify.model.Department;
import com.training.placify.model.companyModel.Company;
import com.training.placify.model.companyModel.EligibilityCriteria;
import com.training.placify.model.companyModel.PlacementDrive;
import com.training.placify.repository.CompanyRepository;
import com.training.placify.repository.DepartmentRepository;
import com.training.placify.repository.PlacementDriveRepository;
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

    @Autowired
    private PlacementDriveRepository placementDriveRepository;

    @Override
    @Transactional
    public Company addCompany(Company company) {
//        if (company.getPlacementDrives() != null) {
//            for (PlacementDrive drive : company.getPlacementDrives()) {
//                EligibilityCriteria criteria = drive.getEligibilityCriteria();
//                if (criteria != null && criteria.getEligibleDepartments() != null) {
//                    List<Department> departments = criteria.getEligibleDepartments().stream()
//                            .map(dept -> departmentRepository.findByName(dept.getName())
//                                    .orElseThrow(() -> new EntityNotFoundException("Department not found")))
//                            .collect(Collectors.toList());
//                    drive.setCompany(company);
//                    criteria.setEligibleDepartments(departments);
//                }
//            }
//        }

        try {
            return companyRepository.save(company);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error saving company: " + e.getMessage());
        }
    }

    private double convertCGPAToPercentage(double cgpa) {
        if (cgpa < 4) {
            return Double.NaN;
        } else if (cgpa < 4.75) {
            return 6.6 * cgpa + 13.6;
        } else if (cgpa < 5.25) {
            return 10 * cgpa - 2.5;
        } else if (cgpa < 5.75) {
            return 10 * cgpa - 2.5;
        } else if (cgpa < 6.75) {
            return 5 * cgpa + 26.5;
        } else if (cgpa < 8.25) {
            return 10 * cgpa - 7.5;
        } else if (cgpa < 9.5) {
            return 12 * cgpa - 25;
        } else {
            return 20 * cgpa - 100;
        }
    }

    public PlacementDrive addPlacementDrive(Long companyId, PlacementDrive placementDrive) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        EligibilityCriteria criteria = placementDrive.getEligibilityCriteria();
        if (criteria != null) {
            if (criteria.getMinimumCgpa() != null) {
                double percentage = convertCGPAToPercentage(criteria.getMinimumCgpa());
                criteria.setMinimumCgpa(percentage); // Update CGPA to percentage
            }

            if (criteria.getEligibleDepartments() != null) {
                List<Department> departments = criteria.getEligibleDepartments().stream()
                        .map(dept -> departmentRepository.findByName(dept.getName())
                                .orElseThrow(() -> new EntityNotFoundException("Department not found")))
                        .collect(Collectors.toList());
                criteria.setEligibleDepartments(departments);
            }
        }

        placementDrive.setCompany(company);
        company.getPlacementDrives().add(placementDrive);

        try {
            companyRepository.save(company);
            return placementDrive;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error saving placement drive: " + e.getMessage());
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

    @Override
    @Transactional
    public void deleteCompany(Long companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        companyRepository.delete(company);
    }

    @Override
    public List<PlacementDrive> getAllPlacementDrive(Long companyId) {
     return companyRepository.findById(companyId).get().getPlacementDrives();

    }
}
