import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from "react-native";
import AppTextInput from "../components/RegisterTextInuput";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

const Register = ({ navigation: { navigate } }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [personalEmail, setPersonalEmail] = useState('');
    const [collegeEmail, setCollegeEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [passwordError, setPasswordError] = useState('');

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

    const handleSignUp = () => {
        const isPersonalEmailValid = validateEmail(personalEmail);
        const isCollegeEmailValid = validateEmail(collegeEmail);

        if (isPersonalEmailValid && isCollegeEmailValid && passwordMatch) {
            // Perform signup action
            ToastAndroid.show("Sign Up Successful", ToastAndroid.SHORT);
            setTimeout(() => {
                navigate("Login");
            }, 2000);
        }
    };

    return(
        <SafeAreaView>
          <View
            style={{
              padding: Spacing * 2,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.xxLarge,
                  color: Colors.primary,
                  fontFamily: Font["poppins-bold"],
                  marginTop: Spacing * 2,
                  marginBottom: Spacing * 1.2,
                  fontWeight: 'bold',
                }}
              >
                Create Account
              </Text>
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: FontSize.medium,
                  maxWidth: "85%",
                  textAlign: "center",
                  fontWeight: 'bold',
                }}
              >
                Create an account so you can explore all the existing jobs !!
              </Text>
            </View>
            <View
              style={{
                marginVertical: Spacing * 3,
              }}
            >
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
              style={{
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
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-bold"],
                  color: Colors.onPrimary,
                  textAlign: "center",
                  fontSize: FontSize.large,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                padding: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.text,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
              >
                Already have an account
              </Text>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  validationText: {
    fontSize: Spacing * 1.21,
    color: 'red',
    marginTop: Spacing * -0.8 ,
    marginBottom: Spacing * 0.75,
  },
  noMatchText: {
    color: 'red',
    fontSize: Spacing * 1.21,
    marginTop: Spacing * -0.8 ,
    marginBottom: Spacing * 0.75,
  },
});

export default Register;




















// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
// import AppTextInput from "../components/RegisterTextInuput";
// import Spacing from "../constants/Spacing";
// import FontSize from "../constants/FontSize";
// import Colors from "../constants/Colors";
// import Font from "../constants/Font";


// const Register = ({ navigation: { navigate } }) => {
//     return(
//         <SafeAreaView>
//       <View
//         style={{
//           padding: Spacing * 2,
//         }}
//       >
//         <View
//           style={{
//             alignItems: "center",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: FontSize.xxLarge,
//               color: Colors.primary,
//               fontFamily: Font["poppins-bold"],
//               marginTop: Spacing * 2,
//               marginBottom: Spacing * 2,
//               fontWeight: 'bold',
//             }}
//           >
//             Create account
//           </Text>
//           <Text
//             style={{
//               fontFamily: Font["poppins-semiBold"],
//               fontSize: FontSize.medium,
//               maxWidth: "85%",
//               textAlign: "center",
//               fontWeight: 'bold',
//             }}
//           >
//             Create an account so you can explore all the existing jobs
//           </Text>
//         </View>
//         <View
//           style={{
//             marginVertical: Spacing * 3,
//           }}
//         >
//           <AppTextInput placeholder="First Name" />
//           <AppTextInput placeholder="Last Name" />
//           <AppTextInput placeholder="Personal Email-Id" />
//           <AppTextInput placeholder="College Email-Id" />
//           <AppTextInput placeholder="Password" secureTextEntry={true}/>
//           <AppTextInput placeholder="Confirm Password" secureTextEntry={true}/>
//         </View>

//         <TouchableOpacity
//           onPress={() => navigate("Login")}
//           style={{
//             padding: Spacing * 2,
//             backgroundColor: Colors.primary,
//             marginVertical: Spacing * 2,
//             borderRadius: Spacing,
//             shadowColor: Colors.primary,
//             shadowOffset: {
//               width: 0,
//               height: Spacing,
//             },
//             shadowOpacity: 0.3,
//             shadowRadius: Spacing,
//           }}
//         >
//           <Text
//             style={{
//               fontFamily: Font["poppins-bold"],
//               color: Colors.onPrimary,
//               textAlign: "center",
//               fontSize: FontSize.large,
//             }}
//           >
//             Sign Up
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigate("Login")}
//           style={{
//             padding: Spacing,
//           }}
//         >
//           <Text
//             style={{
//               fontFamily: Font["poppins-semiBold"],
//               color: Colors.text,
//               textAlign: "center",
//               fontSize: FontSize.small,
//             }}
//           >
//             Already have an account
//           </Text>
//         </TouchableOpacity>

//       </View>
//     </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({})

// export default Register;
