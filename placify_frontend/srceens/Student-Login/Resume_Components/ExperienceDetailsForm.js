// import React, { useState,useContext } from 'react';
// import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome from vector-icons
// import Colors from "../../../constants/Colors";
// import DatePicker from 'react-native-date-picker';
// import { ResumeContext } from './ResumeContext';

// const ExperienceDetailsForm = ({ onSubmit }) => {
//   const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
//   const [openToDatePicker, setOpenToDatePicker] = useState(false);
//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date()); 
//   const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
//   const { resumeData, updateResumeData } = useContext(ResumeContext);

//   const [experiences, setExperiences] = useState(resumeData.experience);

//   const handleChange = (text, field, index) => {
//     const updatedExperiences = [...experiences];
//     updatedExperiences[index][field] = text;
//     setExperiences(updatedExperiences);
//     updateResumeData({ experience: updatedExperiences }); // Update context
//   };

//   const handleAddNew = () => {
//     setExperiences([
//       ...experiences,
//       {
//         designation: '',
//         organization: '',
//         startDate: '',
//         endDate: '',
//         country: '',
//         state: '',
//         city: '',
//         skills: '',
//         description: '',
//       }
//     ]);
//   };

//   const handleDelete = (index) => {
//     const updatedExperiences = [...experiences];
//     updatedExperiences.splice(index, 1);
//     setExperiences(updatedExperiences);
//   };

//   const handleCheckboxChange = (newValue) => {
//     setIsCurrentlyWorking(newValue);
//     if (newValue) {
//       setToDate(null); // Resetting toDate when "Currently Working" is checked
//     } else {
//       setToDate(new Date()); // Resetting toDate to current date when "Currently Working" is unchecked
//     }
//   };

