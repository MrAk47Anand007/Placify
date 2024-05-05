
// Login file

import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ToastAndroid, Animated, ScrollView,Alert} from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';



const Login = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
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

  const handleSignup = async () => {
    validateInputs(); 
  
    try {
      const response = await axios.post('http://192.168.29.209:8080/auth/login', {
        username: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200 && response.data) {
        // Extract JWT and student ID
        const jwtToken = response.data.token; // Assuming 'jwt' is the key for the token
        const studentId = response.data.student_id; // Assuming 'studentId' is the key
        console.log("Student ID:", studentId);
        console.log("Token:", jwtToken)
        const studentIdString = studentId.toString();
  
        // Store securely
        await SecureStore.setItemAsync('jwtToken', jwtToken);
        await SecureStore.setItemAsync('studentId',studentIdString);
  
        console.log('JWT Token and student ID stored successfully');
        ToastAndroid.show("Sign in successful", ToastAndroid.SHORT);
        navigate('StuAppTabs');
      } else {
        // Handle API errors
        let errorMessage = "Login failed";
        if (response.status === 401) {
          errorMessage = "Incorrect username or password";
        } else if (response.data.error || response.data.message) {
          errorMessage = response.data.error || response.data.message;
        } else {
          errorMessage = "An error occurred. Status code: " + response.status;
          Alert.alert('Login Response', JSON.stringify(response.data, null, 2)); 
        }
        Alert.alert('Error', errorMessage); 
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      console.log('Request Details:', error.request); 
      console.log('Response Details:', error.response);
  
      let errorMessage = 'An error occurred during login. Please try again later.';
      if (error.response && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      Alert.alert('Error', errorMessage);
    }
  };
  
  

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit");
    } else {
      setPasswordError("");
    }

    if (emailRegex.test(email) && passwordRegex.test(password)) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }

   
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{ padding: Spacing * 2 }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                marginBottom: Spacing * 3,
                fontWeight: "bold",
              }}
            >
              Login here
            </Text>
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: responsiveFontSize(2),
                maxWidth: responsiveWidth(60),
                textAlign: "center",
                fontWeight: 'bold',
                marginBottom: Spacing * 1.5,
              }}
            >
              Welcome back you have been missed!
            </Text>
          </View>
          <View style={{ marginTop: Spacing * 3, marginBottom: Spacing * 2 }}>
            <AppTextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              error={emailError}
            />
            {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}
            <AppTextInput
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              error={passwordError}
            />
            {passwordError ? <Text style={{ color: "red" }}>{passwordError}</Text> : null}
          </View>
          <TouchableOpacity
            onPress={() => navigate("ForgotPassword")}
            style={{
              padding: Spacing,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: FontSize.small,
                  color: Colors.primary,
                  alignSelf: "flex-end",
                }}
              >
                Forgot your password ?
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSignup}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
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
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Register")}
            style={{
              padding: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
                textAlign: "center",
                fontSize: responsiveFontSize(1.6),
              }}
            >
              Create new account
            </Text>
          </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
  }
});

export default Login;

