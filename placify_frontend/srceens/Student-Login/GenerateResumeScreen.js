// import React, { useState, useRef, useContext, useEffect } from "react";
// import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Animated, ScrollView, Alert, Modal, View, TextInput } from "react-native";
// import Colors from "../../constants/Colors";
// import BasicInfoForm from "./Resume_Components/BasicInfoForm";
// import EducationDetailsForm from "./Resume_Components/EducationDetailsForm"; // Import the EducationDetailsForm
// import ExpDetailsForm from "./Resume_Components/ExperienceDetailsForm";
// import ProjectDetailsForm from "./Resume_Components/ProjectDetailsForm"; // Adjust the path as necessary
// import CertificationDetailsForm from "./Resume_Components/CertificationDetailsForm";
// import ExtraCoCurricularActivitiesForm from "./Resume_Components/ExtraCoCurricularActivitiesForm";
// import OtherDetailsForm from "./Resume_Components/OtherDetailsForm";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontSize from '../../constants/FontSize';
// import Spacing from '../../constants/Spacing';
// import { ResumeProvider, ResumeContext } from './Resume_Components/ResumeContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFetchBlob from 'rn-fetch-blob';
// import { handleGenerateResume } from "./Resume_Components/ResumeService";
// import Pdf from 'react-native-pdf';

// const ResumeScreen = () => {
//   const [isBasicInfoExpanded, setIsBasicInfoExpanded] = useState(false);
//   const [isEducationDetailsExpanded, setIsEducationDetailsExpanded] = useState(false); // New state for education details
//   const [isExperienceDetailsExpanded, setIsExperienceDetailsExpanded] = useState(false);
//   const [isProjectDetailsExpanded, setIsProjectDetailsExpanded] = useState(false);
//   const [isCertificationDetailsExpanded, setIsCertificationDetailsExpanded] = useState(false);
//   const [isExtraCoCurricularActivitiesFormExpanded, setIsExtraCoCurricularActivitiesFormExpanded] = useState(false);
//   const [isOtherDetailsExpanded, setIsOtherDetailsExpanded] = useState(false);
//   const [fileName, setFileName] = useState('');
//   const [modalVisible, setModalVisible] = useState(false); // State for the main modal
//   const [modalFileNameVisible, setModalFileNameVisible] = useState(false); // State for the modal to enter file name

//   const [modalInput, setModalInput] = useState(''); // State for modal input value
//   const [pdfUri, setPdfUri] = useState('');

//   const animationControllerBasicInfo = useRef(new Animated.Value(0)).current;
//   const animationControllerEducationDetails = useRef(new Animated.Value(0)).current; // For education details animation
//   const animationControllerExperienceDetails = useRef(new Animated.Value(0)).current;
//   const animationControllerProjectDetails = useRef(new Animated.Value(0)).current;
//   const animationControllerCertificationDetails = useRef(new Animated.Value(0)).current;
//   const animationControllerExtraCoCurricularActivitiesForm = useRef(new Animated.Value(0)).current;
//   const animationControllerOtherDetails = useRef(new Animated.Value(0)).current;

//   const handlePressBasicInfo = () => {
//     setIsBasicInfoExpanded(!isBasicInfoExpanded);
//     Animated.timing(animationControllerBasicInfo, {
//       toValue: isBasicInfoExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handlePressEducationDetails = () => {
//     setIsEducationDetailsExpanded(!isEducationDetailsExpanded);
//     Animated.timing(animationControllerEducationDetails, {
//       toValue: isEducationDetailsExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handlePressExperienceDetails = () => {
//     setIsExperienceDetailsExpanded(!isExperienceDetailsExpanded);
//     Animated.timing(animationControllerExperienceDetails, {
//       toValue: isExperienceDetailsExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handlePressProjectDetails = () => {
//     setIsProjectDetailsExpanded(!isProjectDetailsExpanded);
//     Animated.timing(animationControllerProjectDetails, {
//       toValue: isProjectDetailsExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handlePressCertificationDetails = () => {
//     setIsCertificationDetailsExpanded(!isCertificationDetailsExpanded);
//     Animated.timing(animationControllerCertificationDetails, {
//       toValue: isCertificationDetailsExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handlePressExtraCoCurricularActivitiesForm = () => {
//     setIsExtraCoCurricularActivitiesFormExpanded(!isExtraCoCurricularActivitiesFormExpanded);
//     Animated.timing(animationControllerExtraCoCurricularActivitiesForm, {
//       toValue: isExtraCoCurricularActivitiesFormExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handlePressOtherDetails = () => {
//     setIsOtherDetailsExpanded(!isOtherDetailsExpanded);
//     Animated.timing(animationControllerOtherDetails, {
//       toValue: isOtherDetailsExpanded ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const rotateArrowBasicInfo = animationControllerBasicInfo.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'],
//   });

