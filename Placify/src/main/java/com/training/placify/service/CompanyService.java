package com.training.placify.service;

import com.training.placify.model.companyModel.Company;
import com.training.placify.model.companyModel.PlacementDrive;

import java.io.IOException;
import java.util.List;

public interface CompanyService {
    Company addCompany(Company company);
    PlacementDrive addPlacementDrive(Long companyId, PlacementDrive placementDrive);
    byte[] compressLogo(byte[] logoBytes) throws IOException;
    List<Company> getAllCompanies();
    void deleteCompany(Long companyId);

    List<PlacementDrive> getAllPlacementDrive(Long companyID);


}
