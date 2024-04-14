import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Animated } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { responsiveFontSize } from 'react-native-responsive-dimensions';


const ForgotPassword = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
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

  const handleRecoverPassword = () => {
    validateInputs();
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
      navigate("EmailVerification");
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{ padding: Spacing * 2 }}>
          <Animated.View style={{ alignItems: "center", opacity: fadeAnim }}>
            <Text
              style={{
                fontSize: responsiveFontSize(4),
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                marginBottom: Spacing * 3,
                fontWeight: "bold",
              }}
            >
              Forgot Password
            </Text>
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.medium,
                maxWidth: "70%",
                textAlign: "center",
                marginBottom: Spacing * 2,
                fontWeight: "bold",
              }}
            >
              Enter the email address associated with your account...
            </Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <View>
              <AppTextInput
                placeholder="College Email"
                onChangeText={(text) => setEmail(text)}
                error={emailError}
              />
              {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}
            </View>

            <TouchableOpacity
              onPress={handleRecoverPassword}
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 2.5,
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
                Recover Password
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

export default ForgotPassword;







