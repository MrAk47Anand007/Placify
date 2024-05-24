// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import CheckBox from '@react-native-community/checkbox';
// import { Picker } from '@react-native-picker/picker';
// import Colors from '../../../constants/Colors';
// import Spacing from '../../../constants/Spacing';
// import FontSize from '../../../constants/FontSize';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const departments = [
//   "Computer Science",
//   "Artificial Intelligence and Data Science",
//   "Civil Engineering",
//   "Mechanical Engineering",
//   "Electronics and Telecommunication Engineering",
//   "Automation and Robotics",
//   "Instrumentation Engineering",
//   "Electrical Engineering",
//   "Information Technology"
// ];

// const JobPlacementDriveForm = ({ companyData, updateCompanyData }) => {
//   const [driveData, setDriveData] = useState({
//     title: "",
//     description: "",
//     costToCompany: "",
//     startDate: new Date(),
//     endDate: new Date(),
//     location: "",
//     otherDetails: "",
//     selectionProcess: "",
//     employmentType: "",
//     eligibilityCriteria: {
//       minimumTenthMarks: "",
//       minimumTwelfthMarks: "",
//       allowCurrentBacklogs: false,
//       maximumPreviousBacklogs: "",
//       minimumCgpa: "",
//       gender: "Any",
//       eligibleDepartments: []
//     }
//   });
//   const [selectedStartDate, setSelectedStartDate] = useState(new Date());
//   const [selectedEndDate, setSelectedEndDate] = useState(new Date());
//   const [checked, setChecked] = useState(false);
//   const [selectedDepartments, setSelectedDepartments] = useState([]);
 
//   const handleStartDateChange = (date) => {
//     setSelectedStartDate(date);
//     setDriveData({ ...driveData, startDate: date });
//   };

//   const handleEndDateChange = (date) => {
//     setSelectedEndDate(date);
//     setDriveData({ ...driveData, endDate: date });
//   };

//   const handleCheckboxChange = () => {
//     setChecked(!checked);
//     setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, allowCurrentBacklogs: !checked } });
//   };

//   const handleMaxBacklogsChange = (value) => {
//     const maxBacklogs = parseInt(value);
//     setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, maximumPreviousBacklogs: maxBacklogs } });
//   };

//   const handleGenderChange = (value) => {
//     setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, gender: value } });
//   };

//   const handleDepartmentSelection = (department) => {
//     const updatedDepartments = selectedDepartments.includes(department)
//       ? selectedDepartments.filter(dep => dep !== department)
//       : [...selectedDepartments, department];

//     setSelectedDepartments(updatedDepartments);
//     setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, eligibleDepartments: updatedDepartments } });
//   };

//   const handleSubmit = async () => {
//     try {
//       const companyId = await AsyncStorage.getItem('CompanyId');
//       if (companyId) {
//         const response = await axios.post(
//           `http://192.168.29.209:8080/api/companies/${companyId}/addDrive`,
//           driveData
//         );

//         if (response.status === 201) {
//           Alert.alert('Success', 'Placement Drive added successfully!');
//           setDriveData({
//             title: "",
//             description: "",
//             costToCompany: "",
//             startDate: new Date(),
//             endDate: new Date(),
//             location: "",
//             otherDetails: "",
//             selectionProcess: "",
//             employmentType: "",
//             eligibilityCriteria: {
//               minimumTenthMarks: "",
//               minimumTwelfthMarks: "",
//               allowCurrentBacklogs: false,
//               maximumPreviousBacklogs: "",
//               minimumCgpa: "",
//               gender: "Any",
//               eligibleDepartments: []
//             }
//           });
//           setSelectedDepartments([]);
//           setSelectedStartDate(new Date());
//           setSelectedEndDate(new Date());
//           setChecked(false);
//         } else {
//           Alert.alert('Error', 'Failed to add Placement Drive');
//         }
//       } else {
//         Alert.alert('Error', 'Company ID not found');
//       }
//     } catch (error) {
//       console.error('Error saving company data:', error);
//       Alert.alert('Error', 'There was an error adding the placement drive.');
//     }
//   };



