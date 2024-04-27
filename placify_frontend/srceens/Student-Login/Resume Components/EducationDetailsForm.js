// import { ResumeContext } from './ResumeContext';
// import React, { useState, useContext,useEffect } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Colors from "../../../constants/Colors";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { launchImageLibrary } from 'react-native-image-picker';
// import DatePicker from 'react-native-date-picker';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const EducationDetailsForm = () => {
//   const { resumeData, updateResumeData } = useContext(ResumeContext);
//   const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
//   const [openToDatePicker, setOpenToDatePicker] = useState(false);
//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date());
//   const [uploadedImages, setUploadedImages] = useState({});

//   const handleUpload = (semester) => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const source = { uri: response.uri };
//         setUploadedImages(prevState => ({
//           ...prevState,
//           [semester]: source,
//         }));
//       }
//     });
//   };

//     useEffect(() => {
//     if (resumeData.education[0]) {
//       setFromDate(
//         resumeData.education[0].startDate
//           ? new Date(resumeData.education[0].startDate)
//           : null
//       );
//       setToDate(
//         resumeData.education[0].endDate
//           ? new Date(resumeData.education[0].endDate)
//           : null
//       );
//     }
//   }, [resumeData.education]);

//   const handleChange = (value, field) => {
//     const updatedEducation = [...resumeData.education];
//     updatedEducation[0][field] = value;
//     updateResumeData({ education: updatedEducation });
//   };

//   return (
//     <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="10th Percentage"
//               value={resumeData.education[0]?.tenthPercentage || ''}
//               onChangeText={(text) => handleChange(text, 'tenthPercentage')}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Class 10th Institute Name"
//               value={resumeData.education[0]?.tenthinstituteName || ''}
//               onChangeText={(text) => handleChange(text, 'tenthinstituteName')}
//             />
//            <View style={styles.dateRow}>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateLabel}>From:</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setOpenFromDatePicker(true)}
//             >
//               <FontAwesome name="calendar" size={20} color={Colors.primary} />
//               <Text style={styles.dateText}>
//                 {resumeData.education[0]?.startDate
//                   ? new Date(resumeData.education[0].startDate).toLocaleDateString()
//                   : 'DD-MM-YYYY'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateLabel}>To:</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setOpenToDatePicker(true)}
//             >
//               <FontAwesome name="calendar" size={20} color={Colors.primary} />
//               <Text style={styles.dateText}>
//                 {resumeData.education[0]?.endDate
//                   ? new Date(resumeData.education[0].endDate).toLocaleDateString()
//                   : 'DD-MM-YYYY'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {resumeData.education[0]?.startDate && (
//           <DatePicker
//             modal
//             open={openFromDatePicker}
//             date={new Date(resumeData.education[0].startDate)}
//             mode="date"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onConfirm={(date) => {
//               setOpenFromDatePicker(false);
//               handleChange(date.toISOString(), 'startDate');
//             }}
//             onCancel={() => {
//               setOpenFromDatePicker(false);
//             }}
//           />
//         )}
//         {resumeData.education[0]?.endDate && (
//           <DatePicker
//             modal
//             open={openToDatePicker}
//             date={new Date(resumeData.education[0].endDate)}
//             mode="date"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onConfirm={(date) => {
//               setOpenToDatePicker(false);
//               handleChange(date.toISOString(), 'endDate');
//             }}
//             onCancel={() => {
//               setOpenToDatePicker(false);
//             }}
//           />
//         )}

//         <TextInput
//           style={styles.input}
//           placeholder="12th Percentage"
//           value={resumeData.education[0]?.twelfthPercentage || ''}
//           onChangeText={(text) => handleChange(text, 'twelfthPercentage')}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Class 12th Institute Name"
//           value={resumeData.education[0]?.twelfthinstituteName || ''}
//           onChangeText={(text) => handleChange(text, 'twelfthinstituteName')}
//         />

