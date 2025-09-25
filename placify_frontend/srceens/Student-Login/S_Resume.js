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
  
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = await SecureStore.getItemAsync('jwtToken');
        const studentId = await SecureStore.getItemAsync('studentId');

        const response = await axios.get(
          `http://192.168.137.247:8080/student/resume/versions/${studentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResumes(response.data);
        console.log(JSON.stringify(response));
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  const handleAddResume = (newResume) => {
    setResumes(prevResumes => [...prevResumes, newResume]); 
  };

  const onEdit = () => {
    console.log('Edit action');
  };

  const onFilter = () => {
    console.log('Filter action');
  };

  const onDelete = async (id) => {
    try {
      const token = await SecureStore.getItemAsync('jwtToken');

      const resumeToDelete = resumes.find(resume => resume.id === id);
      if (!resumeToDelete) {
        console.error('Resume not found');
        return;
      }

      const response = await axios.delete(
        `http://192.168.137.247:8080/student/resume/delete/${resumeToDelete.version}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setResumes(prevResumes => prevResumes.filter(resume => resume.id !== id));
        if (defaultResumeId === id) {
          setDefaultResumeId(null);
        }
        console.log('sucessfully delted')
      } else {
        console.error('Failed to delete resume:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error deleting resume:', error);
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







// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
// import ResumeItem from './ResumeItems';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using react-native-vector-icons
// import Colors from '../../constants/Colors';

// const S_Resume = ({ navigation }) => {

//   const { navigate } = navigation;

//   const [resumes, setResumes] = useState([
//     { id: 1, name: 'John Doe Resume', date: '2024-01-15' },
//     { id: 2, name: 'Doe Resume', date: '2024-01-15' },
//     { id: 3, name: 'John Resume', date: '2024-01-15' },
//     { id: 4, name: 'J_Doe Resume', date: '2024-01-15' },
//     { id: 5, name: 'John_D Resume', date: '2024-01-15' },
//     // Add more resumes as needed
//   ]);

//   const [defaultResumeId, setDefaultResumeId] = useState(null);

//   const onEdit = () => {
//     console.log('Edit action');
//   };

//   const onFilter = () => {
//     console.log('Filter action');
//   };

//   const onDelete = (id) => {
//     setResumes(prevResumes => prevResumes.filter(resume => resume.id !== id));
//     if (defaultResumeId === id) {
//       setDefaultResumeId(null);
//     }
//   };

//   const onMarkAsDefault = (id) => {
//     setDefaultResumeId(id);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Resumes</Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={() => navigate("GenerateResumeScreen")} style={styles.iconButton}>
//             <Icon name="plus-square-o" size={32} color="#ffffff" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.content}>
//           {resumes.map((resume) => (
//             <ResumeItem
//               key={resume.id}
//               name={resume.name}
//               date={resume.date}
//               validity={resume.validity}
//               onDownload={() => console.log('Download', resume.id)}
//               onView={() => console.log('View', resume.id)}
//               onMarkAsDefault={() => onMarkAsDefault(resume.id)}
//               onDelete={() => onDelete(resume.id)}
//               isDefault={defaultResumeId === resume.id} // Pass isDefault prop to indicate if this resume is marked as default
//             />
//           ))}
//         </View> 
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 14,
//     backgroundColor: Colors.primary,
//   },
//   headerTitle: {
//     marginLeft: 8,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   headerIcons: {
//     flexDirection: 'row',
//   },
//   iconButton: {
//     marginLeft: 15,
//   },
//   container: {
//     paddingTop: 14,
//     flex: 1,
//     backgroundColor: Colors.lightPrimary,
//   },
//   content: {
//     paddingHorizontal: 20,
//     paddingBottom: 80,
//   },
// });

// export default S_Resume;