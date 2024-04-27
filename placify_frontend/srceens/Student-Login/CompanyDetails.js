
// import React from 'react';
// import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');

// const CompanyDetails = () => {
//   const descriptionText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

//   const selectionProcessText = "1. HR round\n2. Online Assessment\n3. Interview I\n4. Interview II";

//   const locations = ['Pune', 'Mumbai', 'Delhi'];

//   const eligibilityCriteria = [
//     { title: 'Eligible Branches', value: 'Computer Science, IT' },
//     { title: '10th Percentile', value: 'Minimum 80%' },
//     { title: 'Gender', value: 'Female' },
//     { title: '12th Percentile', value: 'Minimum 75%' },
//     { title: 'Minimum CGPA', value: '7.5' },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Image source={require('../../assets/images/amazonlogo.png')} style={styles.companyLogo} />
//         <View>
//           <Text style={styles.jobRoleText}>Software Engineer</Text>
//           <Text style={styles.companyNameText}>Acme Inc.</Text>
//         </View>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.contentContainer}>
//           <Text style={styles.heading}>Employment Type</Text>
//           <View style={styles.rectangleContainer}>
//             <View style={styles.rectangle}>
//               <Text style={styles.rectangleText}>Full-time</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={styles.heading}>CTC</Text>
//           <View style={styles.rectangleContainer}>
//             <View style={styles.rectangle}>
//               <Text style={styles.rectangleText}>Rs. 10,00,000</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={styles.heading}>Location</Text>
//           <View style={styles.locationContainer}>
//             {locations.map((location, index) => (
//               <View key={index} style={styles.locationRectangle}>
//                 <Text style={styles.locationText}>{location}</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={styles.heading}>Description</Text>
//           <View style={styles.descriptionContainer}>
//             <Text style={styles.descriptionText}>{descriptionText}</Text>
//           </View>
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={styles.heading}>Eligibility Criteria</Text>
//           {eligibilityCriteria.map((criteria, index) => (
//             <View key={index} style={styles.criteriaContainer}>
//               <Text style={styles.criteriaTitle}>{criteria.title}:</Text>
//               <Text style={styles.criteriaValue}>{criteria.value}</Text>
//             </View>
//           ))}
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={styles.heading}>Selection Process</Text>
//           <View style={styles.processContainer}>
//             <Text style={styles.processText}>{selectionProcessText}</Text>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.applyButton}>
//           <Text style={styles.applyButtonText}>Apply Now</Text>
//           <FontAwesome name="long-arrow-right" size={18} color="#fff" style={styles.applyButtonIcon} />
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   headerContainer: {
//     backgroundColor: '#4CAF50', // A more professional blue shade
//     paddingHorizontal: 20,
//     paddingVertical: 20, // Increased padding for a larger header
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 2, // Adds a subtle separation from the content
//     borderBottomColor: '#0041C4', // A slightly darker shade for depth
//   },
//   jobRoleText: {
//     fontSize: 20, // Slightly larger for emphasis
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   companyNameText: {
//     fontSize: 18, // Adjusted for visual hierarchy
//     color: '#BCCCE0', // A lighter shade for contrast
//   },
//   scrollViewContent: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   contentContainer: {
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF', // Each section has its own card
//     borderRadius: 8, // Rounded corners for a modern look
//     padding: 15, // Padding inside the cards
//     shadowColor: "#000", // Shadow for depth
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   heading: {
//     fontSize: 22, // Larger for importance
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     fontFamily: 'Roboto-Bold', 
//   },
//   rectangle: {
//     backgroundColor: '#0052CC', // Consistent with the header color
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     alignSelf: 'flex-start',
//   },
//   rectangleText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   locationRectangle: {
//     backgroundColor: '#0052CC', // Consistent with the header color
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 7,
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   locationText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   descriptionContainer: {
//     backgroundColor: '#F5F5F5',
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 10,
//   },
//   descriptionText: {
//     fontSize: 16,
//     color: '#333',
//     lineHeight: 24,
//     fontFamily: 'OpenSans-Regular',
//   },
//   criteriaContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   criteriaTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: 10,
//   },
//   criteriaValue: {
//     fontSize: 16,
//     color: '#333',
//   },
//   applyButton: {
//     backgroundColor: '#FFC107', // A vibrant color for the call-to-action button
//     borderRadius: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 25,
//     alignSelf: 'flex-start',
//   },
//   applyButtonText: {
//     color: '#333', // Dark text for contrast
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   applyButtonIcon: {
//     marginLeft: 10,
//     color: '#333', // Icon color matches the text
//   },
//   companyLogo: {
//     width: 40,
//     height: 40,
//     marginRight: 10,
//   },
//   jobRoleText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   companyNameText: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// export default CompanyDetails;





//Sure, here's the complete code with animations and icons:

//```jsx
import React, { useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Dimensions, Image, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';

const { width } = Dimensions.get('window');

const CompanyDetails = () => {
  const descriptionText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

  const selectionProcessText = "1. HR round\n2. Online Assessment\n3. Interview I\n4. Interview II";

  const locations = ['Pune', 'Mumbai', 'Delhi'];

  const eligibilityCriteria = [
    { title: 'Eligible Branches', value: 'Computer Science, IT' },
    { title: '10th Percentile', value: 'Minimum 80%' },
    { title: 'Gender', value: 'Female' },
    { title: '12th Percentile', value: 'Minimum 75%' },
    { title: 'Minimum CGPA', value: '7.5' },
  ];

  const necessaryDocuments = [

    'Compensation details',
    'Job Description',
  ];

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/amazonlogo.png')} style={styles.companyLogo} />
        <View>
          <Text style={styles.jobRoleText}>Software Engineer</Text>
          <Text style={styles.companyNameText}>Acme Inc.</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="briefcase" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>Employment Type</Text>
            </View>
            <View style={styles.locationContainer}>
              <View style={styles.locationRectangle}>
                <Text style={styles.rectangleText}>Full-time</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="money" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>CTC</Text>
            </View>
            <View style={styles.locationContainer}>
              <View style={styles.locationRectangle}>
                <Text style={styles.rectangleText}>Rs. 10,00,000</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="map-marker-multiple" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>Location</Text>
            </View>
            <View style={styles.locationContainer}>
              {locations.map((location, index) => (
                <View key={index} style={styles.locationRectangle}>
                  <Text style={styles.locationText}>{location}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="file-text-o" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>Description</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{descriptionText}</Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="check-square-o" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>Eligibility Criteria</Text>
            </View>
            {eligibilityCriteria.map((criteria, index) => (
              <View key={index} style={styles.criteriaContainer}>
                <Text style={styles.criteriaTitle}>{criteria.title}:</Text>
                <Text style={styles.criteriaValue}>{criteria.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="tasks" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>Selection Process</Text>
            </View>
            <View style={styles.processContainer}>
              <Text style={styles.processText}>{selectionProcessText}</Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="file-document-outline" size={24} color="#333" style={styles.sectionIcon} />
              <Text style={styles.heading}>Necessary Documents</Text>
            </View>
            <View style={styles.documentsContainer}>
              {necessaryDocuments.map((document, index) => (
                <View key={index} style={styles.documentItem}>
                  <Text style={styles.documentText}>{document}</Text>
                  <TouchableOpacity style={styles.viewButton} activeOpacity={0.7}>
                    <Text style={styles.viewButtonText}>View</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>
      </ScrollView>
      <TouchableOpacity style={styles.submitButton} >
        <Text style={styles.submitText}>Apply</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 70,
  },
  headerContainer: {
    backgroundColor: '#FF6347',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  jobRoleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  companyNameText: {
    fontSize: 16,
    color: '#fff',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionIcon: {
    marginRight: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rectangleContainer: {
    justifyContent: 'center',
  },
  rectangle: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  rectangleText: {
    color: '#fff',
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  locationRectangle: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginRight: 10,
    marginBottom: 10,
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
  },
  descriptionContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  criteriaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  criteriaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  criteriaValue: {
    fontSize: 16,
    color: '#333',
  },
  processContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  processText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  documentsContainer: {
    marginTop: 10,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  documentText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  viewButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  submitButton: {
    position: 'absolute', // Position the button absolutely
    bottom: 7, // Place it at the bottom of the screen
    left: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: Spacing * 2,
    marginHorizontal: Spacing * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});
export default CompanyDetails;