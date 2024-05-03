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
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from "../../constants/Colors";
import Spacing from '../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// Alias the components when importing
const Icon = {
  AntDesign: AntDesignIcon,
  FontAwesome: FontAwesomeIcon,
};

// Dummy data for job listings
const jobListings = [
  { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
  { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
  { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
  { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
  // Add more listings as needed
];

const JobListingsScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Uploaded Jobs</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigate("AddJob")} style={styles.iconButton}>
            <Icon.FontAwesome name="plus-square-o" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
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
              onPress={() => navigate("JobDetailsEdit")}
            >
              <Text style={styles.applyButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigate("AddJob")}
      >
        {/* Empty TouchableOpacity to act as a blue circle */}
        <Icon.AntDesign name="plus" size={45} color="white" />
      </TouchableOpacity>
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
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
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
});
