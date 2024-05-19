import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput, Modal, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from "../../constants/Colors";
import Spacing from '../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';

// Dummy data for job listings
const EligibleStu = [
  { id: '1', Name: 'Shreyas Joshi', Branch: 'Computer Engineering', photo: require('../../assets/images/amazonlogo.png') },
  { id: '2', Name: 'Onkar Kale', Branch: 'Information Technology', photo: require('../../assets/images/googlelogo.png') },
  { id: '3', Name: 'Vivek Harwani', Branch: 'Instrumentation Engineering', photo: require('../../assets/images/Tatalogo.png') },
  { id: '4', Name: 'Anand Kale', Branch: 'Mechanical Engineering', photo: require('../../assets/images/amazonlogo.png') },
  { id: '5', Name: 'Rahul Singh', Branch: 'Civil Engineering', photo: require('../../assets/images/amazonlogo.png') },
  { id: '6', Name: 'Aditya Shah', Branch: 'Artificial Intelligence and Data Science', photo: require('../../assets/images/googlelogo.png') },
  { id: '7', Name: 'Arjun Kapoor', Branch: 'Automation and Robotics', photo: require('../../assets/images/Tatalogo.png') },
  // Add more listings as needed
];

const AppliedStu = [
  { id: '1', Name: 'Shreyas Joshi', Branch: 'Computer Engineering', photo: require('../../assets/images/amazonlogo.png') },
  { id: '2', Name: 'Onkar Kale', Branch: 'Electrical Engineering', photo: require('../../assets/images/googlelogo.png') },
  { id: '3', Name: 'Vivek Harwani', Branch: 'Instrumentation Engineering', photo: require('../../assets/images/Tatalogo.png') },
  { id: '4', Name: 'Anand Kale', Branch: 'Mechanical Engineering', photo: require('../../assets/images/amazonlogo.png') },
];

const branches = ['Computer Engineering', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering', 'Instrumentation Engineering', 'Artificial Intelligence and Data Science', 'Automation and Robotics'];

// Existing code...

const EligibleStudents = ({ navigation: { navigate } }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [showBranchModal, setShowBranchModal] = useState(false);

  const filteredData = EligibleStu.filter(item =>
    item.Name.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedBranches.length === 0 || selectedBranches.includes(item.Branch))
  );

  const toggleBranch = (branch) => {
    if (selectedBranches.includes(branch)) {
      setSelectedBranches(selectedBranches.filter(b => b !== branch));
    } else {
      setSelectedBranches([...selectedBranches, branch]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={24} color={Colors.primary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={() => setShowBranchModal(true)}>
          <Ionicons name="filter" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.listingHeader}>
              <Image source={item.photo} style={styles.logo} />
              <View style={styles.nameAndBranchContainer}>
                <Text style={styles.title}>{item.Name}</Text>
                <Text style={styles.jobType}>Branch: {item.Branch}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <Modal visible={showBranchModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filter by Branch</Text>
            <TouchableOpacity onPress={() => setShowBranchModal(false)}>
              <Ionicons name="close" size={24} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.branchListContainer}>
            {branches.map(branch => (
              <TouchableOpacity
                key={branch}
                style={styles.branchItem}
                onPress={() => toggleBranch(branch)}
              >
                <Text style={selectedBranches.includes(branch) ? styles.selectedBranchText : styles.branchText}>{branch}</Text>
                {selectedBranches.includes(branch) && (
                  <Ionicons name="checkmark-circle" size={24} color={Colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

// Existing code...


const AppliedStudents = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [showBranchModal, setShowBranchModal] = useState(false);

  const filteredData = AppliedStu.filter(item =>
    item.Name.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedBranches.length === 0 || selectedBranches.includes(item.Branch))
  );

  const toggleBranch = (branch) => {
    if (selectedBranches.includes(branch)) {
      setSelectedBranches(selectedBranches.filter(b => b !== branch));
    } else {
      setSelectedBranches([...selectedBranches, branch]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={24} color={Colors.primary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={() => setShowBranchModal(true)}>
          <Ionicons name="filter" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.listingHeader}>
              <Image source={item.photo} style={styles.logo} />
              <View style={styles.nameAndBranchContainer}>
                <Text style={styles.title}>{item.Name}</Text>
                <Text style={styles.jobType}>Branch: {item.Branch}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <Modal visible={showBranchModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filter by Branch</Text>
            <TouchableOpacity onPress={() => setShowBranchModal(false)}>
              <Ionicons name="close" size={24} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.branchListContainer}>
            {branches.map(branch => (
              <TouchableOpacity
                key={branch}
                style={styles.branchItem}
                onPress={() => toggleBranch(branch)}
              >
                <Text style={selectedBranches.includes(branch) ? styles.selectedBranchText : styles.branchText}>{branch}</Text>
                {selectedBranches.includes(branch) && (
                  <Ionicons name="checkmark-circle" size={24} color={Colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const StudentInfo = () => {
  return (
    <Tab.Navigator
      initialRouteName="Opportunities"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: responsiveFontSize(1.8), fontWeight: "bold", justifyContent: 'center' },
        tabBarStyle: { backgroundColor: Colors.primary, paddingVertical: Spacing * 0.8 },
        tabBarIndicatorStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Tab.Screen name="Eligible" component={EligibleStudents} />
      <Tab.Screen name="Applied" component={AppliedStudents} />
    </Tab.Navigator>
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.lightPrimary,
  },
  card: {
    marginVertical: Spacing * 0.5,
    backgroundColor: '#fff',
    borderRadius: Spacing * 1.2,
    paddingVertical: Spacing * 1.2,
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
    marginBottom: Spacing * 0.3,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: Spacing,
  },
  nameAndBranchContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: responsiveFontSize(2.25),
    fontWeight: 'bold',
    color: Colors.text,
  },
  jobType: {
    fontSize: responsiveFontSize(1.4),
    color: Colors.primary,
    fontWeight: 'bold',
  },
  applyButton: {
    marginTop: Spacing * 1.5,
    backgroundColor: Colors.primary,
    padding: Spacing * 1.2,
    borderRadius: Spacing * 2,
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.onPrimary,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Spacing * 2,
    marginVertical: Spacing,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
    paddingHorizontal: Spacing,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 0,
  },
  searchIcon: {
    marginRight: Spacing * 0.5,
  },
  filterButton: {
    marginLeft: Spacing,
  },
  modalContainer: {
    flex: 0.6, // Adjust height as needed
    backgroundColor: Colors.lightPrimary,
    padding: Spacing * 2,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing,
  },
  modalTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  branchListContainer: {
    flex: 1,
  },
  branchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  branchText: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.text,
  },
  selectedBranchText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