//         <View style={styles.dateRow}>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateLabel}>From:</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setOpenFromDatePicker(true)}
//             >
//               <FontAwesome name="calendar" size={20} color={Colors.primary} />
//               <Text style={styles.dateText}>
//                 {resumeData.education[0]?.twelfthStartDate
//                   ? new Date(resumeData.education[0].twelfthStartDate).toLocaleDateString()
//                   : 'DD-MM-YYYY'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateLabel}>To:</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setOpenToDatePicker(true)}
//             >
//               <FontAwesome name="calendar" size={20} color={Colors.primary} />
//               <Text style={styles.dateText}>
//                 {resumeData.education[0]?.twelfthEndDate
//                   ? new Date(resumeData.education[0].twelfthEndDate).toLocaleDateString()
//                   : 'DD-MM-YYYY'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {resumeData.education[0]?.twelfthStartDate && (
//           <DatePicker
//             modal
//             open={openFromDatePicker}
//             date={new Date(resumeData.education[0].twelfthStartDate)}
//             mode="date"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onConfirm={(date) => {
//               setOpenFromDatePicker(false);
//               handleChange(date.toISOString(), 'twelfthStartDate');
//             }}
//             onCancel={() => {
//               setOpenFromDatePicker(false);
//             }}
//           />
//         )}
//         {resumeData.education[0]?.twelfthEndDate && (
//           <DatePicker
//             modal
//             open={openToDatePicker}
//             date={new Date(resumeData.education[0].twelfthEndDate)}
//             mode="date"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onConfirm={(date) => {
//               setOpenToDatePicker(false);
//               handleChange(date.toISOString(), 'twelfthEndDate');
//             }}
//             onCancel={() => {
//               setOpenToDatePicker(false);
//             }}
//           />
//         )}

//         <TextInput
//           style={styles.input}
//           placeholder="College Name"
//           value={resumeData.education[0]?.collegeName || ''}
//           onChangeText={(text) => handleChange(text, 'collegeName')}
//         />

//         <View style={styles.dateRow}>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateLabel}>From:</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setOpenFromDatePicker(true)}
//             >
//               <FontAwesome name="calendar" size={20} color={Colors.primary} />
//               <Text style={styles.dateText}>
//                 {resumeData.education[0]?.collegeStartDate
//                   ? new Date(resumeData.education[0].collegeStartDate).toLocaleDateString()
//                   : 'DD-MM-YYYY'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateLabel}>To:</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setOpenToDatePicker(true)}
//             >
//               <FontAwesome name="calendar" size={20} color={Colors.primary} />
//               <Text style={styles.dateText}>
//                 {resumeData.education[0]?.collegeEndDate
//                   ? new Date(resumeData.education[0].collegeEndDate).toLocaleDateString()
//                   : 'DD-MM-YYYY'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {resumeData.education[0]?.collegeStartDate && (
//           <DatePicker
//             modal
//             open={openFromDatePicker}
//             date={new Date(resumeData.education[0].collegeStartDate)}
//             mode="date"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onConfirm={(date) => {
//               setOpenFromDatePicker(false);
//               handleChange(date.toISOString(), 'collegeStartDate');
//             }}
//             onCancel={() => {
//               setOpenFromDatePicker(false);
//             }}
//           />
//         )}
//         {resumeData.education[0]?.collegeEndDate && (
//           <DatePicker
//             modal
//             open={openToDatePicker}
//             date={new Date(resumeData.education[0].collegeEndDate)}
//             mode="date"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onConfirm={(date) => {
//               setOpenToDatePicker(false);
//               handleChange(date.toISOString(), 'collegeEndDate');
//             }}
//             onCancel={() => {
//               setOpenToDatePicker(false);
//             }}
//           />
//         )}

