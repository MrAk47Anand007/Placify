import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCompanyData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('companyData');
        if (savedData) {
          setCompanyData(JSON.parse(savedData));
        } else {
          const initialCompanyData = {
            name: 'Example Company',
            description: 'This is a sample company for demonstration purposes.',
            placementDrives: []
          };
          setCompanyData(initialCompanyData);
          await AsyncStorage.setItem('companyData', JSON.stringify(initialCompanyData));
        }
      } catch (error) {
        console.error('Failed to load company data', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCompanyData();
  }, []);

  const updateCompanyData = async (updatedFields) => {
    try {
      const updatedData = companyData ? { ...companyData, ...updatedFields } : { ...updatedFields };
      setCompanyData(updatedData);
      await AsyncStorage.setItem('companyData', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Failed to update company data', error);
    }
  };

  return (
    <CompanyContext.Provider value={{ companyData, updateCompanyData, isLoading }}>
      {children}
    </CompanyContext.Provider>
  );
};
