import React from 'react';
import { JobProvider } from './JobContext';
import StudentHomeScreen from './S_Jobs';

const CompanyWrapper = () => {
  return (
    <JobProvider>
      <StudentHomeScreen />
    </JobProvider>
  );
};

export default CompanyWrapper;
