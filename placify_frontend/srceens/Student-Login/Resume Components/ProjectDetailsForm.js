
// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import DatePicker from 'react-native-datepicker';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Colors from "../../../constants/Colors";

// const ProjectDetailsForm = ({ onSubmit }) => {
//   const [projects, setProjects] = useState([
//     {
//       projectName: '',
//       projectLink: '',
//       startDate: '',
//       endDate: '',
//       teamSize: '',
//       keySkills: '',
//       description: '',
//     }
//   ]);

//   const handleChange = (text, field, index) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index][field] = text;
//     setProjects(updatedProjects);
//   };

//   const handleAddNew = () => {
//     setProjects([
//       ...projects,
//       {
//         projectName: '',
//         projectLink: '',
//         startDate: '',
//         endDate: '',
//         teamSize: '',
//         keySkills: '',
//         description: '',
//       }
//     ]);
//   };

//   const handleDelete = (index) => {
//     const updatedProjects = [...projects];
//     updatedProjects.splice(index, 1);
//     setProjects(updatedProjects);
//   };

//   return (
//     <ScrollView style={styles.scrollView}>
//       {projects.map((project, index) => (
//         <View key={index} style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardHeaderText}>Project {index + 1}</Text>
//             {index > 0 && (
//               <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteIcon}>
//                 <FontAwesome name="trash" size={24} color="red" />
//               </TouchableOpacity>
//             )}
//           </View>
//           <View style={styles.formContainer}>
//             <Text>Project Name</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Project Name"
//               value={project.projectName}
//               onChangeText={(text) => handleChange(text, 'projectName', index)}
//             />
//             <Text>Project Link</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Project Link"
//               value={project.projectLink}
//               onChangeText={(text) => handleChange(text, 'projectLink', index)}
//             />
//             <Text>From</Text>
//             <DatePicker
//               style={styles.datePicker}
//               date={project.startDate}
//               mode="date"
//               placeholder="Select Start Date"
//               format="YYYY-MM-DD"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               onDateChange={(date) => handleChange(date, 'startDate', index)}
//             />
//             <Text>To</Text>
//             <DatePicker
//               style={styles.datePicker}
//               date={project.endDate}
//               mode="date"
//               placeholder="Select End Date"
//               format="YYYY-MM-DD"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               onDateChange={(date) => handleChange(date, 'endDate', index)}
//             />
//             <Text>Team Size</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Team Size"
//               keyboardType="numeric"
//               value={project.teamSize}
//               onChangeText={(text) => handleChange(text, 'teamSize', index)}
//             />
//             <Text>Key Skills</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Key Skills"
//               value={project.keySkills}
//               onChangeText={(text) => handleChange(text, 'keySkills', index)}
//             />
//             <Text>Description</Text>
//             <TextInput
//               style={[styles.input, styles.description]}
//               placeholder="Description"
//               value={project.description}
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
//     borderRadius: 30,
//     marginBottom: 20,
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
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   datePicker: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   description: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   addButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ProjectDetailsForm;








import React, { useState,useContext } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from "../../../constants/Colors";
import { ResumeContext } from './ResumeContext';
const ProjectDetailsForm = ({ onSubmit }) => {

  const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
  const [openToDatePicker, setOpenToDatePicker] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const [projects, setProjects] = useState(resumeData.projects); 

  const handleChange = (text, field, index) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = text;
    setProjects(updatedProjects);
    updateResumeData({ projects: updatedProjects }); // Update context
  };

  const handleAddNew = () => {
    setProjects([
      ...projects,
      {
        projectName: resumeData.title,
        projectLink: '',
        startDate: '',
        endDate: '',
        teamSize: '',
        keySkills: '',
        description: '',
      }
    ]);
  };

  const handleDelete = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
    updateResumeData({ projects: updatedProjects }); // Update context
  };

  return (
    <ScrollView style={styles.scrollView}>
      {projects.map((project, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Project {index + 1}</Text>
            {index > 0 && (
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteIcon}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.formContainer}>
            <Text>Project Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Project Name"
              value={project.title}
              onChangeText={(text) => handleChange(text, 'projectName', index)}
            />
            <Text>Project Link</Text>
            <TextInput
              style={styles.input}
              placeholder="Project Link"
              value={project.link}
              onChangeText={(text) => handleChange(text, 'projectLink', index)}
            />


            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity style={styles.datePicker} onPress={() => setOpenFromDatePicker(true)}>
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>{fromDate ? fromDate.toLocaleDateString() : 'DD-MM-YYYY'}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity style={styles.datePicker} onPress={() => setOpenToDatePicker(true)}>
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>{fromDate ? fromDate.toLocaleDateString() : 'DD-MM-YYYY'}</Text>
                </TouchableOpacity>
              </View>
            </View>


            {fromDate && ( // Render the DatePicker only if fromDate is not null or undefined
              <DatePicker
                modal
                open={openFromDatePicker}
                date={fromDate}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  setFromDate(date);
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {toDate && ( // Render the DatePicker only if toDate is not null or undefined and not currently working
              <DatePicker
                modal
                open={openToDatePicker}
                date={toDate}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  setToDate(date);
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}




            <Text>Team Size</Text>
            <TextInput
              style={styles.input}
              placeholder="Team Size"
              keyboardType="numeric"
              value={project.teamSize}
              onChangeText={(text) => handleChange(text, 'teamSize', index)}
            />
            <Text>Key Skills</Text>
            <TextInput
              style={styles.input}
              placeholder="Key Skills"
              value={project.keySkills}
              onChangeText={(text) => handleChange(text, 'keySkills', index)}
            />
            <Text>Description</Text>
            <TextInput
              style={[styles.input, styles.description]}
              placeholder="Description"
              value={project.description}
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
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProjectDetailsForm;
