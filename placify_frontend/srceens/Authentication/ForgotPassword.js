import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ToastAndroid, ScrollView} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const ForgotPassword = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');

  const handleSendPasswordReset = async () => {
    // Implement password reset logic here
    // This might involve calling an API to send a reset link
    console.log('Sending password reset email to:', email);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Forgot Password</Text>
      <Text>Enter the email address associated with your account</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{ width: '80%', height: 40, borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button 
        title="Recover Password" onPress={handleSendPasswordReset} 
      />

<TouchableOpacity
          onPress={() => navigate("EmailVerification")}
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
    </View>
  );
};

export default ForgotPassword;















// Login file
// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ToastAndroid, ScrollView} from "react-native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
// import AppTextInput from "../../components/AppTextInput";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";


// const Login = ({ navigation: { navigate } }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   const handleSignup = () => {
//     validateInputs();
//   };

//   const validateInputs = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

//     if (!emailRegex.test(email)) {
//       setEmailError("Invalid email");
//     } else {
//       setEmailError("");
//     }

//     if (!passwordRegex.test(password)) {
//       setPasswordError("Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit");
//     } else {
//       setPasswordError("");
//     }

//     if (emailRegex.test(email) && passwordRegex.test(password)) {
//       setLoginSuccess(true);
//     } else {
//       setLoginSuccess(false);
//     }

//     if (emailRegex.test(email) && passwordRegex.test(password)) {
//       ToastAndroid.show("Sign in successful", ToastAndroid.SHORT);
//       // Redirect to another screen if needed
//       // navigate("Home");
//     }
//   };

//   return (
//     <SafeAreaView>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//       <View style={{ padding: Spacing * 2 }}>
//         <View style={{ alignItems: "center" }}>
//           <Text
//             style={{
//               fontSize: FontSize.xxLarge,
//               color: Colors.primary,
//               fontFamily: Font["poppins-bold"],
//               marginTop: Spacing * 8,
//               marginBottom: Spacing * 3,
//               fontWeight: "bold",
//             }}
//           >
//             Forgot Password
//           </Text>
//           <Text
//             style={{
//               fontFamily: Font["poppins-semiBold"],
//               fontSize: FontSize.large,
//               maxWidth: "60%",
//               textAlign: "center",
//               // fontWeight: "bold",
//               marginBottom: Spacing * 1.5,
//             }}
//           >
//             Welcome back you have been missed!
//           </Text>
//         </View>
//         <View style={{ marginVertical: Spacing * 3 }}>
//           <AppTextInput
//             placeholder="Email"
//             onChangeText={(text) => setEmail(text)}
//             error={emailError}
//           />
//           {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}
//           <AppTextInput
//             placeholder="Password"
//             secureTextEntry={true}
//             onChangeText={(text) => setPassword(text)}
//             error={passwordError}
//           />
//           {passwordError ? <Text style={{ color: "red" }}>{passwordError}</Text> : null}
//         </View>

//         <View>
//           <Text
//             style={{
//               fontFamily: Font["poppins-semiBold"],
//               fontSize: FontSize.small,
//               color: Colors.primary,
//               alignSelf: "flex-end",
//             }}
//           >
//             Forgot your password ?
//           </Text>
//         </View>

//         <TouchableOpacity
//           onPress={handleSignup}
//           style={{
//             padding: Spacing * 2,
//             backgroundColor: Colors.primary,
//             marginVertical: Spacing * 3,
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
//             Sign in
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigate("Register")}
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
//             Create new account
//           </Text>
//         </TouchableOpacity>

//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
// });

// export default Login;
