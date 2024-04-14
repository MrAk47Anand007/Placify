import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ResumeProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingArea}>
        <Text style={styles.heading}>Resume Profile</Text>
      </View>

      <SectionHeading title="Basic Details" onPress={() => handleSelection("Basic Details")} />
      <SectionHeading title="Contact Details" onPress={() => handleSelection("Contact Details")} />
      <SectionHeading title="Education" onPress={() => handleSelection("Education")} />
      <SectionHeading title="Attachments" onPress={() => handleSelection("Attachments")} />
      <SectionHeading title="Family Details" onPress={() => handleSelection("Family Details")} />
      <SectionHeading title="Professional Experience" onPress={() => handleSelection("Professional Experience")} />
      <SectionHeading title="Internship" onPress={() => handleSelection("Internship")} />
      <SectionHeading title="Project" onPress={() => handleSelection("Project")} />
      <SectionHeading title="Publications" onPress={() => handleSelection("Publications")} />
      <SectionHeading title="Seminars" onPress={() => handleSelection("Seminars")} />
      <SectionHeading title="Certificates" onPress={() => handleSelection("Certificates")} />
      <SectionHeading title="Other Details" onPress={() => handleSelection("Other Details")} />
      <SectionHeading title="References" onPress={() => handleSelection("References")} />
      <SectionHeading title="Placement Policy" onPress={() => handleSelection("Placement Policy")} />
    </ScrollView>
  );
};

const SectionHeading = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionArrow}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headingArea: {
    backgroundColor: '#3399FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionArrow: {
    fontSize: 20,
    color: '#333',
  },
});

export default ResumeProfile;












// import React from "react";
// import { StyleSheet, SafeAreaView, View } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";


// const S_Resume = ({}) => {
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

// export default S_Resume;