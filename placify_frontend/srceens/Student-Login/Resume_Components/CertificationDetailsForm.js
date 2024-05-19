// // CertificationDetailsForm.js
// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
// import Colors from "../../../constants/Colors";

// const CertificationDetailsForm = ({ onSubmit }) => {
//   const [certificationDetails, setCertificationDetails] = useState({
//     certificationName: '',
//     organization: '',
//     domain: '',
//     description: '',
//   });

//   const handleChange = (text, field) => {
//     setCertificationDetails(prevState => ({
//       ...prevState,
//       [field]: text,
//     }));
//   };

//   return (
//     <ScrollView style={styles.scrollView}>
//       <View style={styles.formContainer}>
//         <Text>Certification Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Certification Name"
//           value={certificationDetails.certificationName}
//           onChangeText={text => handleChange(text, 'certificationName')}
//         />
//         <Text>Organization</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Name of Provider"
//           value={certificationDetails.organization}
//           onChangeText={text => handleChange(text, 'organization')}
//         />
//         <Text>Domain of Certification</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Domain"
//           value={certificationDetails.domain}
//           onChangeText={text => handleChange(text, 'domain')}
//         />
//         <Text>Description</Text>
//         <TextInput
//           style={[styles.input, styles.description]}
//           placeholder="Description"
//           value={certificationDetails.description}
//           onChangeText={text => handleChange(text, 'description')}
//           multiline={true}
//           numberOfLines={4}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     marginBottom: 20,
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
//   description: {
//     height: 100, // Adjust based on your needs
//     textAlignVertical: 'top', // Align text to the top
//   },
//   // Add more styles as needed
// });

// export default CertificationDetailsForm;





// import React, { useState,useContext,useEffect } from 'react';
// import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Colors from "../../../constants/Colors";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { ResumeContext } from './ResumeContext';

// const CertificationDetailsForm = () => {
//   const { resumeData, updateResumeData } = useContext(ResumeContext);
//   const [certifications, setCertifications] = useState([]);
//   const [name, setName] = useState('');
//   const [organization, setOrganization] = useState('');

//   useEffect(() => {
//       if (resumeData && resumeData.certifications) {
//           setCertifications(resumeData.certifications);
//       }
//   }, [resumeData]);

//   const handleAddCertification = () => {
//       const newCertification = { name, organization};
//       const updatedCertifications = [...certifications, newCertification];
//       setCertifications(updatedCertifications);
//       updateResumeData({ certifications: updatedCertifications });
//       setName('');
//       setOrganization('');
//   };

//   const handleRemoveCertification = (index) => {
//       const updatedCertifications = certifications.filter((_, i) => i !== index);
//       setCertifications(updatedCertifications);
//       updateResumeData({ certifications: updatedCertifications });
//   };
  

//   return (
//     <ScrollView style={styles.scrollView}>
//       {certifications.map((certification, index) => (
//         <View key={index} style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardHeaderText}>Certification {index + 1}</Text>
//             {index > 0 && (
//               <TouchableOpacity onPress={() => handleRemoveCertification(index)} style={styles.deleteIcon}>
//                 <FontAwesome name="trash" size={24} color="red" />
//               </TouchableOpacity>
//             )}
//           </View>
//           <View style={styles.formContainer}>
//             <Text>Certification Name</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Certification Name"
//               value={name}
//               onChangeText={(text) => setName(text)}
//             />
//             <Text>Organization</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Name of Provider"
//               value={organization}
//               onChangeText={(text) => setOrganization(text)}
//             />
//           </View>
//         </View>
//       ))}
//       <TouchableOpacity style={styles.addButton} onPress={handleAddCertification}>
//         <Text style={styles.buttonText}>Add New</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from "../../../constants/Colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ResumeContext } from './ResumeContext';

const CertificationDetailsForm = ({ onSubmit }) => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [certifications, setCertifications] = useState(resumeData.certifications || []);

  useEffect(() => {
    setCertifications(resumeData.certifications || []);
  }, [resumeData]);

  const handleChange = (text, field, index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = text;
    setCertifications(updatedCertifications);
    updateResumeData({ certifications: updatedCertifications }); // Update context
  };

  const handleAddNew = () => {
    const updatedCertifications = [
      ...certifications,
      {
        name: '',
        organization: '',
      }
    ];
    setCertifications(updatedCertifications);
    updateResumeData({ certifications: updatedCertifications }); // Update context
  };

  const handleDelete = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
    updateResumeData({ certifications: updatedCertifications }); // Update context
  };

  return (
    <ScrollView style={styles.scrollView}>
      {certifications.map((certification, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Certification {index + 1}</Text>
            {index > 0 && (
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteIcon}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.formContainer}>
            <Text>Certification Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Certification Name"
              value={certification.name}
              onChangeText={(text) => handleChange(text, 'name', index)}
            />
            <Text>Organization</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Provider"
              value={certification.organization}
              onChangeText={(text) => handleChange(text, 'organization', index)}
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
    marginBottom: 10,
    borderRadius: 5,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CertificationDetailsForm;



