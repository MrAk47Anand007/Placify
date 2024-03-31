// Reset Password
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, Animated, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const ResetPassword = ({ navigation: { navigate } }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
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
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");
    setConfirmPasswordError("");
    navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Animated.View style={{ padding: Spacing * 2, opacity: fadeAnim }}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(4),
                  color: Colors.primary,
                  fontFamily: Font["poppins-bold"],
                  marginBottom: Spacing * 3,
                  fontWeight: "bold",
                }}
              >
                Reset Password
              </Text>
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: FontSize.medium,
                  maxWidth: "65%",
                  textAlign: "center",
                  marginBottom: Spacing * 2,
                  fontWeight: "bold",
                }}
              >
                Enter your new password and confirm it once...
              </Text>
            </View>
            <View>
              <AppTextInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                error={passwordError}
              />
              {passwordError ? <Text style={{ color: "red" }}>{passwordError}</Text> : null}
              <AppTextInput
                placeholder="Confirm Password"
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
                error={confirmPasswordError}
              />
              {confirmPasswordError ? <Text style={{ color: "red" }}>{confirmPasswordError}</Text> : null}
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
                Continue
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default ResetPassword;

