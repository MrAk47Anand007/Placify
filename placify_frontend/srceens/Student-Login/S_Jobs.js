
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from "../../constants/Colors";
import Spacing from '../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

// Dummy data for job listings
const jobListings = [
  { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
  { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
  { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
  { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
  // Add more listings as needed
];


const Applications = [
  // { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
  { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
  // { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
  { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
  // Add more listings as needed
];



const Offers = [
  { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
  { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
  // { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
  // { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
  // Add more listings as needed
];

const JobListingsScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={jobListings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.listingHeader}>
              <Image source={item.logo} style={styles.logo} />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.jobType}>{item.jobType}</Text>
              </View>
            </View>
            <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
            </View>
            <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => navigate("CompanyDetails")}
            >
              <Text style={styles.applyButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const ApplicationsScreen = () => (
  <View style={styles.container}>
      <FlatList
        data={Applications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.listingHeader}>
              <Image source={item.logo} style={styles.logo} />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.jobType}>{item.jobType}</Text>
              </View>
            </View>
            <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
            </View>
            <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => navigate("CompanyDetails")}
            >
              <Text style={styles.applyButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
);

const OffersScreen = () => (
  <View style={styles.container}>
      <FlatList
        data={Offers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.listingHeader}>
              <Image source={item.logo} style={styles.logo} />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.jobType}>{item.jobType}</Text>
              </View>
            </View>
            <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
            </View>
            <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => navigate("CompanyDetails")}
            >
              <Text style={styles.applyButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
);

const AppliedScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Applied Screen</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const S_Jobs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Opportunities"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: responsiveFontSize(1.6), fontWeight: "bold", justifyContent: 'center' },
        tabBarStyle: { backgroundColor: Colors.primary, paddingVertical: Spacing * 0.8 },
        tabBarIndicatorStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Tab.Screen name="Opportunities" component={JobListingsScreen} />
      <Tab.Screen name="Applications" component={ApplicationsScreen} />
      <Tab.Screen name="Offers" component={OffersScreen} />
      {/* <Tab.Screen name="Applied" component={AppliedScreen} /> */}
    </Tab.Navigator>
  );
};

export default S_Jobs;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: Spacing * 9,
    backgroundColor: Colors.lightPrimary,
  },
  card: {
    marginTop: Spacing * 2,
    backgroundColor: '#fff',
    borderRadius: Spacing * 2,
    paddingVertical: Spacing * 2.3,
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
  jobType: {
    fontSize: responsiveFontSize(1.4),
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
  },
  textbelowlogo: {
    marginLeft: Spacing,
    fontSize: responsiveFontSize(1.85),
    color: Colors.darkText
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing * 0.5,
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
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});