//   const rotateArrowEducationDetails = animationControllerEducationDetails.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'], // Arrow rotation for education details
//   });

//   const rotateArrowExperienceDetails = animationControllerExperienceDetails.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'], // Arrow rotation for experience details
//   });

//   const rotateArrowProjectDetails = animationControllerProjectDetails.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'],
//   });

//   const rotateArrowCertificationDetails = animationControllerCertificationDetails.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'],
//   });

//   const rotateArrowExtraCoCurricularActivitiesForm = animationControllerExtraCoCurricularActivitiesForm.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'],
//   });

//   const rotateArrowOtherDetails = animationControllerOtherDetails.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '180deg'],
//   });

//   const handleModalOk = async () => {
//     setFileName(modalInput);
//     setModalFileNameVisible(false);

//     try {
//       const resumeData=await AsyncStorage.getItem('resumeData');
      
//       const response = await handleGenerateResume(resumeData);

//       if (response.status === 200) {
//         const pdfData = response.data; // Byte array of the PDF
//         const filePath = RNFetchBlob.fs.dirs.DownloadDir + '/' + modalInput + '.pdf'; // Use modalInput for filename

//         await RNFetchBlob.fs.writeFile(filePath, pdfData, 'base64')
//           .then(() => {
//             console.log('The file saved to ', filePath);
//             setPdfUri(filePath);
//             setModalVisible(true);
//           })
//           .catch((error) => {
//             console.error('Error saving resume:', error);
//             Alert.alert('Error', 'Failed to save resume.');
//           });

//       } else {
//         console.error('Error generating resume:', response.data);
//         Alert.alert('Error', 'Failed to generate resume.');
//       }

//     } catch (error) {
//       console.error('Error during API call or file generation:', error);
//       Alert.alert('Error', 'An error occurred. Please try again later.');
//     }
//   };

//   const handleModalCancel = () => {
//     setModalVisible(false);
//   };

//   const handleSubmit = async () => {
//     setModalFileNameVisible(true);
//   };

//   return (
//     <ResumeProvider>
//       <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Resume Generation</Text>
//       </View>
//         <ScrollView>
//           <TouchableOpacity style={styles.box} onPress={handlePressBasicInfo}>
//             <Text>Basic Information</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowBasicInfo }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isBasicInfoExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerBasicInfo }]}
//             >
//               <BasicInfoForm />
//             </Animated.View>
//           )}

//           <TouchableOpacity style={styles.box} onPress={handlePressEducationDetails}>
//             <Text>Education Details</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowEducationDetails }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isEducationDetailsExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerEducationDetails }]}
//             >
//               <EducationDetailsForm />
//             </Animated.View>
//           )}

//           <TouchableOpacity style={styles.box} onPress={handlePressExperienceDetails}>
//             <Text>Experience Details</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowExperienceDetails }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isExperienceDetailsExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerExperienceDetails }]}
//             >
//               <ExpDetailsForm />
//             </Animated.View>
//           )}

//           <TouchableOpacity style={styles.box} onPress={handlePressProjectDetails}>
//             <Text>Project Details</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowProjectDetails }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isProjectDetailsExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerProjectDetails }]}
//             >
//               <ProjectDetailsForm />
//             </Animated.View>
//           )}

//           <TouchableOpacity style={styles.box} onPress={handlePressCertificationDetails}>
//             <Text>Certification Details</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowCertificationDetails }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isCertificationDetailsExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerCertificationDetails }]}
//             >
//               <CertificationDetailsForm />
//             </Animated.View>
//           )}

//           <TouchableOpacity style={styles.box} onPress={handlePressExtraCoCurricularActivitiesForm}>
//             <Text>Extra & Co-Curricular Activities Details</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowExtraCoCurricularActivitiesForm }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isExtraCoCurricularActivitiesFormExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerExtraCoCurricularActivitiesForm }]}
//             >
//               <ExtraCoCurricularActivitiesForm />
//             </Animated.View>
//           )}

