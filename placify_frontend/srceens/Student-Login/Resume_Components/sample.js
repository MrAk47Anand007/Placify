import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Animated, Button, TouchableOpacity, View, ToastAndroid, ScrollView, Alert } from "react-native";
import AppTextInput from "../../components/RegisterTextInuput";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { SelectList } from "react-native-dropdown-select-list";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import axios from 'axios';
import DatePicker from 'react-native-date-picker';

const Register = ({ navigation: { navigate } }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [personalEmail, setPersonalEmail] = useState('');
    const [collegeEmail, setCollegeEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [selectedBranch, setSelectedBranch] = useState(null); // State to track selected branch
    const [branchError, setBranchError] = useState(false); // State to track branch error message
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [passoutYear, setPassoutYear] = useState(new Date()); // Initialize as a Date object
    const [openDatePicker, setOpenDatePicker] = useState(false);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim]);


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Password should contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (!validatePassword(text)) {
            setPasswordError('Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        if (password && text === password) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    };

    const handleBranchSelect = (branch) => {
        setSelectedBranch(branch);
        setBranchError(false); // Clear branch error when branch is selected
    };

    const handleSignUp = async() => {
        const isPersonalEmailValid = validateEmail(personalEmail);
        const isCollegeEmailValid = validateEmail(collegeEmail);

        if (isPersonalEmailValid && isCollegeEmailValid && passwordMatch && selectedBranch) {
          try{
            const response = await axios.post('http://192.168.29.209:8080/user/register',{
              firstName,
              lastName,
              personalEmail,
              collegeEmail,
              password,
              isEnabled: true,
              department: {
                deptName:selectedBranch // Assuming you always send the department info
              },
            });
            ToastAndroid.show("Sign Up Successful", ToastAndroid.SHORT);
            setTimeout(() => {
                navigate("Login");
            }, 2000);
          }catch(error){
            Alert.alert("Error", error.message);
          }
          
          
        } else {
            if (!selectedBranch) {
                setBranchError(true); // Show branch selection error
            }
        }
    };

    const data = [
      {key:'1', value:'Computer Engineering'},
      {key:'2', value:'Artificial Intelligence and Data Science'},
      {key:'3', value:'Civil Engineering'},
      {key:'4', value:'Mechanical Engineering'},
      {key:'5', value:'Electronics and Telecommunication Engineering'},
      {key:'6', value:'Automation and Robotics'},
      {key:'7', value:'Instrumentation Engineering'},
      {key:'8', value:'Electrical Engineering'},
      {key:'9', value:'Information Technology'},
    ];

    return(
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Create Account</Text>
              <Text style={styles.subHeaderText}>Create an account so you can explore all the existing jobs !!</Text>
            </View>
            <View style={styles.Branch}>
              <SelectList
                  data={data}
                  setSelected={handleBranchSelect} // Pass the handler function to handle branch selection
                  placeholder="Select Branch"
              />
              {branchError && <Text style={styles.branchvalidationText}>Branch selection is required</Text>}
            </View>
            <View style={styles.form}>
              <AppTextInput 
                placeholder="First Name"
                onChangeText={text => setFirstName(text.replace(/[^a-zA-Z]/g, ''))}
                value={firstName}
              />
              <AppTextInput 
                placeholder="Last Name"
                onChangeText={text => setLastName(text.replace(/[^a-zA-Z]/g, ''))}
                value={lastName}
              />
              <AppTextInput 
                placeholder="Personal Email-Id"
                onChangeText={text => setPersonalEmail(text)}
                value={personalEmail}
              />

              {!validateEmail(personalEmail) && personalEmail && <Text style={styles.validationText}>Invalid Email</Text>}
              <AppTextInput 
                placeholder="College Email-Id"
                onChangeText={text => setCollegeEmail(text)}
                value={collegeEmail}
              />
                 <Text style={styles.label}>Passout Year</Text>
                <Button title="Select Passout Year" onPress={() => setOpenDatePicker(true)} />
                <DatePicker
                  modal
                  open={openDatePicker}
                  date={passoutYear} // Use the passoutYear state
                  onConfirm={(date) => {
                    setOpenDatePicker(false);
                    setPassoutYear(date);
                  }}
                  onCancel={() => {
                    setOpenDatePicker(false);
                  }}
                  mode="date" // You can customize this as needed, e.g., to 'year' if supported
                />
              {!validateEmail(collegeEmail) && collegeEmail && <Text style={styles.validationText}>Invalid Email</Text>}
              <AppTextInput 
                placeholder="Password"
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
              />
              {passwordError !== '' && <Text style={styles.validationText}>{passwordError}</Text>}
              <AppTextInput 
                placeholder="Confirm Password"
                onChangeText={handleConfirmPasswordChange}
                value={confirmPassword}
                secureTextEntry={true}
              />
              {!passwordMatch && confirmPassword && <Text style={styles.noMatchText}>Passwords do not match</Text>}
            </View>
            
            <TouchableOpacity
              onPress={handleSignUp}
              style={styles.signUpButton}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={styles.loginLink}
            >
              <Text style={styles.loginText}>Already have an account</Text>
            </TouchableOpacity>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: Spacing * 2,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontSize: responsiveFontSize(3.8),
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginBottom: Spacing * 1.2,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: responsiveFontSize(2),
    maxWidth: responsiveWidth(85),
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: Spacing * 4,
  },
  form: {
    marginTop: Spacing ,
    marginBottom: Spacing * 3,
  },
  validationText: {
    fontSize: responsiveFontSize(1.6),
    color: 'red',
    marginTop: Spacing * -0.8 ,
    marginBottom: Spacing * 0.75,
  },
  branchvalidationText: {
    fontSize: responsiveFontSize(1.6),
    color: 'red',
    marginBottom: Spacing * -0.5,
  },
  noMatchText: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    marginTop: Spacing * -0.8 ,
    marginBottom: Spacing * 0.75,
  },
  signUpButton: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 0.5,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: responsiveFontSize(2),
  },
  loginLink: {
    padding: Spacing,
  },
  loginText: {
    fontFamily: Font["poppins-semiBold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: responsiveFontSize(1.6),
  },
  datePickerStyle: {
    width: responsiveWidth(90),
    marginTop: Spacing,
  },
  label: {
    fontSize: responsiveFontSize(2),
    color: Colors.text,
    marginBottom: Spacing,
  },
  Branch: {
    padding: Spacing * -0.1,
    paddingHorizontal: responsiveWidth(0.3)
  }
});



