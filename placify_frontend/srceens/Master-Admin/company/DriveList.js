import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from "../../../constants/Colors";
import Spacing from '../../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontSize from '../../../constants/FontSize';
import { CompanyContext, CompanyProvider } from './CompanyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Icon = {
  AntDesign: AntDesignIcon,
};


const DriveList = () => {
  const [drives, setDrives] = useState([]);
  const [companyData, setCompanyData] = useState(null);
  const navigation = useNavigation(); 

  useEffect(() => {
    const fetchDriveData = async () => {
      try {
        // Retrieve data from AsyncStorage
        const storedCompanyData = await AsyncStorage.getItem('companyData'); 
        if (storedCompanyData) {
          setCompanyData(JSON.parse(storedCompanyData));

          // Make API call to fetch drives
          const response = await axios.get(`/api/drives?company=${companyData.name}`); 
          setDrives(response.data);
        } else {
          console.error('Company data not available in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching drive data:', error);
      }
    };

    fetchDriveData(); 
  }, []);

  return (
    <CompanyProvider>
<View style={styles.container}>
      {/* Render the company name in the header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{companyData?.name} - Drives</Text>
      </View>
      <FlatList
        data={drives}
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

            <View style={styles.DriveButtons}>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => navigate("JobDetailsEdit")}
              >
                <Text style={styles.applyButtonText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton2}
                onPress={() => navigate("StudentInfo")}
              >
                <Text style={styles.applyButtonText2}>Student Info</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("contextWrap")}>
        <Text style={styles.submitText}>Add Drive</Text>
      </TouchableOpacity>
    </View>
    </CompanyProvider>
    
  );
};

export default DriveList;

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
  DriveButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButton2: {
    marginTop: 10,
    backgroundColor: Colors.LightGray,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.onPrimary,
    fontWeight: 'bold',
  },
  applyButtonText2: {
    color: Colors.text,
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