//   return (
//     <ScrollView style={styles.scrollView}>
//       {experiences.map((experience, index) => (
//         <View key={index} style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardHeaderText}>Experience {index + 1}</Text>
//             {index > 0 && (
//               <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteIcon}>
//                 <FontAwesome name="trash" size={24} color="red" />
//               </TouchableOpacity>
//             )}
//           </View>
//           <View style={styles.formContainer}>
//             <Text>Designation</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Designation"
//               value={experience.designation}
//               onChangeText={(text) => handleChange(text, 'designation', index)}
//             />
//             <Text>Organization</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Organization Name"
//               value={experience.organization}
//               onChangeText={(text) => handleChange(text, 'organization', index)}
//             />
//             <View style={styles.dateRow}>
//               <View style={styles.dateContainer}>
//                 <Text style={styles.dateLabel}>From:</Text>
//                 <TouchableOpacity style={styles.datePicker} onPress={() => setOpenFromDatePicker(true)}>
//                   <FontAwesome name="calendar" size={20} color={Colors.primary} />
//                   <Text style={styles.dateText}>{fromDate ? fromDate.toLocaleDateString() : 'DD-MM-YYYY'}</Text>
//                 </TouchableOpacity>
//               </View>
//               {!isCurrentlyWorking ? (
//                 <View style={styles.dateContainer}>
//                   <Text style={styles.dateLabel}>To:</Text>
//                   {toDate ? (
//                     <TouchableOpacity style={styles.datePicker} onPress={() => setOpenToDatePicker(true)}>
//                       <FontAwesome name="calendar" size={20} color={Colors.primary} />
//                       <Text style={styles.dateText}>{toDate.toLocaleDateString()}</Text>
//                     </TouchableOpacity>
//                   ) : (
//                     <Text style={styles.presentText}>To: Present</Text>
//                   )}
//                 </View>
//               ) : (
//                 <Text style={styles.presentText}>To: Present</Text>
//               )}
//             </View>
//             {fromDate && ( // Render the DatePicker only if fromDate is not null or undefined
//               <DatePicker
//                 modal
//                 open={openFromDatePicker}
//                 date={fromDate}
//                 mode="date"
//                 confirmBtnText="Confirm"
//                 cancelBtnText="Cancel"
//                 onConfirm={(date) => {
//                   setOpenFromDatePicker(false);
//                   setFromDate(date);
//                 }}
//                 onCancel={() => {
//                   setOpenFromDatePicker(false);
//                 }}
//               />
//             )}
//             {toDate && !isCurrentlyWorking && ( // Render the DatePicker only if toDate is not null or undefined and not currently working
//               <DatePicker
//                 modal
//                 open={openToDatePicker}
//                 date={toDate}
//                 mode="date"
//                 confirmBtnText="Confirm"
//                 cancelBtnText="Cancel"
//                 onConfirm={(date) => {
//                   setOpenToDatePicker(false);
//                   setToDate(date);
//                 }}
//                 onCancel={() => {
//                   setOpenToDatePicker(false);
//                 }}
//               />
//             )}
//             <View style={styles.checkboxContainer}>
//               <CheckBox
//                 value={isCurrentlyWorking}
//                 onValueChange={handleCheckboxChange}
//               />
//               <Text style={styles.checkboxLabel}>I am currently working here</Text>
//             </View>
//             {/* Additional fields */}
//             <Text>Country</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Country"
//               value={experience.country}
//               onChangeText={(text) => handleChange(text, 'country', index)}
//             />
//             <Text>State</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="State"
//               value={experience.state}
//               onChangeText={(text) => handleChange(text, 'state', index)}
//             />
//             <Text>City</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="City"
//               value={experience.city}
//               onChangeText={(text) => handleChange(text, 'city', index)}
//             />
//             <Text>Skills</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Skills"
//               value={experience.skills.join(", ")}
//               onChangeText={(text) => handleChange(text, 'skills', index)}
//             />
//             <Text>Description</Text>
//             <TextInput
//               style={[styles.input, styles.description]}
//               placeholder="Description"
//               value={experience.description}
//               onChangeText={(text) => handleChange(text, 'description', index)}
//               multiline={true}
//               numberOfLines={4}
//             />
//           </View>
//         </View>
//       ))}
//       <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
//         <Text style={styles.buttonText}>Add New</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     marginBottom: 20,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: Colors.lightGray,
//     borderRadius: 15,
//     marginBottom: 20,
//     backgroundColor: Colors.background,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: Colors.lightGray,
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//   },
//   cardHeaderText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   deleteIcon: {
//     padding: 5,
//   },
//   formContainer: {
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: Colors.lightGray,
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
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
//   presentText: {
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   checkboxLabel: {
//     marginLeft: 8,
//   },
//   description: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   addButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 15,
//     paddingVertical: 12,
//     alignItems: 'center',
//     // marginBottom: 5,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ExperienceDetailsForm;


import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from "../../../constants/Colors";
import DatePicker from 'react-native-date-picker';
import { ResumeContext } from './ResumeContext';

const ExperienceDetailsForm = ({ onSubmit }) => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [experiences, setExperiences] = useState(resumeData.experience || []);
  const [openDatePicker, setOpenDatePicker] = useState({});

  const handleChange = (text, field, index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = text;
    setExperiences(updatedExperiences);
    updateResumeData({ experience: updatedExperiences });
  };

  const handleAddNew = () => {
    setExperiences([
      ...experiences,
      {
        designation: '',
        organization: '',
        startDate: new Date(),
        endDate: new Date(),
        isCurrentlyWorking: false,
        country: '',
        state: '',
        city: '',
        skills: '',
        description: '',
      }
    ]);
  };

  const handleDelete = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
    updateResumeData({ experience: updatedExperiences });
  };

  const handleCheckboxChange = (index, newValue) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].isCurrentlyWorking = newValue;
    if (newValue) {
      updatedExperiences[index].endDate = null;
    } else {
      updatedExperiences[index].endDate = new Date();
    }
    setExperiences(updatedExperiences);
    updateResumeData({ experience: updatedExperiences });
  };

  const handleDateChange = (date, field, index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = date;
    setExperiences(updatedExperiences);
    updateResumeData({ experience: updatedExperiences });
  };

  const handleOpenDatePicker = (index, field) => {
    setOpenDatePicker({ index, field, open: true });
  };

  const handleCloseDatePicker = () => {
    setOpenDatePicker({ ...openDatePicker, open: false });
  };

  return (
    <ScrollView style={styles.scrollView}>
      {experiences.map((experience, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Experience {index + 1}</Text>
            {index > 0 && (
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteIcon}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.formContainer}>
            <Text>Designation</Text>
            <TextInput
              style={styles.input}
              placeholder="Designation"
              value={experience.designation}
              onChangeText={(text) => handleChange(text, 'designation', index)}
            />
            <Text>Organization</Text>
            <TextInput
              style={styles.input}
              placeholder="Organization Name"
              value={experience.organization}
              onChangeText={(text) => handleChange(text, 'organization', index)}
            />
            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity style={styles.datePicker} onPress={() => handleOpenDatePicker(index, 'startDate')}>
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>{experience.startDate ? experience.startDate.toLocaleDateString() : 'DD-MM-YYYY'}</Text>
                </TouchableOpacity>
              </View>
              {!experience.isCurrentlyWorking ? (
                <View style={styles.dateContainer}>
                  <Text style={styles.dateLabel}>To:</Text>
                  <TouchableOpacity style={styles.datePicker} onPress={() => handleOpenDatePicker(index, 'endDate')}>
                    <FontAwesome name="calendar" size={20} color={Colors.primary} />
                    <Text style={styles.dateText}>{experience.endDate ? experience.endDate.toLocaleDateString() : 'DD-MM-YYYY'}</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={styles.presentText}>To: Present</Text>
              )}
            </View>
            <DatePicker
              modal
              open={openDatePicker.open && openDatePicker.index === index && openDatePicker.field === 'startDate'}
              date={experience.startDate}
              mode="date"
              onConfirm={(date) => {
                handleDateChange(date, 'startDate', index);
                handleCloseDatePicker();
              }}
              onCancel={handleCloseDatePicker}
            />
            <DatePicker
              modal
              open={openDatePicker.open && openDatePicker.index === index && openDatePicker.field === 'endDate'}
              date={experience.endDate || new Date()}
              mode="date"
              onConfirm={(date) => {
                handleDateChange(date, 'endDate', index);
                handleCloseDatePicker();
              }}
              onCancel={handleCloseDatePicker}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={experience.isCurrentlyWorking}
                onValueChange={(newValue) => handleCheckboxChange(index, newValue)}
              />
              <Text style={styles.checkboxLabel}>I am currently working here</Text>
            </View>
            <Text>Country</Text>
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={experience.country}
              onChangeText={(text) => handleChange(text, 'country', index)}
            />
            <Text>State</Text>
            <TextInput
              style={styles.input}
              placeholder="State"
              value={experience.state}
              onChangeText={(text) => handleChange(text, 'state', index)}
            />
            <Text>City</Text>
            <TextInput
              style={styles.input}
              placeholder="City"
              value={experience.city}
              onChangeText={(text) => handleChange(text, 'city', index)}
            />
            <Text>Skills</Text>
            <TextInput
              style={styles.input}
              placeholder="Skills"
              value={experience.skills}
              onChangeText={(text) => handleChange(text, 'skills', index)}
            />
            <Text>Description</Text>
            <TextInput
              style={[styles.input, styles.description]}
              placeholder="Description"
              value={experience.description}
              onChangeText={(text) => handleChange(text, 'description', index)}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
        <Text style={styles.buttonText}>Add New</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: Colors.background,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.lightGray,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteIcon: {
    padding: 5,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 5,
  },
  presentText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
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

export default ExperienceDetailsForm;
