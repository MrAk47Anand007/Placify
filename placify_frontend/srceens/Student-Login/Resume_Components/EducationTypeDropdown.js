// // EducationTypeDropdown.js
// import React, { useState, useContext } from 'react';
// // import DropDownPicker from 'react-native-dropdown-picker'; // Or your chosen library
// import ModalDropdown from 'react-native-modal-dropdown';
// // import { ResumeContext } from './ResumeContext';

// const EducationTypeDropdown = ({ value, onSelectionChange }) => {
// //   const { resumeData, updateResumeData } = useContext(ResumeContext);
//   const [open, setOpen] = useState(false);
//   const [educationTitle, setEducationTitle] = useState('11th');
//   const [items, setItems] = useState([
//     { label: '10th', value: 'tenth' },
//     { label: '12th', value: 'twelfth' },
//     { label: 'Diploma', value: 'diploma' },
//     { label: 'Degree (4 years)', value: 'degree' },
//   ]);

//   const handleValueChange = (newValue) => {
//     onSelectionChange(newValue); // Call the callback function provided as a prop
//     // updateResumeData({ educationType: newValue }); // Update context
//     setEducationTitle(newValue);
//   };

//   return (
//     <DropDownPicker
//       open={open}
//       setOpen={setOpen}
//       value={educationTitle}
//       setValue={handleValueChange}
//       items={items}
//       placeholder="Select Education Type"
      
//       // Optional placeholder
//       style={{ /* Add your dropdown container styling here */ }}
//       dropDownContainerStyle={{ backgroundColor: "#fff", backfaceVisibility: 'hidden' }}
//     />
//   );
// };

// export default EducationTypeDropdown;








// EducationTypeDropdown.js
// EducationTypeDropdown.js
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import ModalDropdown from 'react-native-modal-dropdown';

// const EducationTypeDropdown = ({ value, onSelectionChange }) => {
//   const [educationTitle, setEducationTitle] = useState(''); // Initialize with an empty string
//   const items = [
//     { label: '10th', value: 'tenth' },
//     { label: '12th', value: 'twelfth' },
//     { label: 'Diploma', value: 'diploma' },
//     { label: 'Degree (4 years)', value: 'degree' },
//   ];

//   const handleValueChange = (index, newValue) => {
//     onSelectionChange(newValue); // Call the callback function provided as a prop
//     setEducationTitle(newValue);
//   };

//   const renderButtonText = (value) => {
//     if (value === '') {
//       return 'Select Education Type'; // Placeholder text
//     }
//     const selectedItem = items.find(item => item.value === value);
//     return selectedItem ? selectedItem.label : ''; // Display the selected item's label
//   };

//   return (
//     <View style={styles.container}>
//       <ModalDropdown
//         options={items.map(item => item.label)}
//         defaultValue={educationTitle}
//         onSelect={(index, newValue) => handleValueChange(index, items[index].value)}
//         style={styles.dropdown}
//         textStyle={styles.dropdownText}
//         dropdownStyle={styles.dropdownContainer} // Custom dropdown style
//         renderButtonText={renderButtonText} // Render the button text dynamically
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // Add container styles if needed
//   },
//   dropdown: {
//     width: 280, // Adjust width as needed
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     borderRadius: 5,
//   },
//   dropdownText: {
//     fontSize: 16,
//   },
//   dropdownContainer: {
//     width: 258, // Adjust width as needed
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
// });

// export default EducationTypeDropdown;







// //EducationTypeDropdown.js
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import ModalDropdown from 'react-native-modal-dropdown';

// const EducationTypeDropdown = ({ value, onSelectionChange }) => {
//   const [educationTitle, setEducationTitle] = useState(value); // Initialize with the provided value
//   const items = [
//     { label: '10th', value: 'tenth' },
//     { label: '12th', value: 'twelfth' },
//     { label: 'Diploma', value: 'diploma' },
//     { label: 'Degree (4 years)', value: 'degree' },
//   ];

//   const handleValueChange = (index, newValue) => {
//     onSelectionChange(newValue); // Call the callback function provided as a prop
//     setEducationTitle(newValue);
//   };

//   return (
//     <View style={styles.container}>
//       <ModalDropdown
//         options={['Select Education Type', ...items.map(item => item.label)]} // Include the placeholder text as an option
//         defaultValue={educationTitle ? educationTitle : 'Select Education Type'} // Set the default value to the selected item or the placeholder text
//         onSelect={(index, newValue) => handleValueChange(index, index === 0 ? '' : items[index - 1].value)} // Handle index offset for placeholder text
//         style={styles.dropdown}
//         textStyle={styles.dropdownText}
//         dropdownStyle={styles.dropdownContainer} // Custom dropdown style
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // Add container styles if needed
//     marginBottom: 7,
//   },
//   dropdown: {
//     width: 280, // Adjust width as needed
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     borderRadius: 5,
//   },
//   dropdownText: {
//     fontSize: 16,
//   },
//   dropdownContainer: {
//     width: 280, // Adjust width as needed
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginTop: 10,
//     marginLeft: -11,
//   },
// });

// export default EducationTypeDropdown;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EducationTypeDropdown = ({ value, onSelectionChange }) => {
  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.label}>Education Type:</Text>
      <Picker
        selectedValue={value}
        style={styles.picker}
        onValueChange={(value) => onSelectionChange(value)}
      >
        <Picker.Item label="Select Education Type" value={null} />
        <Picker.Item label="Tenth" value="tenth" />
        <Picker.Item label="Twelfth" value="twelfth" />
        <Picker.Item label="Diploma" value="diploma" />
        <Picker.Item label="Degree" value="degree" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default EducationTypeDropdown;
