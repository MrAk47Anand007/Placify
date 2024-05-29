import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
const config = require('../../config');

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobListings, setJobListings] = useState([]);
  const [applications, setApplications] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, setter) => {
    try {
      setLoading(true);
      const token = await SecureStore.getItemAsync('jwtToken');
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setter(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobListings = async () => {
    const studentId = await SecureStore.getItemAsync('studentId');
    const url = `${config.apiEndpoint}/student/eligible-drives/${studentId}`;
    await fetchData(url, setJobListings);
  };

  const fetchApplications = async () => {
    const studentId = await SecureStore.getItemAsync('studentId');
    const url = `${config.apiEndpoint}/student/applied-drives/${studentId}`;
    await fetchData(url, setApplications);
  };

  const fetchOffers = async () => {
    const studentId = await SecureStore.getItemAsync('studentId');
    const url = `${config.apiEndpoint}/offers/${studentId}`;
    await fetchData(url, setOffers);
  };

  useEffect(() => {
    fetchJobListings();
    fetchApplications();
    fetchOffers();
  }, []);

  return (
    <JobContext.Provider
      value={{
        jobListings,
        applications,
        offers,
        loading,
        error,
        refreshAll: async () => {
          await fetchJobListings();
          await fetchApplications();
          await fetchOffers();
        },
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export { JobContext, JobProvider };