//     return (
//         <View style={styles.container}>
//             <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//                 <Text style={styles.heading}>Placement Drive Form</Text>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Drive Title</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Drive Title"
//                         onChangeText={(title) => setDriveData({ ...driveData, title })}
//                         value={driveData.title}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Drive Description</Text>
//                     <TextInput
//                         style={styles.multilineInput}
//                         placeholder="Drive Description"
//                         onChangeText={(description) => setDriveData({ ...driveData, description })}
//                         value={driveData.description}
//                         multiline={true}
//                         numberOfLines={4}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Cost To Company (CTC)</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="CTC"
//                         onChangeText={(ctc) => setDriveData({ ...driveData, costToCompany: parseFloat(ctc) })}
//                         value={driveData.costToCompany.toString()}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Start Date</Text>
//                     <TouchableOpacity
//                         style={styles.datePicker}
//                         onPress={() => { }}
//                     >
//                         <FontAwesome name="calendar" size={20} color={Colors.primary} />
//                         <Text style={styles.dateText}>{selectedStartDate.toLocaleDateString()}</Text>
//                     </TouchableOpacity>
//                     <DatePicker
//                         date={selectedStartDate}
//                         onDateChange={handleStartDateChange}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>End Date</Text>
//                     <TouchableOpacity
//                         style={styles.datePicker}
//                         onPress={() => { }}
//                     >
//                         <FontAwesome name="calendar" size={20} color={Colors.primary} />
//                         <Text style={styles.dateText}>{selectedEndDate.toLocaleDateString()}</Text>
//                     </TouchableOpacity>
//                     <DatePicker
//                         date={selectedEndDate}
//                         onDateChange={handleEndDateChange}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Location</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Location"
//                         onChangeText={(location) => setDriveData({ ...driveData, location })}
//                         value={driveData.location}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Other Details</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Other Details"
//                         onChangeText={(otherDetails) => setDriveData({ ...driveData, otherDetails })}
//                         value={driveData.otherDetails}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Selection Process</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Selection Process"
//                         onChangeText={(selectionProcess) => setDriveData({ ...driveData, selectionProcess })}
//                         value={driveData.selectionProcess}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Employment Type</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Employment Type"
//                         onChangeText={(employmentType) => setDriveData({ ...driveData, employmentType })}
//                         value={driveData.employmentType}
//                     />
//                 </View>
//                 <Text style={styles.subheading}>Eligibility Criteria</Text>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Minimum Tenth Marks (%)</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Minimum Tenth Marks"
//                         onChangeText={(marks) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTenthMarks: parseFloat(marks) } })}
//                         value={driveData.eligibilityCriteria.minimumTenthMarks.toString()}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Minimum Twelfth Marks (%)</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Minimum Twelfth Marks"
//                         onChangeText={(marks) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTwelfthMarks: parseFloat(marks) } })}
//                         value={driveData.eligibilityCriteria.minimumTwelfthMarks.toString()}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Allow Current Backlogs</Text>
//                     <CheckBox
//                         value={checked}
//                         onValueChange={handleCheckboxChange}
//                         tintColors={{ true: Colors.primary, false: Colors.primary }}
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Maximum Previous Backlogs</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Maximum Previous Backlogs"
//                         onChangeText={handleMaxBacklogsChange}
//                         value={driveData.eligibilityCriteria.maximumPreviousBacklogs.toString()}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Minimum CGPA</Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Minimum CGPA"
//                         onChangeText={(cgpa) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumCgpa: parseFloat(cgpa) } })}
//                         value={driveData.eligibilityCriteria.minimumCgpa.toString()}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Gender</Text>
//                     <Picker
//                         selectedValue={driveData.eligibilityCriteria.gender}
//                         onValueChange={handleGenderChange}
//                     >
//                         <Picker.Item label="Any" value="Any" />
//                         <Picker.Item label="Male" value="Male" />
//                         <Picker.Item label="Female" value="Female" />
//                     </Picker>
//                 </View>
//                 <View style={styles.fieldContainer}>
//                     <Text style={styles.label}>Eligible Departments</Text>
//                     {departments.map((department) => (
//                         <View key={department} style={styles.checkboxContainer}>
//                             <CheckBox
//                                 value={selectedDepartments.includes(department)}
//                                 onValueChange={() => handleDepartmentSelection(department)}
//                                 tintColors={{ true: Colors.primary, false: Colors.primary }}
//                             />
//                             <Text>{department}</Text>
//                         </View>
//                     ))}
//                 </View>
//                 <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//                     <Text style={styles.submitButtonText}>Add Drive</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </View>
//     );
// };

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../constants/Colors'; // Replace with your actual colors file

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
      eligibleDepartments: [],
    },
    fileUrl: "", // Add fileUrl to the initial state
  });
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    setDriveData({ ...driveData, startDate: date });
    setShowStartDatePicker(false);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    setDriveData({ ...driveData, endDate: date });
    setShowEndDatePicker(false);
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

  const handleFileSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
      });
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  
  const uploadFileToGCS = async () => {
    if (file) {
        try {
            // Fetch the signed URL from your backend
            const response = await axios.get('http://192.168.29.209:8080/api/companies/drive/getSignedUrl', {
                params: {
                    fileName: file.name,
                    fileType: file.type,
                },
            });

            const signedUrl = response.data.signedUrl;
            console.log('Signed URL:', signedUrl);

            // Upload the file to GCS using the signed URL
            const uploadResponse = await axios.put(signedUrl, {
                uri: file.uri,
                type: file.type,
                name: file.name,
            }, {
                headers: {
                    'Content-Type': file.type,
                },
            });

            if (uploadResponse.status >= 200 && uploadResponse.status < 300) {
                const publicUrl = `https://storage.googleapis.com/placify-normal-bucket/Master-Admin/${file.name}`;
                console.log('Public URL:', publicUrl);
                setFileUrl(publicUrl);
                return publicUrl;
            } else {
                console.error('Failed to upload to GCS:', uploadResponse.status, uploadResponse.data);
                Alert.alert('Error', 'Failed to upload file.');
                return null;
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            Alert.alert('Error', 'There was an error uploading the file.');
            return null;
        }
    }
    return null;
};

  
  
  
  
  
      
      
   

  const handleSubmit = async () => {
    try {
      const uploadedFileUrl = await uploadFileToGCS();
      if (!uploadedFileUrl) {
        Alert.alert('Error', 'File upload failed');
        return;
      }

      const companyId = await AsyncStorage.getItem('CompanyId');
      if (companyId) {
        const response = await axios.post(
          `http://192.168.29.209:8080/api/companies/${companyId}/addDrive`,
          { ...driveData, fileUrl: uploadedFileUrl }
        );

        if (response.status === 201) {
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
              eligibleDepartments: [],
            },
            fileUrl: "", // Reset fileUrl
          });
          setSelectedDepartments([]);
          setSelectedStartDate(new Date());
          setSelectedEndDate(new Date());
          setChecked(false);
          setFile(null);
          setFileUrl("");
        } else {
          Alert.alert('Error', 'Failed to add Placement Drive');
        }
      } else {
        Alert.alert('Error', 'Company ID not found');
      }
    } catch (error) {
      console.error('Error saving company data:', error);
      Alert.alert('Error', 'There was an error adding the placement drive.');
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
            onChangeText={(ctc) => setDriveData({ ...driveData, costToCompany: ctc })}
            value={driveData.costToCompany.toString()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setShowStartDatePicker(true)}
          >
            <FontAwesome name="calendar" size={20} color={Colors.primary} />
            <Text style={styles.dateText}>{selectedStartDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showStartDatePicker && (
            <DatePicker
              date={selectedStartDate}
              onDateChange={handleStartDateChange}
              mode="date"
            />
          )}
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>End Date</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setShowEndDatePicker(true)}
          >
            <FontAwesome name="calendar" size={20} color={Colors.primary} />
            <Text style={styles.dateText}>{selectedEndDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showEndDatePicker && (
            <DatePicker
              date={selectedEndDate}
              onDateChange={handleEndDateChange}
              mode="date"
            />
          )}
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
          <Text style={styles.label}>Minimum 10th Marks</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Minimum 10th Marks"
            onChangeText={(minimumTenthMarks) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTenthMarks } })}
            value={driveData.eligibilityCriteria.minimumTenthMarks}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Minimum 12th Marks</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Minimum 12th Marks"
            onChangeText={(minimumTwelfthMarks) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTwelfthMarks } })}
            value={driveData.eligibilityCriteria.minimumTwelfthMarks}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={checked}
            onValueChange={handleCheckboxChange}
            tintColors={{ true: Colors.primary, false: Colors.primary }}
          />
          <Text style={styles.checkboxLabel}>Allow Current Backlogs</Text>
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
            onChangeText={(minimumCgpa) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumCgpa } })}
            value={driveData.eligibilityCriteria.minimumCgpa}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Gender</Text>
          <Picker
            selectedValue={driveData.eligibilityCriteria.gender}
            onValueChange={handleGenderChange}
            style={styles.picker}
          >
            <Picker.Item label="Any" value="Any" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Eligible Departments</Text>
          {departments.map(department => (
            <TouchableOpacity
              key={department}
              style={styles.checkboxContainer}
              onPress={() => handleDepartmentSelection(department)}
            >
              <CheckBox
                value={selectedDepartments.includes(department)}
                onValueChange={() => handleDepartmentSelection(department)}
                tintColors={{ true: Colors.primary, false: Colors.primary }}
              />
              <Text style={styles.checkboxLabel}>{department}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.fieldContainer} onPress={handleFileSelect}>
          <Text style={styles.label}>Select File</Text>
          <View style={styles.filePicker}>
            <Text style={styles.fileText}>{file ? file.name : 'No file selected'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default JobPlacementDriveForm;

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  filePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  fileText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};



