
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import Colors from '../../constants/Colors';
// import FontSize from '../../constants/FontSize';
// import Spacing from '../../constants/Spacing';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library

// const JobPlacementDriveForm = () => {
//   const [driveData, setDriveData] = useState({
//     title: "Software Engineer Internship 2024",
//     description: "An internship opportunity for software engineers.",
//     costToCompany: "5000.0",
//     startDate: new Date(),
//     endDate: new Date(),
//     location: "Example City",
//     otherDetails: "Additional details about the internship.",
//     selectionProcess: "Interview and technical assessment",
//     employmentType: "INTERNSHIP",
//     eligibilityCriteria: {
//       minimumTenthMarks: 80,
//       minimumTwelfthMarks: 85,
//       allowCurrentBacklogs: false,
//       maximumPreviousBacklogs: 2,
//       minimumCgpa: 7.5,
//       gender: "Any",
//       eligibleDepartments: [
//         {
//           name: "Computer Science"
//         },
//         {
//           name: "Computer"
//         }
//       ]
//     }
//   });
//   const [selectedStartDate, setSelectedStartDate] = useState(new Date());
//   const [selectedEndDate, setSelectedEndDate] = useState(new Date());

//   const handleStartDateChange = (date) => {
//     setSelectedStartDate(date);
//     setDriveData({ ...driveData, startDate: date });
//   };

//   const handleEndDateChange = (date) => {
//     setSelectedEndDate(date);
//     setDriveData({ ...driveData, endDate: date });
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     // You can access form data using state variables
//     alert('Placement Drive added successfully!');
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

//         <Text style={styles.heading}>Placement Drive Form</Text>

//         {/* Drive Title Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Drive Title</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Drive Title"
//             onChangeText={(title) => setDriveData({ ...driveData, title })}
//             value={driveData.title}
//           />
//         </View>

//         {/* Drive Description Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Drive Description</Text>
//           <TextInput
//             style={styles.multilineInput}
//             placeholder="Drive Description"
//             onChangeText={(description) => setDriveData({ ...driveData, description })}
//             value={driveData.description}
//             multiline={true}
//             numberOfLines={4}
//           />
//         </View>

//         {/* Cost To Company Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Cost To Company (CTC)</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="CTC"
//             onChangeText={(ctc) => setDriveData({ ...driveData, costToCompany: parseFloat(ctc) })}
//             value={driveData.costToCompany.toString()}
//             keyboardType="numeric"
//           />
//         </View>

//         {/* Start Date Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Start Date</Text>
//           <TouchableOpacity
//             style={styles.datePicker}
//             onPress={() => {} /* Handle opening start date picker */}
//           >
//             <FontAwesome name="calendar" size={20} color={Colors.primary} />
//             <Text style={styles.dateText}>{selectedStartDate.toLocaleDateString()}</Text>
//           </TouchableOpacity>
//           {/* Implement start date picker here */}
//           <DatePicker
//             date={selectedStartDate}
//             onDateChange={handleStartDateChange}
//           />
//         </View>

//         {/* End Date Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>End Date</Text>
//           <TouchableOpacity
//             style={styles.datePicker}
//             onPress={() => {} /* Handle opening end date picker */}
//           >
//             <FontAwesome name="calendar" size={20} color={Colors.primary} />
//             <Text style={styles.dateText}>{selectedEndDate.toLocaleDateString()}</Text>
//           </TouchableOpacity>
//           {/* Implement end date picker here */}
//           <DatePicker
//             date={selectedEndDate}
//             onDateChange={handleEndDateChange}
//           />
//         </View>

//         {/* Location Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Location</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Location"
//             onChangeText={(location) => setDriveData({ ...driveData, location })}
//             value={driveData.location}
//           />
//         </View>

//         {/* Other Details Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Other Details</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Other Details"
//             onChangeText={(otherDetails) => setDriveData({ ...driveData, otherDetails })}
//             value={driveData.otherDetails}
//           />
//         </View>

//         {/* Selection Process Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Selection Process</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Selection Process"
//             onChangeText={(selectionProcess) => setDriveData({ ...driveData, selectionProcess })}
//             value={driveData.selectionProcess}
//           />
//         </View>

//         {/* Employment Type Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Employment Type</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Employment Type"
//             onChangeText={(employmentType) => setDriveData({ ...driveData, employmentType })}
//             value={driveData.employmentType}
//           />
//         </View>

//         {/* Eligibility Criteria Input */}
//         <View style={styles.fieldContainer}>
//           <Text style={styles.label}>Eligibility Criteria</Text>
//           {/* Implement Eligibility Criteria input fields here */}
//         </View>

//       </ScrollView>
//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitText}>Add Placement Drive</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     position: 'relative',
//   },
//   scrollView: {
//     marginBottom: 100,
//     margin: Spacing * 2.5
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: Colors.primary,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//   },
//   fieldContainer: {
//     marginBottom: 20,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   multilineInput: {
//     height: 80,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   datePicker: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginTop: 5,
//   },
//   dateText: {
//     marginLeft: 10,
//     color: '#333',
//   },
//   submitButton: {
//     position: 'absolute',
//     bottom: 7,
//     left: 0,
//     right: 0,
//     backgroundColor: Colors.primary,
//     borderRadius: 20,
//     paddingVertical: Spacing * 2,
//     marginHorizontal: Spacing * 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   submitText: {
//     color: 'white',
//     fontSize: FontSize.large,
//     fontWeight: 'bold',
//   },
// });

