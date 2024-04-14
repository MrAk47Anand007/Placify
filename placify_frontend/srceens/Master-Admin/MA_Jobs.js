// import React from "react";
// import { StyleSheet, SafeAreaView } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";

// const MA_Jobs = ({}) => {
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

// export default MA_Jobs;



// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import Colors from "../../constants/Colors";

// // Dummy data for job listings
// const jobListings = [
//   { id: '1', title: 'Software Engineer', company: 'Tech Corp', ctc: '10 LPA', jobType: 'Full Time', location: 'New York' },
//   { id: '2', title: 'Web Developer Intern', company: 'Web Solutions', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco' },
//   { id: '3', title: 'Tech Consultant', company: 'BY Mellon', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco' },
//   // { id: '4', title: 'Cyber Security Intern', company: 'Cred', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco' },
//   // Add more listings as needed
// ];

// const JobListingsScreen = ({ navigation: { navigate } }) => {
//   return (
//     <FlatList
//       data={jobListings}
//       keyExtractor={item => item.id}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text>{item.company}</Text>
//           <View style={styles.detailsRow}>
//             <Text>{item.ctc}</Text>
//             <Text>{item.jobType}</Text>
//           </View>
//           <Text>{item.location}</Text>
//           <TouchableOpacity 
//             style={styles.applyButton}
//             onPress={() => navigate("ApplicationFormScreen")}
//           >
//             <Text style={styles.applyButtonText}>View Details</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     />
//   );
// };

// export default JobListingsScreen;

// const styles = StyleSheet.create({
//   card: {
//     marginTop: 18,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   detailsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 5,
//   },
//   applyButton: {
//     marginTop: 10,
//     backgroundColor: Colors.primary,
//     padding: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   applyButtonText: {
//     color: Colors.onPrimary,
//     fontWeight: 'bold',
//   },
// });











import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from "../../constants/Colors";
import Icon from 'react-native-vector-icons/AntDesign';


// Dummy data for job listings
const jobListings = [
  { id: '1', title: 'Software Engineer', company: 'Tech Corp', ctc: '10 LPA', jobType: 'Full Time', location: 'New York' },
  { id: '2', title: 'Web Developer Intern', company: 'Web Solutions', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco' },
  { id: '3', title: 'Tech Consultant', company: 'BY Mellon', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco' },
  { id: '4', title: 'Cyber Security Intern', company: 'Cred', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco' },
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
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.company}</Text>
            <View style={styles.detailsRow}>
              <Text>{item.ctc}</Text>
              <Text>{item.jobType}</Text>
            </View>
            <Text>{item.location}</Text>
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={() => navigate("JobDetails")}
            >
              <Text style={styles.applyButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigate("JobDetails")}
      >
        {/* Empty TouchableOpacity to act as a blue circle */}
        <Icon name="plus" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default JobListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: 75,
  },
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
  addButton: {
    position: 'absolute',
    top: 515,
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
});
