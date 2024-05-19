
import React, { useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Dimensions, Image, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../constants/Colors';
import Spacing from '../../../constants/Spacing';
import FontSize from '../../../constants/FontSize';

const { width } = Dimensions.get('window');

const JobDetailsEdit = () => {
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
        <Image source={require('../../../assets/images/amazonlogo.png')} style={styles.companyLogo} />
        <View>
          <Text style={styles.jobRoleText}>Software Engineer</Text>
          <Text style={styles.companyNameText}>Acme Inc.</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="briefcase" size={20} color={Colors.text} style={styles.sectionIcon} />
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
              <FontAwesome name="money" size={20} color={Colors.text} style={styles.sectionIcon} />
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
              <MaterialCommunityIcons name="map-marker-multiple" size={20} color={Colors.text} style={styles.sectionIcon} />
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
              <FontAwesome name="file-text-o" size={20} color={Colors.text} style={styles.sectionIcon} />
              <Text style={styles.heading}>Description</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{descriptionText}</Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <FontAwesome name="check-square-o" size={20} color={Colors.text} style={styles.sectionIcon} />
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
              <FontAwesome name="tasks" size={20} color={Colors.text} style={styles.sectionIcon} />
              <Text style={styles.heading}>Selection Process</Text>
            </View>
            <View style={styles.processContainer}>
              <Text style={styles.processText}>{selectionProcessText}</Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="file-document-outline" size={24} color={Colors.text} style={styles.sectionIcon} />
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
        <Text style={styles.submitText}>Edit Details</Text>
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
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyLogo: {
    width: 50,
    height: 50,
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
    marginTop: 10,
  },
  contentContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  sectionIcon: {
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  // rectangleContainer: {
  //   justifyContent: 'center',
  // },
  // rectangle: {
  //   backgroundColor: '#2196F3',
  //   borderRadius: 10,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   alignSelf: 'flex-start',
  // },
  rectangleText: {
    color: '#fff',
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  locationRectangle: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginRight: 10,
    // marginBottom: 10,
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
  },
  descriptionContainer: {
    backgroundColor: Colors.lightPrimary,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: Colors.darkText,
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
    color: Colors.darkText,
  },
  processContainer: {
    backgroundColor: Colors.lightPrimary,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  processText: {
    fontSize: 16,
    color: Colors.darkText,
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
    color: Colors.darkText,
    flex: 1,
  },
  viewButton: {
    backgroundColor: Colors.lightBlue,
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
export default JobDetailsEdit;