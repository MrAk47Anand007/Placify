
// import React from "react";
// import { StyleSheet, SafeAreaView } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";

// const S_Jobs = ({}) => {
//   return (
//     <SafeAreaView style={styles.container}>
      
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: Colors.background,
//   }
// });

// export default S_Jobs;












import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from "../../constants/Colors";

// Dummy data for job listings
const jobListings = [
  { id: '1', title: 'Software Engineer', company: 'Tech Corp', ctc: '10 LPA', jobType: 'Full Time', location: 'New York' },
  { id: '2', title: 'Web Developer Intern', company: 'Web Solutions', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco' },
  { id: '3', title: 'Tech Consultant', company: 'BY Mellon', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco' },
  // { id: '4', title: 'Cyber Security Intern', company: 'Cred', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco' },
  // Add more listings as needed
];

const JobListingsScreen = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      data={jobListings}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.company}</Text>
          <View style={styles.detailsRow}>
            <Text>{item.ctc}</Text>
            <Text>{item.jobType}</Text>
          </View>
          <Text>{item.location}</Text>
          <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => navigate("ApplicationFormScreen")}
          >
            <Text style={styles.applyButtonText}>View Deatails</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

// Dummy Components for Applications, Offers, and Applied tabs
const ApplicationsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Applications Screen</Text>
  </View>
);

const OffersScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Offers Screen</Text>
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
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", justifyContent: 'center', },
        tabBarStyle: { backgroundColor: Colors.shadePrimary, paddingVertical: 6, },
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
  card: {
    marginTop: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});


