import React, { useState, useEffect } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    PermissionsAndroid, 
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const apiUrl = 'http://192.168.29.209:8080/api/resume/generate'; // Replace with your actual API URL

export const handleGenerateResume = async (resumeData, token) => {
  // 1. Retrieve JWT Token from AsyncStorage
 
  if (!token) {
    Alert.alert('Error', 'Please login to generate resume.');
    return;
  }

  // 2. Make API Call with Authorization Header
  try {
    const response = await axios.post(apiUrl, resumeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // 3. Handle Successful Response (PDF Download)
      const { config, fs } = RNFetchBlob;
      const downloads = fs.dirs.DownloadDir;
      const fileName = prompt("Enter file name:", "MyResume.pdf");
      const filePath = `${downloads}/${fileName}`;

      // Request storage permission for Android
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to storage to download the resume.',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Error', 'Storage permission denied.');
          return;
        }
      }

      config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: filePath,
        },
      })
        .fetch('GET', response.data.url) // Assuming your API returns a URL to the generated PDF
        .then((res) => {
          console.log('The file saved to ', res.path());
          Alert.alert('Success', 'Resume downloaded successfully!');
          // ... Update state with new resume info ...
        })
        .catch((error) => {
          console.error('Error downloading resume:', error);
          Alert.alert('Error', 'Failed to download resume.');
        });
    } else {
      // Handle API error
      const errorData = await response.text();
      console.error('Error generating resume:', errorData);
      Alert.alert('Error', 'Failed to generate resume.');
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error during API call:', error);
    Alert.alert('Error', 'An error occurred. Please try again later.');
  }
};



// login --> jwt token ---> student -->  