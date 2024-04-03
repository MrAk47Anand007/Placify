import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const S_Dashboard = ({ navigation }) => {

  const handleLeftBoxPress = () => {
    // Navigate to the left box's screen
    // navigation.navigate('LeftBoxScreen');
  };

  const handleRightBoxPress = () => {
    // Navigate to the right box's screen
    // navigation.navigate('RightBoxScreen');
  };

  return (
     <View style = {styles.container}>
        <View style={styles.circle}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300' }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.boxContainer}>
          <TouchableOpacity onPress={handleLeftBoxPress} style={styles.box}>
            <Text style={styles.boxText}>Left Box</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRightBoxPress} style={styles.box}>
            <Text style={styles.boxText}>Right Box</Text>
          </TouchableOpacity>
        </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '18%',
    backgroundColor: Colors.background,
  },
  circle: {
    width: Spacing * 36,
    height: Spacing * 36,
    borderRadius: Spacing * 18,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    marginBottom: Spacing * 4,
  },
  profileImage: {
    width: '93%',
    height: '93%',
    borderRadius: 180,
  },
  boxContainer: {
    marginTop: Spacing * 2,
    flexDirection: 'row',
    justifyContent: 'center', // Adjust as needed
    width: '90%',
    marginBottom: Spacing * 2,
  },
  box: {
    flex: 1,
    height: Spacing * 31,
    backgroundColor: Colors.shadePrimary,
    borderRadius: Spacing * 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    marginLeft: Spacing, // Add some margin to the left of the box
    marginRight: Spacing, // Add some margin to the right of the box
  },
  boxText: {
    color: Colors.white,
    fontSize: FontSize.medium,
    fontFamily: Font.bold,
  },
});

export default S_Dashboard;
