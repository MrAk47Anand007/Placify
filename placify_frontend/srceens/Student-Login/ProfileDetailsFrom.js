import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Import axios
import * as SecureStore from 'expo-secure-store';

const config = require('../../config');
const ProfileDetailsForm = () => {
  const [profileData, setProfileData] = useState({
    personalEmail: "",
    collegeEmail: "",
    gender: "",
    phoneNumber: "",
    prnNumber: "",
    erpId: "",
    panCardNumber: "",
    linkedInLink: "",
    githubLink: ""
  });

  const handleSubmit = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const studentId = await SecureStore.getItemAsync('studentId');
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        const imageUrl = await AsyncStorage.getItem('profileImageUri');
        const dataToSubmit = {
          ...parsedUserData,
          personalEmail: profileData.personalEmail,
          collegeEmail: profileData.collegeEmail,
          gender: profileData.gender,
          phone_no: profileData.phoneNumber,
          prnNo: profileData.prnNumber,
          erpId: profileData.erpId,
          profilePic: imageUrl,
          // Add any other fields that are necessary for the API
        };

        // Make the API call using axios
        const response = await axios.put(`${config.apiEndpoint}/api/profile/${studentId}`, dataToSubmit);
        
        if (response.status === 200) {
          Alert.alert('Profile Details', 'Profile details submitted successfully!');
        } else {
          Alert.alert('Error', 'Failed to submit profile details. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting profile details:', error);
      Alert.alert('Error', 'An error occurred while submitting profile details.');
    }
  };

  const genderOptions = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Other', value: 'Other' },
  ];

  useEffect(() => {
    const retrieveProfileData = async () => {
      try {
        // Retrieve profile data from AsyncStorage
        const storedProfileData = await AsyncStorage.getItem('userData');
        if (storedProfileData) {
          // If data exists, parse it and set the state
          const parsedProfileData = JSON.parse(storedProfileData);
          setProfileData(parsedProfileData);
        }
      } catch (error) {
        console.error('Error retrieving profile data:', error);
      }
    };

    retrieveProfileData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Profile Details</Text>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Personal Email ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Personal Email ID"
            onChangeText={(personalEmail) => setProfileData({ ...profileData, personalEmail })}
            value={profileData.personalEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>College Email ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="College Email ID"
            onChangeText={(collegeEmail) => setProfileData({ ...profileData, collegeEmail })}
            value={profileData.collegeEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Gender</Text>
          <SelectList
            setSelected={(gender) => setProfileData({ ...profileData, gender })}
            data={genderOptions}
            boxStyles={styles.dropdownBox}
            dropdownStyles={styles.dropdown}
            placeholder="Select Gender"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            onChangeText={(phoneNumber) => setProfileData({ ...profileData, phoneNumber })}
            value={profileData.phoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>PRN Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="PRN Number"
            onChangeText={(prnNumber) => setProfileData({ ...profileData, prnNumber })}
            value={profileData.prnNumber}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>ERP ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="ERP ID"
            onChangeText={(erpId) => setProfileData({ ...profileData, erpId })}
            value={profileData.erpId}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>PAN Card Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="PAN Card Number"
            onChangeText={(panCardNumber) => setProfileData({ ...profileData, panCardNumber })}
            value={profileData.panCardNumber}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>LinkedIn Link</Text>
          <TextInput
            style={styles.textInput}
            placeholder="LinkedIn Link"
            onChangeText={(linkedInLink) => setProfileData({ ...profileData, linkedInLink })}
            value={profileData.linkedInLink}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Github Link</Text>
          <TextInput
          style={styles.textInput}
            placeholder="Github Link"
            onChangeText={(githubLink) => setProfileData({ ...profileData, githubLink })}
            value={profileData.githubLink}
          />
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 70,
  },
  scrollView: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    color: Colors.primary,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    color: Colors.darkText,
    fontWeight: '500'
  },
  fieldContainer: {
    marginBottom: 18,
  },
  textInput: {
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  dropdownBox: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
  },
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    position: 'absolute', // Position the button absolutely
    bottom: 7, // Place it at the bottom of the screen
    left: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: Spacing * 2,
    marginHorizontal: Spacing * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default ProfileDetailsForm;