//         {resumeData.education[0]?.semesterCGPA?.map((cgpa, index) => (
//           <View key={index} style={styles.semesterContainer}>
//             <Text style={styles.semesterText}>{`Sem ${index + 1} CGPA:`}</Text>
//             <View style={styles.readOnlyInput}>
//               <Text>{cgpa}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handleUpload(`Sem ${index + 1}`)}>
//               {uploadedImages[`Sem ${index + 1}`] && (
//                 <Image
//                   source={{ uri: uploadedImages[`Sem ${index + 1}`] }}
//                   style={{ width: 50, height: 50 }}
//                 />
//               )}
//               <Icon name="upload" size={24} color={Colors.dark} />
//             </TouchableOpacity>
//           </View>
//         ))}
//         <View style={styles.line}></View>
//         <View style={styles.aggregateContainer}>
//           <Text style={styles.AggsemesterText}>Aggregate CGPA:</Text>
//           <View style={styles.AggreadOnlyInput}>
//             <Text style={styles.AggCGPAText}>
//               {resumeData.education[0]?.aggregateCGPA || ''}
//             </Text>
//           </View>
//         </View>    
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   formContainer: {
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: Colors.lightGray,
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     flex: 1,
//   },
//   readOnlyInput: {
//     backgroundColor: Colors.lightPrimary, // Assuming lightPrimary is defined in your Colors file
//     padding: 10,
//     marginHorizontal: 10,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   AggreadOnlyInput: {
//     backgroundColor: Colors.lightPrimary, // Assuming lightPrimary is defined in your Colors file
//     paddingVertical: 8,
//     paddingHorizontal: 22,
//     // marginHorizontal: 10,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   semesterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   semesterText: {
//     flex: 1,
//   },
//   AggsemesterText: {
//     flex: 1,
//     fontSize: 14.5,
//     fontWeight: 'bold',
//   },
//   AggCGPAText: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   dateRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 18,
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dateLabel: {
//     marginRight: 10,
//     fontWeight: 'bold',
//   },
//   datePicker: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dateText: {
//     marginLeft: 5,
//   },
//   line: {
//     borderBottomColor: Colors.lightGray,
//     borderBottomWidth: 1,
//     marginBottom: 10,
//   },
//   aggregateContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   // Add more styles as needed
// });

// export default EducationDetailsForm;
















import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, ScrollView } from 'react-native';
import Colors from '../../../constants/Colors';
import EducationTypeDropdown from './EducationTypeDropdown';
import DynamicEducationInputs from './DynamicEducationInputs';

const EducationDetailsForm = () => {
  const [educationForms, setEducationForms] = useState([{ educationType: null }]);
  const [selectedFormIndex, setSelectedFormIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [educationNumber, setEducationNumber] = useState(""); //Changed

  const handleAddNew = () => {
    setEducationForms([...educationForms, { educationType: null }]);
  };

  const handleEducationTypeChange = (index, newValue) => {
    const updatedForms = [...educationForms];
    updatedForms[index].educationType = newValue;
    setEducationForms(updatedForms);
  };

  const handleDropdownSelection = (index, newValue) => {
    setSelectedFormIndex(index);
    setIsModalVisible(true); // Open the modal
    handleEducationTypeChange(index, newValue);
    setEducationNumber(newValue); // Changed
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const renderModalContent = () => {
    if (selectedFormIndex !== null) {
      const educationType = educationForms[selectedFormIndex].educationType;
      console.log(educationType);
      return <DynamicEducationInputs educationType={educationNumber} />; // Changed
    }
    return null;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {educationForms.map((form, index) => (
          <View key={index} style={styles.educationForm}>
            <EducationTypeDropdown
              value={form.educationType}
              onSelectionChange={(newValue) => handleDropdownSelection(index, newValue)}
            />
            {form.educationType && <DynamicEducationInputs educationType={form.educationType} />}
          </View>
        ))}
        
          <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
            <Text style={styles.buttonText}>Add More</Text>
          </TouchableOpacity>
      
        {/* <Modal visible={isModalVisible} onRequestClose={handleModalClose}>
          <View style={styles.modalContent}>
            {renderModalContent()}
            <TouchableOpacity onPress={handleModalClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  educationForm: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: Colors.background,
    padding: 15,
  },
  formHeader: { // Optional header for each form section
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: { // Optional button to remove a form section
    padding: 5,
    backgroundColor: '#dc3545', // Red color for remove button
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputField: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EducationDetailsForm;







