import React from 'react';
import { CompanyProvider } from './CompanyContext';
import AddJob from './AddJob';


const ContextWrapper = () => {
  return (
    <>
      <CompanyProvider>
       <AddJob/>
      </CompanyProvider>
    </>
  );
};

export default ContextWrapper;
