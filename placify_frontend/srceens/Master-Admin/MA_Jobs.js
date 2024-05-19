import React from 'react';
import JobListingsScreen from './company/JobListing';
import { CompanyProvider } from '../Master-Admin/company/CompanyContext';
import AddJob from './company/AddJob';
import DriveList from './company/DriveList';

const CompanyTab = () => {
  return (
    <>
      <CompanyProvider>
        <JobListingsScreen/>
      </CompanyProvider>
    </>
  );
};

export default CompanyTab;