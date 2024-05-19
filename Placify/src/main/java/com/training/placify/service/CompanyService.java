package com.training.placify.service;

import com.training.placify.model.companyModel.Company;

import java.io.IOException;
import java.util.List;

public interface CompanyService {
    Company addCompany(Company company);
    byte[] compressLogo(byte[] logoBytes) throws IOException;

    List<Company> getAllCompanies();
}
