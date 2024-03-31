import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Animated, TouchableOpacity, View, ToastAndroid, ScrollView } from "react-native";
import AppTextInput from "../../components/RegisterTextInuput";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { SelectList } from "react-native-dropdown-select-list";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

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

    const handleSignUp = () => {
        const isPersonalEmailValid = validateEmail(personalEmail);
        const isCollegeEmailValid = validateEmail(collegeEmail);

        if (isPersonalEmailValid && isCollegeEmailValid && passwordMatch && selectedBranch) {
            // Perform signup action
            ToastAndroid.show("Sign Up Successful", ToastAndroid.SHORT);
            setTimeout(() => {
                navigate("Login");
            }, 2000);
        } else {
            if (!selectedBranch) {
                setBranchError(true); // Show branch selection error
            }
        }
    };

    const data = [
      {key:'1', value:'A'},
      {key:'2', value:'B'},
      {key:'3', value:'C'},
      {key:'4', value:'D'},
      {key:'5', value:'E'},
      {key:'6', value:'F'},
      {key:'7', value:'G'},
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