export default Register;

















// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ToastAndroid, ScrollView } from "react-native";
// import AppTextInput from "../../components/RegisterTextInuput";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";
// import { SelectList } from "react-native-dropdown-select-list";


// const Register = ({ navigation: { navigate } }) => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [personalEmail, setPersonalEmail] = useState('');
//     const [collegeEmail, setCollegeEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [passwordMatch, setPasswordMatch] = useState(false);
//     const [passwordError, setPasswordError] = useState('');
//     const [selectedBranch, setSelectedBranch] = useState(null); // State to track selected branch
//     const [branchError, setBranchError] = useState(false); // State to track branch error message

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const validatePassword = (password) => {
//         // Password should contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//         return passwordRegex.test(password);
//     };

//     const handlePasswordChange = (text) => {
//         setPassword(text);
//         if (!validatePassword(text)) {
//             setPasswordError('Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit');
//         } else {
//             setPasswordError('');
//         }
//     };

//     const handleConfirmPasswordChange = (text) => {
//         setConfirmPassword(text);
//         if (password && text === password) {
//             setPasswordMatch(true);
//         } else {
//             setPasswordMatch(false);
//         }
//     };

//     const handleBranchSelect = (branch) => {
//         setSelectedBranch(branch);
//         setBranchError(false); // Clear branch error when branch is selected
//     };

//     const handleSignUp = () => {
//         const isPersonalEmailValid = validateEmail(personalEmail);
//         const isCollegeEmailValid = validateEmail(collegeEmail);

//         if (isPersonalEmailValid && isCollegeEmailValid && passwordMatch && selectedBranch) {
//             // Perform signup action
//             ToastAndroid.show("Sign Up Successful", ToastAndroid.SHORT);
//             setTimeout(() => {
//                 navigate("Login");
//             }, 2000);
//         } else {
//             if (!selectedBranch) {
//                 setBranchError(true); // Show branch selection error
//             }
//         }
//     };

//     const data = [
//       {key:'1', value:'A'},
//       {key:'2', value:'B'},
//       {key:'3', value:'C'},
//       {key:'4', value:'D'},
//       {key:'5', value:'E'},
//       {key:'6', value:'F'},
//       {key:'7', value:'G'},
//     ];

//     return(
//         <SafeAreaView>
//           <ScrollView contentContainerStyle={styles.scrollView}>
//             <View style={styles.container}>
//               <View style={styles.header}>
//                 <Text style={styles.headerText}>Create Account</Text>
//                 <Text style={styles.subHeaderText}>Create an account so you can explore all the existing jobs !!</Text>
//               </View>
//               <View style={styles.Branch}>
//                 <SelectList
//                     data={data}
//                     setSelected={handleBranchSelect} // Pass the handler function to handle branch selection
//                     placeholder="Select Branch"
//                 />
//                 {branchError && <Text style={styles.branchvalidationText}>Branch selection is required</Text>}
//               </View>
//               <View style={styles.form}>
//                 <AppTextInput 
//                   placeholder="First Name"
//                   onChangeText={text => setFirstName(text.replace(/[^a-zA-Z]/g, ''))}
//                   value={firstName}
//                 />
//                 <AppTextInput 
//                   placeholder="Last Name"
//                   onChangeText={text => setLastName(text.replace(/[^a-zA-Z]/g, ''))}
//                   value={lastName}
//                 />
//                 <AppTextInput 
//                   placeholder="Personal Email-Id"
//                   onChangeText={text => setPersonalEmail(text)}
//                   value={personalEmail}
//                 />
//                 {!validateEmail(personalEmail) && personalEmail && <Text style={styles.validationText}>Invalid Email</Text>}
//                 <AppTextInput 
//                   placeholder="College Email-Id"
//                   onChangeText={text => setCollegeEmail(text)}
//                   value={collegeEmail}
//                 />
//                 {!validateEmail(collegeEmail) && collegeEmail && <Text style={styles.validationText}>Invalid Email</Text>}
//                 <AppTextInput 
//                   placeholder="Password"
//                   onChangeText={handlePasswordChange}
//                   value={password}
//                   secureTextEntry={true}
//                 />
//                 {passwordError !== '' && <Text style={styles.validationText}>{passwordError}</Text>}
//                 <AppTextInput 
//                   placeholder="Confirm Password"
//                   onChangeText={handleConfirmPasswordChange}
//                   value={confirmPassword}
//                   secureTextEntry={true}
//                 />
//                 {!passwordMatch && confirmPassword && <Text style={styles.noMatchText}>Passwords do not match</Text>}
                
//               </View>
              
//               <TouchableOpacity
//                 onPress={handleSignUp}
//                 style={styles.signUpButton}
//               >
//                 <Text style={styles.buttonText}>Sign Up</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigate("Login")}
//                 style={styles.loginLink}
//               >
//                 <Text style={styles.loginText}>Already have an account</Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     padding: Spacing * 2,
//   },
//   header: {
//     alignItems: "center",
//   },
//   headerText: {
//     fontSize: FontSize.xxLarge,
//     color: Colors.primary,
//     fontFamily: Font["poppins-bold"],
//     marginTop: Spacing * 2,
//     marginBottom: Spacing * 1.2,
//     fontWeight: 'bold',
//   },
//   subHeaderText: {
//     fontFamily: Font["poppins-semiBold"],
//     fontSize: FontSize.medium,
//     maxWidth: "85%",
//     textAlign: "center",
//     fontWeight: 'bold',
//     marginBottom: Spacing * 4,
//   },
//   form: {
//     marginTop: Spacing ,
//     marginBottom: Spacing * 3,
//   },
//   validationText: {
//     fontSize: Spacing * 1.21,
//     color: 'red',
//     marginTop: Spacing * -0.8 ,
//     marginBottom: Spacing * 0.75,
//   },
//   branchvalidationText: {
//     fontSize: Spacing * 1.21,
//     color: 'red',
//     marginBottom: Spacing * -0.5,
//   },
//   noMatchText: {
//     color: 'red',
//     fontSize: Spacing * 1.21,
//     marginTop: Spacing * -0.8 ,
//     marginBottom: Spacing * 0.75,
//   },
//   signUpButton: {
//     padding: Spacing * 2,
//     backgroundColor: Colors.primary,
//     marginVertical: Spacing * 0.5,
//     borderRadius: Spacing,
//     shadowColor: Colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: Spacing,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: Spacing,
//   },
//   buttonText: {
//     fontFamily: Font["poppins-bold"],
//     color: Colors.onPrimary,
//     textAlign: "center",
//     fontSize: FontSize.large,
//   },
//   loginLink: {
//     padding: Spacing,
//   },
//   loginText: {
//     fontFamily: Font["poppins-semiBold"],
//     color: Colors.text,
//     textAlign: "center",
//     fontSize: FontSize.small,
//   },
//   Branch: {
//     padding: Spacing * -0.1,
//     marginHorizontal: 1.8
//   }
// });

// export default Register;


import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { ResumeContext } from './ResumeContext';
import Colors from "../../../constants/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const DynamicEducationInputs = ({ educationType, educationIndex }) => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [uploadedImages, setUploadedImages] = useState({});
  const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
  const [openToDatePicker, setOpenToDatePicker] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  // Function to handle image upload and text extraction
  const handleUpload = async (semester) => {
    try {
      // 1. Select image using image picker
      const result = await launchImageLibrary({ mediaType: 'photo' });

      if (result.cancelled) {
        return; // Handle cancellation
      }

      const token = await SecureStore.getItemAsync('jwtToken'); // Get JWT token

      // 2. Upload image to your backend
      const formData = new FormData();
      formData.append('form-data', {
        uri: result.assets[0].uri,
        name: 'image.jpg', // Adjust filename and type as needed
        type: 'image/jpeg',
      });

      const uploadResponse = await axios.post(
        'http://192.168.29.209:8080/student/extract/image-data',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 3. Extract text from response
      console.log(uploadResponse.data);
      const extractedText = uploadResponse.data;

      // 4. Update state with extracted text and image URI
      setUploadedImages(prevImages => ({
        ...prevImages,
        [semester]: result.assets[0].uri,
        [`${semester}Text`]: extractedText,
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle upload errors
    }
  };

  // Function to handle changes in input fields
  const handleChange = (value, field) => {
    const updatedEducation = [...resumeData.education]; // Get from context
    updatedEducation[educationIndex][field] = value;
    updateResumeData({ education: updatedEducation }); 
  };

  // Function to render different input fields based on education type
  const renderInputs = () => {
    switch (educationType) {
      case 'tenth':
        return (
          <View>
            <Text style={styles.inputLabel}>School/Board Name:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].institution}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Year of Passing:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].passingyear}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].percentage}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}
          </View>
        );
      case 'twelfth':
        return (
          <View>
            <Text style={styles.inputLabel}>School/Board Name:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].institution}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Year of Passing 12:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].passingyear}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].percentage}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}
          </View>
        );
      case 'diploma':
        return (
          <View>
            <Text style={styles.inputLabel}>Institute Name:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].institution}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Branch/Specialization:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].degree}
              onChangeText={(text) => handleChange(text, 'degree')}
            />
            <Text style={styles.inputLabel}>Year of Completion:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].passingyear}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].percentage}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}
          </View>
        );
      case 'degree':
        return (
          <View>
            <Text style={styles.inputLabel}>College/University Name:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].institution}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Major/Degree:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].degree}
              onChangeText={(text) => handleChange(text, 'degree')}
            />
            <Text style={styles.inputLabel}>Graduation Year:</Text>
            <TextInput
              style={styles.inputField}
              value={resumeData.education[educationIndex].passingyear}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.semesterCGPA?.map((cgpa, index) => (
              <View key={index} style={styles.semesterContainer}>
                <Text style={styles.semesterText}>{`Sem ${index + 1} CGPA:`}</Text>
                <View style={styles.readOnlyInput}>
                  <Text>{cgpa}</Text>
                </View>
                <TouchableOpacity onPress={() => handleUpload(`Sem ${index + 1}`)}>
                  {uploadedImages[`Sem ${index + 1}`] && (
                    <Image
                      source={{ uri: uploadedImages[`Sem ${index + 1}`] }}
                      style={{ width: 50, height: 50 }}
                    />
                  )}
                  <Icon name="upload" size={24} color={Colors.dark} />
                </TouchableOpacity>
              </View>
            ))}
            <View style={styles.line}></View>
            <View style={styles.aggregateContainer}>
              <Text style={styles.AggsemesterText}>Aggregate CGPA:</Text>
              <View style={styles.AggreadOnlyInput}>
                <Text style={styles.AggCGPAText}>
                  {resumeData.education[educationIndex]?.aggregateCGPA || ''}
                </Text>
              </View>
            </View>
          </View>
        );
      default:
        return <Text>Please select an education type.</Text>;
    }
  };

  return <View>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  readOnlyInput: {
    backgroundColor: Colors.lightPrimary,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  AggreadOnlyInput: {
    backgroundColor: Colors.lightPrimary,
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  semesterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  semesterText: {
    flex: 1,
  },
  AggsemesterText: {
    flex: 1,
    fontSize: 14.5,
    fontWeight: 'bold',
  },
  AggCGPAText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  aggregateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
});

