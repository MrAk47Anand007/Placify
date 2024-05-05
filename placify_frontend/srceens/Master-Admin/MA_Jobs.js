import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Modal, TextInput, Button, Animated } from 'react-native';
import Colors from "../../constants/Colors";
import Spacing from '../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// Alias the components when importing
const Icon = {
  AntDesign: AntDesignIcon,
};

// Dummy data for job listings
const jobListings = [
  { id: '1', title: 'Amazon', logo: require('../../assets/images/amazonlogo.png') },
  { id: '2', title: 'Google', logo: require('../../assets/images/googlelogo.png') },
  { id: '3', title: 'TATA Motors', logo: require('../../assets/images/Tatalogo.png') },
  { id: '4', title: 'Volvo', logo: require('../../assets/images/volvo.png') },
  // Add more listings as needed
];

const JobListingsScreen = ({ navigation: { navigate } }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [logoUri, setLogoUri] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }
      ).start();
    }
  }, [fadeAnim, modalVisible]);

  const handleJobItemClick = () => {
    // Your logic to handle the click event for "View Drives" goes here
    navigate("DriveList");
  };

  const handleAddCompany = () => {
    // Logic to add company
    // You can use companyName and logoUri here
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Companies</Text>
      </View>
      <FlatList
        data={jobListings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => handleJobItemClick(item)}>
            <View style={styles.card}>
              <View style={styles.listingHeader}>
                <Image source={item.logo} style={styles.logo} />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Icon.AntDesign name="rightcircleo" size={20} color={Colors.primary} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        {/* Empty TouchableOpacity to act as a blue circle */}
        <Icon.AntDesign name="plus" size={45} color="white" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Animated.View
              style={[styles.modalContent, { opacity: fadeAnim }]}
            >
              <Text style={styles.modalTitle}>Add Company</Text>
              <Text>Company Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setCompanyName(text)}
                value={companyName}
              />
              <Button title="Upload Logo" onPress={() => { /* Implement image uploading functionality */ }} />
              <Button title="Add" onPress={handleAddCompany} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default JobListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: Spacing * 9,
    backgroundColor: Colors.lightPrimary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    backgroundColor: Colors.primary,
    marginBottom: Spacing * 1,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  card: {
    marginVertical: Spacing * 1,
    backgroundColor: '#fff',
    borderRadius: Spacing * 1.5,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 1.5,
    marginHorizontal: Spacing * 2.2,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing * 0.2,
    },
    shadowOpacity: 0.23,
    shadowRadius: Spacing * 0.2,
    elevation: 4,
  },
  listingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally
    marginBottom: Spacing * 0.3,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: Spacing,
  },
  titleContainer: {
    flex: 1, // Take remaining space
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items horizontally
    alignItems: 'center', // Align items vertically
  },
  title: {
    fontSize: responsiveFontSize(2.25),
    fontWeight: 'bold',
    color: Colors.text,
  },
  viewD: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
  },
  addButton: {
    position: 'absolute',
    top: Spacing * 80,
    right: 15,
    backgroundColor: Colors.shadePrimary,
    borderWidth: 4,
    borderColor: Colors.background,
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: Spacing * 2,
    borderRadius: Spacing * 1.5,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: Spacing,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: Spacing,
  },
});
