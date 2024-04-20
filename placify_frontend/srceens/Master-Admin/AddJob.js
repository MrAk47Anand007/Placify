

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';

const JobApplicationForm = () => {
  const [internship, setInternship] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const [internshipFullTime, setInternshipFullTime] = useState(false);
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [ctc, setCtc] = useState('');
  const [fixedGross, setFixedGross] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [bondDetails, setBondDetails] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [offerType, setOfferType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [location, setLocation] = useState('');
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [uploadedLogo, setUploadedLogo] = useState(null);

  const handleCheckboxChange = (option) => {
    if (option === 'Internship') {
      setInternship(!internship);
      if (!internship && (fullTime || internshipFullTime)) {
        setFullTime(false);
        setInternshipFullTime(false);
      }
    } else if (option === 'Full Time') {
      setFullTime(!fullTime);
      if (!fullTime && (internship || internshipFullTime)) {
        setInternship(false);
        setInternshipFullTime(false);
      }
    } else if (option === 'Internship + Full Time') {
      setInternshipFullTime(!internshipFullTime);
      if (!internshipFullTime && (internship || fullTime)) {
        setInternship(false);
        setFullTime(false);
      }
    }
  };

  const handleUploadDocuments = () => {
    // Implement file upload logic here
    // For example, you can use a file picker library or implement your own file upload functionality
    alert('Upload Documents functionality to be implemented');
  };

  const handleUploadLogo = () => {
    // Implement file upload logic here
    // For example, you can use a file picker library or implement your own file upload functionality
    alert('Upload Logo functionality to be implemented');
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can access form data using state variables
    const handleSubmit = () => {
      // Validate job type checkboxes
      if (!(internship || fullTime || internshipFullTime)) {
        alert('Please select at least one job type.');
        return;
      }
    
      // Validate company name
      if (!companyName.trim()) {
        alert('Please enter the company name.');
        return;
      }
    
      // Validate CTC
      if (!ctc.trim()) {
        alert('Please enter the CTC.');
        return;
      }
    
      // Validate if CTC is a number
      if (isNaN(ctc)) {
        alert('CTC should be a numeric value.');
        return;
      }
    
      // Validate offer type
      if (!offerType) {
        alert('Please select the offer type.');
        return;
      }
    
      // Handle form submission logic here
      // You can access form data using state variables
      alert('Form submitted successfully!');
    };
    
    alert('Form submitted successfully!');
  };

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      
        <Text style={styles.heading}>Job Application Form</Text>

        {/* Job Type Checkboxes */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, { backgroundColor: internship ? Colors.primary : '#FFFFFF' }]}
            onPress={() => handleCheckboxChange('Internship')}
          >
            <Text style={[styles.label, { color: internship ? '#FFFFFF' : '#000000' }]}>Internship</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.checkbox, { backgroundColor: fullTime ? Colors.primary : '#FFFFFF' }]}
            onPress={() => handleCheckboxChange('Full Time')}
          >
            <Text style={[styles.label, { color: fullTime ? '#FFFFFF' : '#000000' }]}>Full Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.checkbox, { backgroundColor: internshipFullTime ? Colors.primary : '#FFFFFF' }]}
            onPress={() => handleCheckboxChange('Internship + Full Time')}
          >
            <Text style={[styles.label, { color: internshipFullTime ? '#FFFFFF' : '#000000' }]}>Internship + Full Time</Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Job Title"
            onChangeText={setJobTitle}
            value={jobTitle}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Company Name"
            onChangeText={setCompanyName}
            value={companyName}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>CTC</Text>
          <TextInput
            style={styles.textInput}
            placeholder="CTC"
            onChangeText={setCtc}
            value={ctc}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Fixed Gross</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Fixed Gross"
            onChangeText={setFixedGross}
            value={fixedGross}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Job Description</Text>
          <TextInput
            style={styles.multilineInput}
            placeholder="Job Description"
            onChangeText={setJobDescription}
            value={jobDescription}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Bond Details</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Bond Details (if any)"
            onChangeText={setBondDetails}
            value={bondDetails}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Other Details</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Other Details"
            onChangeText={setOtherDetails}
            value={otherDetails}
          />
        </View>

        {/* Offer Type Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Offer Type</Text>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={[styles.dropdownItem, { backgroundColor: offerType === 'On Campus' ? '#3399FF' : '#FFFFFF' }]}
              onPress={() => setOfferType('On Campus')}
            >
              <Text style={[styles.label, { color: offerType === 'On Campus' ? '#FFFFFF' : '#333' }]}>On Campus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dropdownItem, { backgroundColor: offerType === 'Off Campus' ? '#3399FF' : '#FFFFFF' }]}
              onPress={() => setOfferType('Off Campus')}
            >
              <Text style={[styles.label, { color: offerType === 'Off Campus' ? '#FFFFFF' : '#333' }]}>Off Campus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dropdownItem, { backgroundColor: offerType === 'Pool Campus' ? '#3399FF' : '#FFFFFF' }]}
              onPress={() => setOfferType('Pool Campus')}
            >
              <Text style={[styles.label, { color: offerType === 'Pool Campus' ? '#FFFFFF' : '#333' }]}>Pool Campus</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Joining Date</Text>
          <TextInput
            style={styles.textInput}
            placeholder="YYYY-MM-DD"
            onChangeText={setSelectedDate}
            value={selectedDate}
          />
        </View>

        {/* Location Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Job Location</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Location"
            onChangeText={setLocation}
            value={location}
          />
        </View>

        {/* Upload Documents Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Upload Necessary Documents</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUploadDocuments}>
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

        {/* Upload Logo Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Upload Company Logo</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUploadLogo}>
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
     {/* Submit Button */}
     <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
     <Text style={styles.submitText}>Add Job</Text>
   </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative', // Needed for absolute positioning of the button
  },
  scrollView: {
    marginBottom: 70, // Adjust this value based on the height of your button to avoid content being hidden behind it
    margin: Spacing * 2.5
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.primary,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  multilineInput: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  submitButton: {
    position: 'absolute', // Position the button absolutely
    bottom: 7, // Place it at the bottom of the screen
    left: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: Spacing * 2,
    marginHorizontal:Spacing * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownItem: {
    flex: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  uploadButton: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  uploadText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobApplicationForm;
