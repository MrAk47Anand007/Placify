// DrawerPage.js

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const DrawerPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object

  const options = [
    { name: 'Resume', icon: 'file-text-o', screen: 'ResumeScreen' },
    { name: 'Change Password', icon: 'lock', screen: 'Resume' },
    { name: 'Query Generation', icon: 'search', screen: 'Resume' },
    { name: 'Support', icon: 'question-circle-o', screen: 'Resume' },
    { name: 'Logout', icon: 'sign-out', screen: 'Resume' },
  ];

  const handleOptionPress = (screenName) => {
    navigation.navigate(screenName); // Use navigation object to navigate to the screen
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option.name && styles.selectedOption
          ]}
          onPress={() => handleOptionPress(option.screen)}
          activeOpacity={0.7}
        >
          <FontAwesome name={option.icon} size={24} color="#555" style={styles.icon} />
          <Text style={styles.optionText}>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 50,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: '#e6f7ff', // Light blue background color when option is selected
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default DrawerPage;
