import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import Colors from '../../../constants/Colors';
import Spacing from '../../../constants/Spacing';
import FontSize from '../../../constants/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CompanyContext } from './CompanyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const departments = [
  "Computer Science",
  "Artificial Intelligence and Data Science",
  "Civil Engineering",
  "Mechanical Engineering",
  "Electronics and Telecommunication Engineering",
  "Automation and Robotics",
  "Instrumentation Engineering",
  "Electrical Engineering",
  "Information Technology"
];

const JobPlacementDriveForm = ({ companyData, updateCompanyData }) => {
  const [driveData, setDriveData] = useState({
    title: "",
    description: "",
    costToCompany: "",
    startDate: new Date(),
    endDate: new Date(),
    location: "",
    otherDetails: "",
    selectionProcess: "",
    employmentType: "",
    eligibilityCriteria: {
      minimumTenthMarks: "",
      minimumTwelfthMarks: "",
      allowCurrentBacklogs: false,
      maximumPreviousBacklogs: "",
      minimumCgpa: "",
      gender: "Any",
      eligibleDepartments: []
    }
  });
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    setDriveData({ ...driveData, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    setDriveData({ ...driveData, endDate: date });
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, allowCurrentBacklogs: !checked } });
  };

  const handleMaxBacklogsChange = (value) => {
    const maxBacklogs = parseInt(value);
    setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, maximumPreviousBacklogs: maxBacklogs } });
  };

  const handleGenderChange = (value) => {
    setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, gender: value } });
  };

  const handleDepartmentSelection = (department) => {
    const updatedDepartments = selectedDepartments.includes(department)
      ? selectedDepartments.filter(dep => dep !== department)
      : [...selectedDepartments, department];

    setSelectedDepartments(updatedDepartments);
    setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, eligibleDepartments: updatedDepartments } });
  };

  const handleSubmit = async () => {
    try {
        console.log(companyData);
      if (companyData) {
        const updatedPlacementDrives = [...companyData.placementDrives, driveData];
        const updatedCompanyData = { ...companyData, placementDrives: updatedPlacementDrives };

        updateCompanyData(updatedCompanyData);
        await AsyncStorage.setItem('companyData', JSON.stringify(updatedCompanyData));

        Alert.alert('Success', 'Placement Drive added successfully!');
        setDriveData({
          title: "",
          description: "",
          costToCompany: "",
          startDate: new Date(),
          endDate: new Date(),
          location: "",
          otherDetails: "",
          selectionProcess: "",
          employmentType: "",
          eligibilityCriteria: {
            minimumTenthMarks: "",
            minimumTwelfthMarks: "",
            allowCurrentBacklogs: false,
            maximumPreviousBacklogs: "",
            minimumCgpa: "",
            gender: "Any",
            eligibleDepartments: []
          }
        });
        setSelectedDepartments([]);
        setSelectedStartDate(new Date());
        setSelectedEndDate(new Date());
        setChecked(false);
      } else {
        console.log('Company data is still loading...');
        console.log(driveData);
      }
    } catch (error) {
      console.error('Error saving company data:', error);
    }
  };


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.heading}>Placement Drive Form</Text>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Drive Title</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Drive Title"
                        onChangeText={(title) => setDriveData({ ...driveData, title })}
                        value={driveData.title}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Drive Description</Text>
                    <TextInput
                        style={styles.multilineInput}
                        placeholder="Drive Description"
                        onChangeText={(description) => setDriveData({ ...driveData, description })}
                        value={driveData.description}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Cost To Company (CTC)</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="CTC"
                        onChangeText={(ctc) => setDriveData({ ...driveData, costToCompany: parseFloat(ctc) })}
                        value={driveData.costToCompany.toString()}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Start Date</Text>
                    <TouchableOpacity
                        style={styles.datePicker}
                        onPress={() => { }}
                    >
                        <FontAwesome name="calendar" size={20} color={Colors.primary} />
                        <Text style={styles.dateText}>{selectedStartDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        date={selectedStartDate}
                        onDateChange={handleStartDateChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>End Date</Text>
                    <TouchableOpacity
                        style={styles.datePicker}
                        onPress={() => { }}
                    >
                        <FontAwesome name="calendar" size={20} color={Colors.primary} />
                        <Text style={styles.dateText}>{selectedEndDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        date={selectedEndDate}
                        onDateChange={handleEndDateChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Location</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Location"
                        onChangeText={(location) => setDriveData({ ...driveData, location })}
                        value={driveData.location}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Other Details</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Other Details"
                        onChangeText={(otherDetails) => setDriveData({ ...driveData, otherDetails })}
                        value={driveData.otherDetails}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Selection Process</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Selection Process"
                        onChangeText={(selectionProcess) => setDriveData({ ...driveData, selectionProcess })}
                        value={driveData.selectionProcess}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Employment Type</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Employment Type"
                        onChangeText={(employmentType) => setDriveData({ ...driveData, employmentType })}
                        value={driveData.employmentType}
                    />
                </View>
                <Text style={styles.subheading}>Eligibility Criteria</Text>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Minimum Tenth Marks (%)</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Minimum Tenth Marks"
                        onChangeText={(marks) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTenthMarks: parseFloat(marks) } })}
                        value={driveData.eligibilityCriteria.minimumTenthMarks.toString()}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Minimum Twelfth Marks (%)</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Minimum Twelfth Marks"
                        onChangeText={(marks) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTwelfthMarks: parseFloat(marks) } })}
                        value={driveData.eligibilityCriteria.minimumTwelfthMarks.toString()}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Allow Current Backlogs</Text>
                    <CheckBox
                        value={checked}
                        onValueChange={handleCheckboxChange}
                        tintColors={{ true: Colors.primary, false: Colors.primary }}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Maximum Previous Backlogs</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Maximum Previous Backlogs"
                        onChangeText={handleMaxBacklogsChange}
                        value={driveData.eligibilityCriteria.maximumPreviousBacklogs.toString()}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Minimum CGPA</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Minimum CGPA"
                        onChangeText={(cgpa) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumCgpa: parseFloat(cgpa) } })}
                        value={driveData.eligibilityCriteria.minimumCgpa.toString()}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <Picker
                        selectedValue={driveData.eligibilityCriteria.gender}
                        onValueChange={handleGenderChange}
                    >
                        <Picker.Item label="Any" value="Any" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Eligible Departments</Text>
                    {departments.map((department) => (
                        <View key={department} style={styles.checkboxContainer}>
                            <CheckBox
                                value={selectedDepartments.includes(department)}
                                onValueChange={() => handleDepartmentSelection(department)}
                                tintColors={{ true: Colors.primary, false: Colors.primary }}
                            />
                            <Text>{department}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Add Drive</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  scrollView: {
    marginBottom: 100,
    margin: Spacing * 2.5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.primary,
    textAlign: 'center',
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
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
  },
  dateText: {
    marginLeft: 10,
    color: '#333',
  },
  submitButton: {
    position: 'absolute',
    bottom: 7,
    left: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: Spacing * 2,
    marginHorizontal: Spacing * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  eligibilityContainer: {
    marginTop: 10,
  },
  inputField: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  departmentSelectionContainer: {
    marginTop: 10,
  },
  departmentButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  departmentButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  departmentButtonText: {
    fontSize: 14,
  },
  rowOrientation: {
    flexDirection: 'row',
  }
});

export default JobPlacementDriveForm;

