// import React from "react";
// import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
// import Colors from "../../constants/Colors";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";

// const MA_JobDetails = ({}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={require("../../assets/images/female.png")}
//             style={styles.image}
//             resizeMode="cover"
//           />
//         </View>
//         <Text style={styles.text}>Alpha Level</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//     position: "relative",
//   },
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: Spacing.large,
//     paddingVertical: Spacing.medium,
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.borderWithOpacity,
//     backgroundColor: Colors.background,
//   },
//   imageContainer: {
//     width: 50, // Adjust the width of the square box as needed
//     height: 50, // Adjust the height of the square box as needed
//     marginRight: Spacing.medium,
//     borderRadius: 5,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   text: {
//     fontSize: FontSize.medium,
//     color: Colors.text,
//   },
// });

// export default MA_JobDetails;








// import React from "react";
// import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";

// const MA_JobDetails = ({}) => {
//   const descriptionText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

//   const selectionProcessText = "1. HR round\n2. Online Assessment\n3. Interview I\n4. Interview II";

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.content}>
//           <Text style={styles.heading}>Employment Type</Text>
//           <View style={styles.rectangle}>
//             <Text style={styles.rectangleText}>Full-time</Text>
//           </View>
//         </View>

//         <View style={styles.content}>
//           <Text style={styles.heading}>CTC</Text>
//           <View style={styles.rectangle}>
//             <Text style={styles.rectangleText}>Rs. 10,00,000</Text>
//           </View>
//         </View>

//         <View style={styles.content}>
//           <Text style={styles.heading}>Location</Text>
//           <View style={styles.locationContainer}>
//             <View style={styles.locationRectangle}>
//               <Text style={styles.locationText}>Pune</Text>
//             </View>
//             <View style={styles.locationRectangle}>
//               <Text style={styles.locationText}>Mumbai</Text>
//             </View>
//             <View style={styles.locationRectangle}>
//               <Text style={styles.locationText}>Delhi</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.content}>
//           <Text style={styles.heading}>Description</Text>
//           <View style={styles.descriptionRectangle}>
//             <Text style={styles.descriptionText}>{descriptionText}</Text>
//           </View>
//         </View>

//         <View style={styles.content}>
//           <Text style={styles.heading}>Selection Process</Text>
//           <View style={styles.processRectangle}>
//             <Text style={styles.processText}>{selectionProcessText}</Text>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.applyButton}>
//           <Text style={styles.applyButtonText}>Edit</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//   },
//   scrollViewContent: {
//     paddingHorizontal: Spacing.large,
//     paddingBottom: Spacing.large,
//   },
//   content: {
//     marginBottom: Spacing.large,
//   },
//   heading: {
//     fontSize: FontSize.xxLarge,
//     fontWeight: "bold",
//     color: Colors.text,
//     marginBottom: Spacing.small,
//   },
//   rectangle: {
//     backgroundColor: Colors.primary,
//     borderRadius: 10,
//     paddingHorizontal: Spacing.medium,
//     paddingVertical: Spacing.small,
//   },
//   rectangleText: {
//     color: Colors.onPrimary,
//     fontSize: FontSize.medium,
//   },
//   locationContainer: {
//     flexDirection: "row",
//     marginTop: Spacing.small,
//   },
//   locationRectangle: {
//     backgroundColor: Colors.primary,
//     borderRadius: 10,
//     paddingHorizontal: Spacing.medium,
//     paddingVertical: Spacing.small,
//     marginRight: Spacing.medium,
//   },
//   locationText: {
//     color: Colors.onPrimary,
//     fontSize: FontSize.medium,
//   },
//   descriptionRectangle: {
//     borderWidth: 1,
//     borderColor: Colors.primary,
//     borderRadius: 10,
//     padding: Spacing.medium,
//     marginTop: Spacing.small,
//   },
//   descriptionText: {
//     fontSize: FontSize.medium,
//     color: Colors.text,
//   },
//   processRectangle: {
//     borderWidth: 1,
//     borderColor: Colors.primary,
//     borderRadius: 10,
//     padding: Spacing.medium,
//     marginTop: Spacing.small,
//   },
//   processText: {
//     fontSize: FontSize.medium,
//     color: Colors.text,
//   },
//   applyButton: {
//     backgroundColor: Colors.primary,
//     borderRadius: 10,
//     paddingVertical: Spacing.medium,
//     alignItems: "center",
//     marginTop: Spacing.large,
//   },
//   applyButtonText: {
//     color: Colors.onPrimary,
//     fontSize: FontSize.large,
//     fontWeight: "bold",
//   },
// });

// export default MA_JobDetails;
















import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons
import { useNavigation } from '@react-navigation/native';