//           <TouchableOpacity style={styles.box} onPress={handlePressOtherDetails}>
//             <Text>Other Details</Text>
//             <Animated.View style={{ transform: [{ rotate: rotateArrowOtherDetails }] }}>
//               <Icon name="chevron-down" size={24} color={Colors.primary} />
//             </Animated.View>
//           </TouchableOpacity>
//           {isOtherDetailsExpanded && (
//             <Animated.View
//               style={[styles.formContainer, { opacity: animationControllerOtherDetails }]}
//             >
//               <OtherDetailsForm />
//             </Animated.View>
//           )}
//         </ScrollView>
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitText}>Generate Resume</Text>
//         </TouchableOpacity>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalFileNameVisible}
//           onRequestClose={() => setModalFileNameVisible(false)}
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <Text style={styles.modalTitle}>Enter File Name</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter file name"
//                 onChangeText={text => setModalInput(text)}
//                 value={modalInput}
//               />
//               <View style={styles.modalButtonContainer}>
//                 <TouchableOpacity style={[styles.modalButton, { backgroundColor: Colors.primary }]} onPress={handleModalOk}>
//                   <Text style={styles.modalButtonText}>OK</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.modalButton, { backgroundColor: Colors.error }]} onPress={handleModalCancel}>
//                   <Text style={styles.modalButtonText}>Cancel</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>

//         <Modal
//           animationType="slide"
//           transparent={false}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(false);
//           }}
//         >
//           {pdfUri !== '' && (
//             <View style={styles.pdfContainer}>
//               <Pdf
//                 source={{ uri: pdfUri }}
//                 style={styles.pdf}
//               />
//             </View>
//           )}
//         </Modal>

//       </SafeAreaView>
//     </ResumeProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: Colors.background,
//     paddingBottom: 75,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 14,
//     backgroundColor: Colors.primary,
//   },
//   headerTitle: {
//     marginLeft: 8,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   box: {
//     margin: 15,
//     padding: 8,
//     backgroundColor: Colors.light,
//     borderRadius: 6,
//     borderWidth: 1.5,
//     borderColor: Colors.primary,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
  
