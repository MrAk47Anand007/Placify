import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, ToastAndroid } from "react-native";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const EmailVerification = ({ navigation: { navigate } }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputsRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input box when the component mounts
    otpInputsRefs.current[0]?.focus();
  }, []);

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input box if value is entered
    if (value && index < 3) {
      otpInputsRefs.current[index + 1]?.focus();
    }
  };

  const handleResend = () => {
    ToastAndroid.show("Code sent again", ToastAndroid.SHORT);
    // Add logic to resend code here
  };

  const verifyOTP = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP.length === 4) {
      navigate("ResetPassword");
    } else {
      ToastAndroid.show("Enter OTP", ToastAndroid.SHORT);
    }
  };

  const otpInputs = otp.map((digit, index) => (
    <TextInput
      key={index}
      style={[styles.otpInput, index > 0 ? styles.inputWithMargin : null]} // added margin
      maxLength={1}
      keyboardType="numeric"
      onChangeText={(value) => handleOTPChange(index, value)}
      value={digit}
      ref={(ref) => (otpInputsRefs.current[index] = ref)}
    />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Email Verification</Text>
            <Text style={styles.subtitle}>
              Please enter the 4 digit code that is sent to your email address...
            </Text>
          </View>
          <View style={styles.otpContainer}>{otpInputs}</View>
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>if you don't receive code ! </Text>
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendLink}>Resend</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={verifyOTP} // changed onPress handler
            style={styles.button}
          >
            <Text style={styles.buttonText}>Verify & Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    padding: Spacing,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: Spacing * 3,
  },
  title: {
    fontSize: responsiveFontSize(4),
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    fontWeight: "bold",
    marginBottom: Spacing * 3,
  },
  subtitle: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.medium,
    paddingHorizontal: Spacing * 4,
    textAlign: "center",
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing * 2,
  },
  otpInput: {
    width: responsiveWidth(12), // adjust the width as needed
    height: responsiveWidth(12), // make height same as width
    fontSize: responsiveFontSize(2), // adjust font size as needed
    textAlign: "center",
    borderColor: Colors.darkText,
    borderWidth: 1.5,
    borderRadius: Spacing * 2, // adjust border radius as needed
    backgroundColor: Colors.lightPrimary,
  },
  inputWithMargin: {
    marginLeft: Spacing, // added margin
  },
  button: {
    paddingVertical: Spacing * 2,
    paddingHorizontal: Spacing * 5.2,
    backgroundColor: Colors.primary,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
    marginTop: Spacing * 2, // moved below the resend text
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: responsiveFontSize(2),
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: Spacing,
  },
  resendText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.medium,
  },
  resendLink: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});

export default EmailVerification;



















// import React, { useState, useRef, useEffect } from "react";
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, ToastAndroid } from "react-native";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";
// import FontSize from "../../constants/FontSize";
// import Spacing from "../../constants/Spacing";
// import { responsiveFontSize } from 'react-native-responsive-dimensions';

// const EmailVerification = ({ navigation: { navigate } }) => {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const otpInputsRefs = useRef([]);

//   useEffect(() => {
//     // Focus on the first input box when the component mounts
//     otpInputsRefs.current[0]?.focus();
//   }, []);

//   const handleOTPChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move focus to the next input box if value is entered
//     if (value && index < 3) {
//       otpInputsRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleResend = () => {
//     ToastAndroid.show("Code sent again", ToastAndroid.SHORT);
//     // Add logic to resend code here
//   };

//   const verifyOTP = () => {
//     const enteredOTP = otp.join('');
//     if (enteredOTP.length === 4) {
//       navigate("ResetPassword");
//     } else {
//       ToastAndroid.show("Enter OTP", ToastAndroid.SHORT);
//     }
//   };

//   const otpInputs = otp.map((digit, index) => (
//     <TextInput
//       key={index}
//       style={[styles.otpInput, index > 0 ? styles.inputWithMargin : null]} // added margin
//       maxLength={1}
//       keyboardType="numeric"
//       onChangeText={(value) => handleOTPChange(index, value)}
//       value={digit}
//       ref={(ref) => (otpInputsRefs.current[index] = ref)}
//     />
//   ));

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.content}>
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>Email Verification</Text>
//             <Text style={styles.subtitle}>
//               Please enter the 4 digit code that is sent to your email address...
//             </Text>
//           </View>
//           <View style={styles.otpContainer}>{otpInputs}</View>
//           <View style={styles.resendContainer}>
//             <Text style={styles.resendText}>if you don't receive code ! </Text>
//             <TouchableOpacity onPress={handleResend}>
//               <Text style={styles.resendLink}>Resend</Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity
//             onPress={verifyOTP} // changed onPress handler
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Verify & Proceed</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   content: {
//     padding: Spacing * 2,
//     alignItems: "center",
//   },
//   titleContainer: {
//     alignItems: "center",
//     marginBottom: Spacing * 3,
//   },
//   title: {
//     fontSize: responsiveFontSize(4),
//     color: Colors.primary,
//     fontFamily: Font["poppins-bold"],
//     fontWeight: "bold",
//     marginBottom: Spacing * 3,
//   },
//   subtitle: {
//     fontFamily: Font["poppins-semiBold"],
//     fontSize: FontSize.medium,
//     paddingHorizontal: Spacing * 4,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   otpContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: Spacing * 2,
//   },
//   otpInput: {
//     width: 55,
//     height: 55,
//     fontSize: FontSize.large,
//     textAlign: "center",
//     borderColor: Colors.darkText,
//     borderWidth: 1.5,
//     borderRadius: 15,
//     backgroundColor: Colors.lightPrimary,
//   },
//   inputWithMargin: {
//     marginLeft: Spacing, // added margin
//   },
//   button: {
//     paddingVertical: Spacing * 2,
//     paddingHorizontal: Spacing * 4,
//     backgroundColor: Colors.primary,
//     borderRadius: Spacing,
//     shadowColor: Colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: Spacing,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: Spacing,
//     marginTop: Spacing * 2, // moved below the resend text
//   },
//   buttonText: {
//     fontFamily: Font["poppins-bold"],
//     color: Colors.onPrimary,
//     textAlign: "center",
//     fontSize: FontSize.large,
//   },
//   resendContainer: {
//     flexDirection: "row",
//     marginTop: Spacing,
//   },
//   resendText: {
//     fontFamily: Font["poppins-semiBold"],
//     fontSize: FontSize.medium,
//   },
//   resendLink: {
//     color: Colors.primary,
//     textDecorationLine: "underline",
//   },
// });

// export default EmailVerification;