// export default DynamicEducationInputs;



import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { ResumeContext } from './ResumeContext';

const BasicInfoForm = ({ onSubmit, onCancel }) => {
    const { resumeData, updateResumeData } = useContext(ResumeContext);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [branch, setBranch] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (resumeData && !isDataLoaded) {
            setName(resumeData.name);
            setEmail(resumeData.email);
            setPhone(resumeData.phoneNumber);
            setBranch(resumeData.branch);
            setAddress(resumeData.address);
            setIsDataLoaded(true);
        }
    }, [resumeData, isDataLoaded]);

    const handleChange = (text, field) => {
        switch(field) {
            case 'name':
                setName(text);
                break;
            case 'email':
                setEmail(text);
                break;
            case 'phoneNumber':
                setPhone(text);
                break;
            case 'branch':
                setBranch(text);
                break;
            case 'address':
                setAddress(text);
                break;
        }
        updateResumeData({ [field]: text });
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => handleChange(text, 'name')}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => handleChange(text, 'email')}
            />
            <Text style={styles.label}>Phone No.</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone No."
                value={phone}
                onChangeText={(text) => handleChange(text, 'phoneNumber')}
            />
            <Text style={styles.label}>Branch</Text>
            <TextInput
                style={styles.input}
                placeholder="Branch"
                value={branch}
                onChangeText={(text) => handleChange(text, 'branch')}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={(text) => handleChange(text, 'address')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default BasicInfoForm;




import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ResumeContext } from './ResumeContext';