//   formContainer: {
//     marginHorizontal: 20,
//     padding:10,
//     backgroundColor: Colors.background,
//     borderRadius: 20,
//     // borderWidth: 1,
//     // borderColor: Colors.dark,
//     shadowColor: Colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: Spacing * 0.2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: Spacing * 0.2,
//     elevation: 6,
//   },
//   submitButton: {
//     position: 'absolute', // Position the button absolutely
//     bottom: 7, // Place it at the bottom of the screen
//     left: 0,
//     right: 0,
//     backgroundColor: Colors.primary,
//     borderRadius: 20,
//     paddingVertical: Spacing * 2,
//     marginHorizontal:Spacing * 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   submitText: {
//     color: 'white',
//     fontSize: FontSize.large,
//     fontWeight: 'bold',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: Colors.primary,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginBottom: 10,
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   pdfContainer: {
//     flex: 1,
//     backgroundColor: '#fff', // Set the background color as needed
//     marginTop: 20, // Adjust as needed
//   },

//   pdf: {
//     flex: 1,
//     width: '100%', // Adjust as needed
//     height: '100%', // Adjust as needed
//   },
//   // Add more styles as needed
// });

// export default ResumeScreen;






































import React, { useState, useRef, useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Animated, ScrollView, Alert, Modal, View, TextInput } from "react-native";
import Colors from "../../constants/Colors";
import BasicInfoForm from "./Resume_Components/BasicInfoForm";
import EducationDetailsForm from "./Resume_Components/EducationDetailsForm"; // Import the EducationDetailsForm
import ExpDetailsForm from "./Resume_Components/ExperienceDetailsForm";
import ProjectDetailsForm from "./Resume_Components/ProjectDetailsForm"; // Adjust the path as necessary
import CertificationDetailsForm from "./Resume_Components/CertificationDetailsForm";
import ExtraCoCurricularActivitiesForm from "./Resume_Components/ExtraCoCurricularActivitiesForm";
import OtherDetailsForm from "./Resume_Components/OtherDetailsForm";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';
import { ResumeProvider, ResumeContext } from './Resume_Components/ResumeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import { handleGenerateResume } from "./Resume_Components/ResumeService";
import Pdf from 'react-native-pdf';

const ResumeScreen = (visible) => {
  const [isBasicInfoExpanded, setIsBasicInfoExpanded] = useState(false);
  const [isEducationDetailsExpanded, setIsEducationDetailsExpanded] = useState(false); // New state for education details
  const [isExperienceDetailsExpanded, setIsExperienceDetailsExpanded] = useState(false);
  const [isProjectDetailsExpanded, setIsProjectDetailsExpanded] = useState(false);
  const [isCertificationDetailsExpanded, setIsCertificationDetailsExpanded] = useState(false);
  const [isExtraCoCurricularActivitiesFormExpanded, setIsExtraCoCurricularActivitiesFormExpanded] = useState(false);
  const [isOtherDetailsExpanded, setIsOtherDetailsExpanded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // State for the main modal
  const [modalFileNameVisible, setModalFileNameVisible] = useState(false); // State for the modal to enter file name

  const [modalInput, setModalInput] = useState(''); // State for modal input value
  const [pdfUri, setPdfUri] = useState('');

  const animationControllerBasicInfo = useRef(new Animated.Value(0)).current;
  const animationControllerEducationDetails = useRef(new Animated.Value(0)).current; // For education details animation
  const animationControllerExperienceDetails = useRef(new Animated.Value(0)).current;
  const animationControllerProjectDetails = useRef(new Animated.Value(0)).current;
  const animationControllerCertificationDetails = useRef(new Animated.Value(0)).current;
  const animationControllerExtraCoCurricularActivitiesForm = useRef(new Animated.Value(0)).current;
  const animationControllerOtherDetails = useRef(new Animated.Value(0)).current;

  const scaleAnim = useRef(new Animated.Value(0)).current;

  const handlePressBasicInfo = () => {
    setIsBasicInfoExpanded(!isBasicInfoExpanded);
    Animated.timing(animationControllerBasicInfo, {
      toValue: isBasicInfoExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressEducationDetails = () => {
    setIsEducationDetailsExpanded(!isEducationDetailsExpanded);
    Animated.timing(animationControllerEducationDetails, {
      toValue: isEducationDetailsExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressExperienceDetails = () => {
    setIsExperienceDetailsExpanded(!isExperienceDetailsExpanded);
    Animated.timing(animationControllerExperienceDetails, {
      toValue: isExperienceDetailsExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressProjectDetails = () => {
    setIsProjectDetailsExpanded(!isProjectDetailsExpanded);
    Animated.timing(animationControllerProjectDetails, {
      toValue: isProjectDetailsExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressCertificationDetails = () => {
    setIsCertificationDetailsExpanded(!isCertificationDetailsExpanded);
    Animated.timing(animationControllerCertificationDetails, {
      toValue: isCertificationDetailsExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressExtraCoCurricularActivitiesForm = () => {
    setIsExtraCoCurricularActivitiesFormExpanded(!isExtraCoCurricularActivitiesFormExpanded);
    Animated.timing(animationControllerExtraCoCurricularActivitiesForm, {
      toValue: isExtraCoCurricularActivitiesFormExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOtherDetails = () => {
    setIsOtherDetailsExpanded(!isOtherDetailsExpanded);
    Animated.timing(animationControllerOtherDetails, {
      toValue: isOtherDetailsExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const rotateArrowBasicInfo = animationControllerBasicInfo.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateArrowEducationDetails = animationControllerEducationDetails.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Arrow rotation for education details
  });

  const rotateArrowExperienceDetails = animationControllerExperienceDetails.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Arrow rotation for experience details
  });

  const rotateArrowProjectDetails = animationControllerProjectDetails.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateArrowCertificationDetails = animationControllerCertificationDetails.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateArrowExtraCoCurricularActivitiesForm = animationControllerExtraCoCurricularActivitiesForm.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateArrowOtherDetails = animationControllerOtherDetails.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleModalOk = async () => {
    setFileName(modalInput);
    setModalFileNameVisible(false);

    try {
      const resumeData = await AsyncStorage.getItem('resumeData');

      const response = await handleGenerateResume(resumeData);

      if (response.status === 200) {
        const pdfData = response.data; // Byte array of the PDF
        const filePath = RNFetchBlob.fs.dirs.DownloadDir + '/' + modalInput + '.pdf'; // Use modalInput for filename

        await RNFetchBlob.fs.writeFile(filePath, pdfData, 'base64')
          .then(() => {
            console.log('The file saved to ', filePath);
            setPdfUri(filePath);
            setModalVisible(true);
          })
          .catch((error) => {
            console.error('Error saving resume:', error);
            Alert.alert('Error', 'Failed to save resume.');
          });

      } else {
        console.error('Error generating resume:', response.data);
        Alert.alert('Error', 'Failed to generate resume.');
      }

    } catch (error) {
      console.error('Error during API call or file generation:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  const handleModalCancel = () => {
    setModalFileNameVisible(false);
  };

  const handleSubmit = async () => {
    setModalFileNameVisible(true);
  };


  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, scaleAnim]);


  return (
    <ResumeProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Resume Generation</Text>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.box} onPress={handlePressBasicInfo}>
            <Text>Basic Information</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowBasicInfo }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isBasicInfoExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerBasicInfo }]}
            >
              <BasicInfoForm />
            </Animated.View>
          )}

          <TouchableOpacity style={styles.box} onPress={handlePressEducationDetails}>
            <Text>Education Details</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowEducationDetails }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isEducationDetailsExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerEducationDetails }]}
            >
              <EducationDetailsForm />
            </Animated.View>
          )}

          <TouchableOpacity style={styles.box} onPress={handlePressExperienceDetails}>
            <Text>Experience Details</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowExperienceDetails }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isExperienceDetailsExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerExperienceDetails }]}
            >
              <ExpDetailsForm />
            </Animated.View>
          )}

          <TouchableOpacity style={styles.box} onPress={handlePressProjectDetails}>
            <Text>Project Details</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowProjectDetails }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isProjectDetailsExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerProjectDetails }]}
            >
              <ProjectDetailsForm />
            </Animated.View>
          )}

          <TouchableOpacity style={styles.box} onPress={handlePressCertificationDetails}>
            <Text>Certification Details</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowCertificationDetails }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isCertificationDetailsExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerCertificationDetails }]}
            >
              <CertificationDetailsForm />
            </Animated.View>
          )}

          <TouchableOpacity style={styles.box} onPress={handlePressExtraCoCurricularActivitiesForm}>
            <Text>Extra & Co-Curricular Activities Details</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowExtraCoCurricularActivitiesForm }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isExtraCoCurricularActivitiesFormExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerExtraCoCurricularActivitiesForm }]}
            >
              <ExtraCoCurricularActivitiesForm />
            </Animated.View>
          )}

          <TouchableOpacity style={styles.box} onPress={handlePressOtherDetails}>
            <Text>Other Details</Text>
            <Animated.View style={{ transform: [{ rotate: rotateArrowOtherDetails }] }}>
              <Icon name="chevron-down" size={24} color={Colors.primary} />
            </Animated.View>
          </TouchableOpacity>
          {isOtherDetailsExpanded && (
            <Animated.View
              style={[styles.formContainer, { opacity: animationControllerOtherDetails }]}
            >
              <OtherDetailsForm />
            </Animated.View>
          )}
        </ScrollView>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Generate Resume</Text>
        </TouchableOpacity>
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalFileNameVisible}
          onRequestClose={() => setModalFileNameVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Enter File Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter file name"
                onChangeText={text => setModalInput(text)}
                value={modalInput}
              />
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={[styles.OKmodalButton, { backgroundColor: Colors.primary }]} onPress={handleModalOk}>
                  <Text style={styles.OKmodalButtonText}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.CancelmodalButton, { backgroundColor: Colors.gray }]} onPress={handleModalCancel}>
                  <Text style={styles.CancelmodalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}



        <Modal
          transparent={true}
          animationType="none"
          visible={modalFileNameVisible}
          onRequestClose={() => setModalFileNameVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleAnim }] }]}>
              <Text style={styles.modalText}>Enter File Name</Text>
              <TextInput
                style={styles.Modalinput}
                placeholder="Enter file name"
                onChangeText={text => setModalInput(text)}
                value={modalInput}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Savebutton} onPress={handleModalOk}>
                  <Text style={styles.SavebuttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Cancelbutton} onPress={handleModalCancel}>
                  <Text style={styles.CancelbuttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>



        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          {pdfUri !== '' && (
            <View style={styles.pdfContainer}>
              <Pdf
                source={{ uri: pdfUri }}
                style={styles.pdf}
              />
            </View>
          )}
        </Modal>

      </SafeAreaView>
    </ResumeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
    paddingBottom: 75,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  box: {
    margin: 15,
    padding: 8,
    backgroundColor: Colors.light,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  formContainer: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: Colors.background,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: Colors.dark,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing * 0.2,
    },
    shadowOpacity: 0.23,
    shadowRadius: Spacing * 0.2,
    elevation: 6,
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
  submitText: {
    color: 'white',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  Modalinput: {
    width: '94%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 350, // Increased width
    paddingHorizontal: 30, // Increased padding
    paddingVertical: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20, // Increased font size
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Savebutton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  Cancelbutton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  SavebuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  CancelbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  pdfContainer: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color as needed
    marginTop: 20, // Adjust as needed
  },

  pdf: {
    flex: 1,
    width: '100%', // Adjust as needed
    height: '100%', // Adjust as needed
  },
  // Add more styles as needed
});

export default ResumeScreen;