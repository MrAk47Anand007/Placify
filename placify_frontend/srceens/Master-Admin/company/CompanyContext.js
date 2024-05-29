// CompanyContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://192.168.137.247:8080/api/companies/getAll');
      if (response.status === 200) {
        setCompanies(response.data);
      } else {
        console.error('Failed to fetch companies', response.data);
        console.log(response)
      }
    } catch (error) {
      console.error('An error occurred while fetching companies', error);
      console.log(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (companies.length === 0) {
      fetchCompanies();
    }
  }, [companies]);

  const addCompany = async (companyData) => {
    try {
      const response = await axios.post('http://192.168.137.247:8080/api/companies/add', companyData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        fetchCompanies();  // Refetch companies after adding a new one
      } else {
        console.error('Failed to add company', response.data);
      }
    } catch (error) {
      console.error('An error occurred while adding the company', error);
    }
  };

  return (
    <CompanyContext.Provider value={{ companies, loading, fetchCompanies, addCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