const CertificationDetailForm = () => {
    const { resumeData, updateResumeData } = useContext(ResumeContext);
    const [certifications, setCertifications] = useState([]);
    const [title, setTitle] = useState('');
    const [issuer, setIssuer] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (resumeData && resumeData.certifications) {
            setCertifications(resumeData.certifications);
        }
    }, [resumeData]);

    const handleAddCertification = () => {
        const newCertification = { title, issuer, date };
        const updatedCertifications = [...certifications, newCertification];
        setCertifications(updatedCertifications);
        updateResumeData({ certifications: updatedCertifications });
        setTitle('');
        setIssuer('');
        setDate('');
    };

    const handleRemoveCertification = (index) => {
        const updatedCertifications = certifications.filter((_, i) => i !== index);
        setCertifications(updatedCertifications);
        updateResumeData({ certifications: updatedCertifications });
    };

    const renderCertification = ({ item, index }) => (
        <View style={styles.certificationContainer}>
            <Text style={styles.certificationText}>{item.title}</Text>
            <Text style={styles.certificationText}>{item.issuer}</Text>
            <Text style={styles.certificationText}>{item.date}</Text>
            <TouchableOpacity onPress={() => handleRemoveCertification(index)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Certification Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Issuer</Text>
            <TextInput
                style={styles.input}
                placeholder="Issuer"
                value={issuer}
                onChangeText={(text) => setIssuer(text)}
            />
            <Text style={styles.label}>Date</Text>
            <TextInput
                style={styles.input}
                placeholder="Date"
                value={date}
                onChangeText={(text) => setDate(text)}
            />
            <Button title="Add Certification" onPress={handleAddCertification} />

            <FlatList
                data={certifications}
                renderItem={renderCertification}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.certificationList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    certificationContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    certificationText: {
        marginBottom: 5,
    },
    removeButton: {
        marginTop: 5,
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    certificationList: {
        marginTop: 10,
    },
});

export default CertificationDetailForm;