// export default JobPlacementDriveForm;










import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { CheckBox } from '@react-native-community/checkbox'; // Import CheckBox component
import { Picker } from '@react-native-picker/picker'; // Import Picker component
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library


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


const JobPlacementDriveForm = () => {
  const [driveData, setDriveData] = useState({
    title: "Software Engineer Internship 2024",
    description: "An internship opportunity for software engineers.",
    costToCompany: "5000.0",
    startDate: new Date(),
    endDate: new Date(),
    location: "Example City",
    otherDetails: "Additional details about the internship.",
    selectionProcess: "Interview and technical assessment",
    employmentType: "INTERNSHIP",
    eligibilityCriteria: {
      minimumTenthMarks: 80,
      minimumTwelfthMarks: 85,
      allowCurrentBacklogs: false,
      maximumPreviousBacklogs: 2,
      minimumCgpa: 7.5,
      gender: "Any",
      eligibleDepartments: []
    }
  });
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false); // State for CheckBox
  const [selectedDepartments, setSelectedDepartments] = useState([]); // State for selected departments

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
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can access form data using state variables
    alert('Placement Drive added successfully!');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <Text style={styles.heading}>Placement Drive Form</Text>

        {/* Drive Title Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Drive Title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Drive Title"
            onChangeText={(title) => setDriveData({ ...driveData, title })}
            value={driveData.title}
          />
        </View>

        {/* Drive Description Input */}
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

        {/* Cost To Company Input */}
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

        {/* Start Date Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => {} /* Handle opening start date picker */}
          >
            <FontAwesome name="calendar" size={20} color={Colors.primary} />
            <Text style={styles.dateText}>{selectedStartDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {/* Implement start date picker here */}
          <DatePicker
            date={selectedStartDate}
            onDateChange={handleStartDateChange}
          />
        </View>

        {/* End Date Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>End Date</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => {} /* Handle opening end date picker */}
          >
            <FontAwesome name="calendar" size={20} color={Colors.primary} />
            <Text style={styles.dateText}>{selectedEndDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {/* Implement end date picker here */}
          <DatePicker
            date={selectedEndDate}
            onDateChange={handleEndDateChange}
          />
        </View>

        {/* Location Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Location"
            onChangeText={(location) => setDriveData({ ...driveData, location })}
            value={driveData.location}
          />
        </View>

        {/* Other Details Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Other Details</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Other Details"
            onChangeText={(otherDetails) => setDriveData({ ...driveData, otherDetails })}
            value={driveData.otherDetails}
          />
        </View>

        {/* Selection Process Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Selection Process</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Selection Process"
            onChangeText={(selectionProcess) => setDriveData({ ...driveData, selectionProcess })}
            value={driveData.selectionProcess}
          />
        </View>

        {/* Employment Type Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Employment Type</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Employment Type"
            onChangeText={(employmentType) => setDriveData({ ...driveData, employmentType })}
            value={driveData.employmentType}
          />
        </View>

        {/* Eligibility Criteria Input */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Eligibility Criteria</Text>
          <View style={styles.eligibilityContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Minimum Tenth Marks"
              keyboardType="numeric"
              onChangeText={(value) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTenthMarks: parseInt(value) } })}
              value={driveData.eligibilityCriteria.minimumTenthMarks.toString()}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Minimum Twelfth Marks"
              keyboardType="numeric"
              onChangeText={(value) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumTwelfthMarks: parseInt(value) } })}
              value={driveData.eligibilityCriteria.minimumTwelfthMarks.toString()}
            />
            {/* <CheckBox
              disabled={false}
              value={checked}
              onValueChange={handleCheckboxChange}
            /> */}
            <TextInput
              style={styles.inputField}
              placeholder="Maximum Previous Backlogs"
              keyboardType="numeric"
              onChangeText={(value) => handleMaxBacklogsChange(value)}
              value={driveData.eligibilityCriteria.maximumPreviousBacklogs.toString()}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Minimum CGPA"
              keyboardType="numeric"
              onChangeText={(value) => setDriveData({ ...driveData, eligibilityCriteria: { ...driveData.eligibilityCriteria, minimumCgpa: parseFloat(value) } })}
              value={driveData.eligibilityCriteria.minimumCgpa.toString()}
            />
            {/* <Picker
              selectedValue={driveData.eligibilityCriteria.gender}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue) => handleGenderChange(itemValue)}
            >
              <Picker.Item label="Any" value="Any" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker> */}
            <View style={styles.departmentSelectionContainer}>
              <Text style={styles.label}>Eligible Departments</Text>
              <View style={styles.departmentButtonsContainer}>
                {departments.map((department, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.departmentButton, { backgroundColor: selectedDepartments.includes(department) ? Colors.primary : '#ccc' }]}
                    onPress={() => handleDepartmentSelection(department)}
                  >
                    <Text style={styles.departmentButtonText}>{department}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Add Placement Drive</Text>
      </TouchableOpacity>
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
    margin: Spacing * 2.5
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
});

export default JobPlacementDriveForm;

