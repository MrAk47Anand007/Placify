import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import JobPlacementDriveForm from './JobPlacementDriveForm';
import { CompanyContext } from './CompanyContext';

const AddJob = () => {
  const { companyData, updateCompanyData, isLoading } = useContext(CompanyContext);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }


  return (
    <JobPlacementDriveForm companyData={companyData} updateCompanyData={updateCompanyData} />
  );
};

export default AddJob;