import React, { useState } from 'react';
import { Alert,} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const apiUrl = 'http://192.168.137.247:8080/student/resume/generate';

export const handleGenerateResume = async (resumeData) => {
  const token = await SecureStore.getItemAsync('jwtToken');
  const studentId = await SecureStore.getItemAsync('studentId');

  console.log(resumeData);

  if (!token || !studentId) {
    Alert.alert('Error', 'Please login to generate resume.');
    return;
  }

  const urlWithParams = `${apiUrl}?studentId=${studentId}`;

  try {
    const response = await axios.post(urlWithParams, resumeData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response; // Return the response object

  } catch (error) {
    // Handle network or other errors (you might want to throw the error here)
    console.error('Error during API call:', error);
    throw error; // Re-throw the error to be handled in handleSubmit
  }
};
