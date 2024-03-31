import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from "../constants/Colors.js";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontFamily: Font["poppins-regular"],
          fontSize: responsiveFontSize(1.6), // Adjust multiplier as needed
          padding: Spacing * 2, // Adjust multiplier as needed
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
          borderWidth: responsiveWidth(0.25),
          borderColor: Colors.darkText,
        },
        focused && {
          borderWidth: responsiveWidth(0.7), // Adjust multiplier as needed
          borderColor: Colors.active,
          shadowOffset: { width: responsiveWidth(0.4), height: responsiveHeight(1) }, // Adjust multipliers as needed
          shadowColor: Colors.active,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});









// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native";
// import Colors from "../constants/Colors.js";
// import Font from "../constants/Font";
// import FontSize from "../constants/FontSize";
// import Spacing from "../constants/Spacing";

// const AppTextInput = ({ ...otherProps }) => {
//   const [focused, setFocused] = useState(false);
//   return (
//     <TextInput
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//       placeholderTextColor={Colors.darkText}
//       style={[
//         {
//           fontFamily: Font["poppins-regular"],
//           fontSize: FontSize.small,
//           padding: Spacing * 2,
//           backgroundColor: Colors.lightPrimary,
//           borderRadius: Spacing,
//           marginVertical: Spacing,
//           borderWidth: 0.3,
//           borderColor: Colors.darkText,
//         },
//         focused && {
//           borderWidth: 3,
//           borderColor: Colors.active,
//           shadowOffset: { width: 4, height: Spacing },
//           shadowColor: Colors.active,
//           shadowOpacity: 0.2,
//           shadowRadius: Spacing,
//         },
//       ]}
//       {...otherProps}
//     />
//   );
// };

// export default AppTextInput;

// const styles = StyleSheet.create({});

