import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/RegisterTextInuput";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";


const Register = ({ navigation: { navigate } }) => {
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
              marginBottom: Spacing * 2,
              fontWeight: 'bold',
            }}
          >
            Create account
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
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="First Name" />
          <AppTextInput placeholder="Last Name" />
          <AppTextInput placeholder="Personal Email-Id" />
          <AppTextInput placeholder="College Email-Id" />
          <AppTextInput placeholder="Password" secureTextEntry={true}/>
          <AppTextInput placeholder="Confirm Password" secureTextEntry={true}/>
        </View>

        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 2,
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

const styles = StyleSheet.create({})

export default Register;
