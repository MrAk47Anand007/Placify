import React, { useState, useRef,useContext } from "react";
import { ResumeProvider } from './Resume Components/ResumeContext'; 
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Animated, ScrollView, Alert } from "react-native";
import Colors from "../../constants/Colors";
import BasicInfoForm from "./Resume Components/BasicInfoForm";
import EducationDetailsForm from "./Resume Components/EducationDetailsForm"; // Import the EducationDetailsForm
import ExpDetailsForm from "./Resume Components/ExperienceDetailsForm";
import ProjectDetailsForm from "./Resume Components/ProjectDetailsForm"; // Adjust the path as necessary
import CertificationDetailsForm from "./Resume Components/CertificationDetailsForm";
import ExtraCoCurricularActivitiesForm from "./Resume Components/ExtraCoCurricularActivitiesForm";
import OtherDetailsForm from "./Resume Components/OtherDetailsForm";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';
import { ResumeContext } from './Resume Components/ResumeContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
import  {handleGenerateResume}  from "./Resume Components/ResumeService";


const ResumeScreen = () => {
  const [isBasicInfoExpanded, setIsBasicInfoExpanded] = useState(false);
  const [isEducationDetailsExpanded, setIsEducationDetailsExpanded] = useState(false); // New state for education details
  const [isExperienceDetailsExpanded, setIsExperienceDetailsExpanded] = useState(false); 
  const [isProjectDetailsExpanded, setIsProjectDetailsExpanded] = useState(false);
  const [isCertificationDetailsExpanded, setIsCertificationDetailsExpanded] = useState(false);
  const [isExtraCoCurricularActivitiesFormExpanded, setIsExtraCoCurricularActivitiesFormExpanded] = useState(false);
  const [isOtherDetailsExpanded, setIsOtherDetailsExpanded] = useState(false); 

  const animationControllerBasicInfo = useRef(new Animated.Value(0)).current;
  const animationControllerEducationDetails = useRef(new Animated.Value(0)).current; // For education details animation
  const animationControllerExperienceDetails = useRef(new Animated.Value(0)).current;
  const animationControllerProjectDetails = useRef(new Animated.Value(0)).current;
  const animationControllerCertificationDetails = useRef(new Animated.Value(0)).current;
  const animationControllerExtraCoCurricularActivitiesForm = useRef(new Animated.Value(0)).current;
  const animationControllerOtherDetails = useRef(new Animated.Value(0)).current;

  const { resumeData } = useContext(ResumeContext);

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

  const handleSubmit = async () => {    
      
    const token = await SecureStore.getItemAsync('jwtToken');

  if (token) {
    handleGenerateResume(resumeData, token)
      .then(result => {
            //view pdf here 
            Alert("Generated Resume Successfully")
        })
        .catch(error => {
            Alert("Generated Resume Failed")
        });
      }else {
        Alert.alert('Error', 'No token found. Please login.');
      }
};
    

  return (
    <ResumeProvider> 
      <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* Basic Information Section */}
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

      {/* Education Details Section */}
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

      {/* Experience Details Section */}
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

      {/* Project Details Section */}
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

      {/* Certification Details Section */}
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

      {/* ExtraCoCurricularActivitiesForm Section */}
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

      {/* Other Details Section */}
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
    </SafeAreaView>
    </ResumeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
    paddingBottom: 160,
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
    padding:10,
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
    marginHorizontal:Spacing * 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:75,
  },
  submitText: {
    color: 'white',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default ResumeScreen;