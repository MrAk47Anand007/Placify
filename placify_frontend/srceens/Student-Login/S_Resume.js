import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import ResumeItem from './ResumeItems';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const S_Resume = ({ navigation }) => {
  const { navigate } = navigation;
  const [resumes, setResumes] = useState([]);
  const [defaultResumeId, setDefaultResumeId] = useState(null);
  
 
  // Fetch resumes from backend on component mount
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = await SecureStore.getItemAsync('jwtToken');
        const studentId = await SecureStore.getItemAsync('studentId');

        const response = await axios.get(
          `http://192.168.29.209:8080/student/resume/versions/${studentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add Authorization header
            },
          }
        );

        setResumes(response.data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
        // Handle error
      }
    };

    fetchResumes();
  }, []);

  // Function to handle adding a new resume after generation (in GenerateResumeScreen)
  const handleAddResume = (newResume) => {
    // Assuming newResume has the necessary properties (id, name, date, etc.)
    setResumes(prevResumes => [...prevResumes, newResume]); 
  };
  const onEdit = () => {
    console.log('Edit action');
  };

  const onFilter = () => {
    console.log('Filter action');
  };

  const onDelete = (id) => {
    setResumes(prevResumes => prevResumes.filter(resume => resume.id !== id));
    if (defaultResumeId === id) {
      setDefaultResumeId(null);
    }
  };

  const onMarkAsDefault = (id) => {
    setDefaultResumeId(id);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Resumes</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigate("GenerateResumeScreen")} style={styles.iconButton}>
            <Icon name="plus-square-o" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {resumes.map((resume) => (
            <ResumeItem
              key={resume.id}
              name={resume.name}
              date={resume.date}
              validity={resume.validity}
              onDownload={() => console.log('Download', resume.id)}
              onView={() => console.log('View', resume.id)} 
              onMarkAsDefault={() => onMarkAsDefault(resume.id)}
              onDelete={() => onDelete(resume.id)}
              isDefault={defaultResumeId === resume.id} // Pass isDefault prop to indicate if this resume is marked as default
            />
          ))}
        </View> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: Colors.lightPrimary,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
});

export default S_Resume;
