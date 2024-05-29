//S_More.js

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LogoutModal from './LogoutModal'; // Import the LogoutModal component

const DrawerPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
  const navigation = useNavigation();

  const handleOptionPress = (screenName) => {
    if (screenName === 'Logout') {
      setIsModalVisible(true); // Show the modal when Logout is pressed
    } else {
      navigation.navigate(screenName);
    }
  };

  const handleLogoutConfirm = () => {
    setIsModalVisible(false);
    // Add your logout logic here
    console.log('User logged out');
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Generate Resume' && styles.selectedOption
        ]}
        onPress={() => handleOptionPress('ResumeScreen')}
        activeOpacity={0.7}
      >
        <FontAwesome name="file-text-o" size={24} color="#555" style={styles.icon} />
        <Text style={styles.optionText}>Generate Resume</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Change Password' && styles.selectedOption
        ]}
        onPress={() => handleOptionPress('Resume')}
        activeOpacity={0.7}
      >
        <FontAwesome name="lock" size={24} color="#555" style={styles.icon} />
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Query Generation' && styles.selectedOption
        ]}
        onPress={() => handleOptionPress('Resume')}
        activeOpacity={0.7}
      >
        <FontAwesome name="search" size={24} color="#555" style={styles.icon} />
        <Text style={styles.optionText}>Query Generation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Support' && styles.selectedOption
        ]}
        onPress={() => handleOptionPress('Resume')}
        activeOpacity={0.7}
      >
        <FontAwesome name="question-circle-o" size={24} color="#555" style={styles.icon} />
        <Text style={styles.optionText}>Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Logout' && styles.selectedOption
        ]}
        onPress={() => handleOptionPress('Logout')}
        activeOpacity={0.7}
      >
        <FontAwesome name="sign-out" size={24} color="#555" style={styles.icon} />
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>

      <LogoutModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onConfirm={handleLogoutConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#e6f7ff',
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