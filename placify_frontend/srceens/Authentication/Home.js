import React, { useState, useEffect, useRef } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Animated, Text, TouchableOpacity, View } from "react-native";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const Home = ({ navigation }) => {
    const { navigate } = navigation;
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Animated.View style={{ opacity: fadeAnim }}>
                <ImageBackground
                    style={{
                        marginTop: responsiveHeight(4),
                        height: responsiveHeight(50), // Adjusted for responsiveness
                    }}
                    resizeMode="contain"
                    source={require("../../assets/images/welcome-img.png")}
                />
                <View
                    style={{
                        paddingHorizontal: Spacing * 4,
                        paddingTop: Spacing * 3,
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xxLarge,
                            color: Colors.primary,
                            fontFamily: Font["poppins-bold"],
                            textAlign: "center",
                            fontWeight: 'bold',
                        }}
                    >
                        Discover Your
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.xxLarge,
                            color: Colors.primary,
                            fontFamily: Font["poppins-bold"],
                            textAlign: "center",
                            fontWeight: 'bold',
                        }}
                    >
                        Dream Job here
                    </Text>

                    <Text
                        style={{
                            fontSize: FontSize.medium,
                            color: Colors.text,
                            fontFamily: Font["poppins-regular"],
                            textAlign: "center",
                            marginTop: Spacing * 2,
                        }}
                    >
                        Explore all the existing job roles based or your interest and study
                        major
                    </Text>
                </View>
                <View
                    style={{
                        paddingHorizontal: Spacing * 2,
                        paddingTop: Spacing * 6,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigate("Login")}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
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
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate("Register")}
                        style={{
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "48%",
                            borderRadius: Spacing,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: Font["poppins-bold"],
                                color: Colors.text,
                                fontSize: FontSize.large,
                                textAlign: "center",
                            }}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.background,
      }
})

export default Home;











// import React from 'react';
// import {
//     Dimensions,
//     ImageBackground,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//   } from "react-native";
//   import Spacing from "../../constants/Spacing";
//   import FontSize from "../../constants/FontSize";
//   import Colors from "../../constants/Colors";
//   import Font from "../../constants/Font";

// const { height } = Dimensions.get("window");

// const Home = ({navigation}) => {

//     const { navigate } = navigation;

//     return(
//         <SafeAreaView>
//       <View>
//         <ImageBackground
//           style={{
//             marginTop: Spacing * 4,
//             height: height / 2.2,
//           }}
//           resizeMode="contain"
//           source={require("../../assets/images/welcome-img.png")}
//         />
//         <View
//           style={{
//             paddingHorizontal: Spacing * 4,
//             paddingTop: Spacing * 5,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: FontSize.xxLarge,
//               color: Colors.primary,
//               fontFamily: Font["poppins-bold"],
//               textAlign: "center",
//               fontWeight: 'bold',
//             }}
//           >
//             Discover Your
//           </Text>
//           <Text
//             style={{
//               fontSize: FontSize.xxLarge,
//               color: Colors.primary,
//               fontFamily: Font["poppins-bold"],
//               textAlign: "center",
//               fontWeight: 'bold',
//             }}
//           >
//             Dream Job here
//           </Text>

//           <Text
//             style={{
//               fontSize: FontSize.medium,
//               color: Colors.text,
//               fontFamily: Font["poppins-regular"],
//               textAlign: "center",
//               marginTop: Spacing * 2,
//             }}
//           >
//             Explore all the existing job roles based or your interest and study
//             major
//           </Text>
//         </View>
//         <View
//           style={{
//             paddingHorizontal: Spacing * 2,
//             paddingTop: Spacing * 6,
//             flexDirection: "row",
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => navigate("Login")}
//             style={{
//               backgroundColor: Colors.primary,
//               paddingVertical: Spacing * 1.5,
//               paddingHorizontal: Spacing * 2,
//               width: "48%",
//               borderRadius: Spacing,
//               shadowColor: Colors.primary,
//               shadowOffset: {
//                 width: 0,
//                 height: Spacing,
//               },
//               shadowOpacity: 0.3,
//               shadowRadius: Spacing,
//             }}
//           >
//             <Text
//               style={{
//                 fontFamily: Font["poppins-bold"],
//                 color: Colors.onPrimary,
//                 fontSize: FontSize.large,
//                 textAlign: "center",
//               }}
//             >
//               Login
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => navigate("Register")}
//             style={{
//               paddingVertical: Spacing * 1.5,
//               paddingHorizontal: Spacing * 2,
//               width: "48%",
//               borderRadius: Spacing,
//             }}
//           >
//             <Text
//               style={{
//                 fontFamily: Font["poppins-bold"],
//                 color: Colors.text,
//                 fontSize: FontSize.large,
//                 textAlign: "center",
//               }}
//             >
//               Register
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({})

// export default Home;