// Dummy data for students
const eligibleStudentsData = [
  { id: '1', name: 'John Doe', course: 'CS' },
  { id: '2', name: 'Jane Doe', course: 'IT' },
  // Add more dummy data if needed
];

const appliedStudentsData = [
  { id: '1', name: 'Alice Smith', course: 'Mech' },
  { id: '2', name: 'Bob Johnson', course: 'Civil' },
  // Add more dummy data if needed
];

const MainPage = () => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState('Eligible');
  const [searchText, setSearchText] = useState('');

  // Function to render each student item
  const renderStudent = ({ item }) => {
    const handleStudentClick = () => {
      if (currentTab === 'Applied') {
        navigation.navigate('Student_Offer', { studentData: item });
      } else {
        console.log(`Clicked on ${item.name}`);
      }
    };

    return (
      <TouchableOpacity onPress={handleStudentClick}>
        <View style={styles.studentItem}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => console.log('Checkbox clicked')}
          >
            <Icon name="square-o" size={20} color="black" />
          </TouchableOpacity>
          <Text>{item.name} - {item.course}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  

  // Function to filter students based on search text
  const filteredStudents = currentTab === 'Eligible' ? eligibleStudentsData : appliedStudentsData;
  const filteredStudentsByName = filteredStudents.filter(student => student.name.toLowerCase().includes(searchText.toLowerCase()));

  // Function to handle download button press
  const handleDownload = () => {
    // Logic to download the list of students
    console.log('Downloading student list...');
  };
  const handleNotificationToEligible = () => {
    // Logic to create and send notification to eligible students
    console.log('Creating and sending notification to eligible students...');
  };
  
  const handleNotificationToApplied = () => {
    // Logic to create and send notification to applied students
    console.log('Creating and sending notification to applied students...');
  };

  
  
  return (
    <View style={styles.container}>
      <View style={styles.companyOverview}>
        <Text style={styles.header}>Company Overview</Text>
        <View style={styles.overviewDetail}>
          <Text style={styles.detailTitle}>Company Name:</Text>
          <Text style={styles.detailText}>XYZ Corp</Text>
        </View>
        <View style={styles.overviewDetail}>
          <Text style={styles.detailTitle}>Role:</Text>
          <Text style={styles.detailText}>Software Developer</Text>
        </View>
        <View style={styles.overviewDetail}>
          <Text style={styles.detailTitle}>Job Description:</Text>
          <Text style={styles.detailText}>Developing awesome apps</Text>
        </View>
        <View style={styles.overviewDetail}>
          <Text style={styles.detailTitle}>Location:</Text>
          <Text style={styles.detailText}>New York</Text>
        </View>
        <View style={styles.overviewDetail}>
          <Text style={styles.detailTitle}>CTC:</Text>
          <Text style={styles.detailText}>$120k</Text>
        </View>
        <View style={styles.overviewDetail}>
          <Text style={styles.detailTitle}>Required Documents:</Text>
          <Text style={styles.detailText}>Resume, Cover Letter</Text>
        </View>
        <Button title="Edit Details" onPress={() => console.log('Edit Details')} />
      </View>
    
      <View style={styles.companyOverview}>
  <Text style={styles.header}>Create & Send Notification</Text>

  <View style={styles.notificationButtonContainer}>
    <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationToEligible}>
      <Icon name="bell" size={20} color="#fff" />
      <Text style={styles.notificationButtonText}>Notify Eligible</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationToApplied}>
      <Icon name="bell" size={20} color="#fff" />
      <Text style={styles.notificationButtonText}>Notify Applied</Text>
    </TouchableOpacity>
  </View>
</View>

      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </View>
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, currentTab === 'Eligible' && styles.activeTab]} onPress={() => setCurrentTab('Eligible')}>
          <Text style={[styles.tabText, currentTab === 'Eligible' && styles.activeTabText]}>Eligible Students</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, currentTab === 'Applied' && styles.activeTab]} onPress={() => setCurrentTab('Applied')}>
          <Text style={[styles.tabText, currentTab === 'Applied' && styles.activeTabText]}>Applied Students</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredStudentsByName}
        renderItem={renderStudent}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  companyOverview: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  overviewDetail: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailText: {
    flex: 1,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  activeTabText: {
    color: 'blue',
  },
  studentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkbox: {
    marginRight: 10,
  },
  notificationButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  notificationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  notificationButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  studentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  studentName: {
    flex: 1, // Ensure the name takes up the available space
    color: 'blue', // or any other color you prefer for clickable text
    textDecorationLine: 'underline', // to visually indicate that it's clickable
  },
  

});

export default MainPage;






