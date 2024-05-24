// import React, { useState, useEffect, useContext } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Modal, TextInput, Button, Animated } from 'react-native';
// import Colors from "../../../constants/Colors";
// import Spacing from '../../../constants/Spacing';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { CompanyContext} from './CompanyContext'; // Ensure correct import
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Icon = {
//   AntDesign: AntDesignIcon,
//   EvilIcons: EvilIcons,
// };

// const JobListingsScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [companyName, setCompanyName] = useState('');
//   const [description, setDescription] = useState('');
//   const [logoUri, setLogoUri] = useState(null);
//   const [fadeAnim] = useState(new Animated.Value(0));
//   const [jobListings, setJobListings] = useState([]);
//   const { companyData, updateCompanyData } = useContext(CompanyContext);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     if (modalVisible) {
//       Animated.timing(
//         fadeAnim,
//         {
//           toValue: 1,
//           duration: 300,
//           useNativeDriver: true,
//         }
//       ).start();
//     }
//   }, [fadeAnim, modalVisible]);

//   const fetchCompanies = async () => {
//     try {
//       const response = await axios.get('http://192.168.29.209:8080/api/companies/getAll');
//       if (response.status === 200) {
//         setJobListings(response.data);
//       } else {
//         console.error('Failed to fetch companies', response.data);
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching companies', error);
//     }
//   };

//   const handleJobItemClick = async (company) => {
//     updateCompanyData({
//       name: company.name,
//       description: company.description,
//     });

    
//     navigation.navigate("DriveList");
//   };

//   const handleAddCompany = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', companyName);
//       formData.append('description', description);
//       if (logoUri) {
//         const base64 = await convertToBase64(logoUri);
//         formData.append('logo', base64);
//       }

//       const response = await axios.post('http://192.168.29.209:8080/api/companies/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         console.log('Company added successfully');
//         fetchCompanies();
//       } else {
//         console.error('Failed to add company', response.data);
//       }
//     } catch (error) {
//       console.error('An error occurred while adding the company', error);
//     }

//     setModalVisible(false);
//   };

//   const convertToBase64 = (uri) => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = () => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           resolve(reader.result.split(',')[1]);
//         };
//         reader.readAsDataURL(xhr.response);
//       };
//       xhr.onerror = (error) => {
//         reject(error);
//       };
//       xhr.open('GET', uri);
//       xhr.responseType = 'blob';
//       xhr.send(null);
//     });
//   };

//   const selectLogo = () => {
//     launchImageLibrary({}, response => {
//       if (response.assets && response.assets.length > 0) {
//         setLogoUri(response.assets[0].uri);
//       }
//     });
//   };

//   return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Companies</Text>
//         </View>
//         <FlatList
//           data={jobListings}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableWithoutFeedback onPress={() => handleJobItemClick(item)}>
//               <View style={styles.card}>
//                 <View style={styles.listingHeader}>
//                   <Image
//                     source={{ uri: `data:image/png;base64,${item.logo}` }}
//                     style={styles.logo}
//                   />
//                   <View style={styles.titleContainer}>
//                     <Text style={styles.title}>{item.name}</Text>
//                     <Icon.EvilIcons name="trash" size={28} color={'red'} />
//                   </View>
//                 </View>
//               </View>
//             </TouchableWithoutFeedback>
//           )}
//         />

//         <TouchableOpacity
//           style={styles.addButton}
//           onPress={() => setModalVisible(true)}
//         >
//           <Icon.AntDesign name="plus" size={45} color="white" />
//         </TouchableOpacity>

//         <Modal
//           animationType="none"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//             <View style={styles.modalContainer}>
//               <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
//                 <Text style={styles.modalTitle}>Add Company</Text>
//                 <Text>Company Name:</Text>
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={text => setCompanyName(text)}
//                   value={companyName}
//                 />
//                 <Text>Description:</Text>
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={text => setDescription(text)}
//                   value={description}
//                   multiline
//                 />
//                 <Button title="Upload Logo" onPress={selectLogo} />
//                 {logoUri && <Image source={{ uri: logoUri }} style={styles.logoPreview} />}
//                 <Button title="Add" onPress={handleAddCompany} />
//                 <Button title="Cancel" onPress={() => setModalVisible(false)} />
//               </Animated.View>
//             </View>
//           </TouchableWithoutFeedback>
//         </Modal>
//       </View>
//   );
// };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     paddingBottom: Spacing * 9,
//     backgroundColor: Colors.lightPrimary,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 14,
//     backgroundColor: Colors.primary,
//     marginBottom: Spacing * 1,
//   },
//   headerTitle: {
//     marginLeft: 8,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   card: {
//     marginVertical: Spacing * 1,
//     backgroundColor: '#fff',
//     borderRadius: Spacing * 1.5,
//     paddingVertical: Spacing * 1.5,
//     paddingHorizontal: Spacing * 1.5,
//     marginHorizontal: Spacing * 2.2,
//     shadowColor: Colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: Spacing * 0.2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: Spacing * 0.2,
//     elevation: 4,
//   },
//   listingHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', // Align items horizontally
//     marginBottom: Spacing * 0.3,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: Spacing,
//   },
//   titleContainer: {
//     flex: 1, // Take remaining space
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Align items horizontally
//     alignItems: 'center', // Align items vertically
//   },
//   title: {
//     fontSize: responsiveFontSize(2.25),
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   viewD: {
//     fontSize: responsiveFontSize(1.6),
//     color: Colors.primary,
//     fontWeight: 'bold',
//     textAlign: 'right', // Align text to the right
//   },
//   addButton: {
//     position: 'absolute',
//     top: Spacing * 80,
//     right: 15,
//     backgroundColor: Colors.shadePrimary,
//     borderWidth: 4,
//     borderColor: Colors.background,
//     width: 80,
//     height: 80,
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: Spacing * 2,
//     borderRadius: Spacing * 1.5,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: Spacing,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '80%',
//     padding: 10,
//     marginBottom: Spacing,
//   },
//   logoPreview: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginVertical: Spacing,
//   },
// });

// export default JobListingsScreen;











// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Modal, TextInput, Button, Animated, Alert } from 'react-native';
// import Colors from "../../../constants/Colors";
// import Spacing from '../../../constants/Spacing';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { launchImageLibrary } from 'react-native-image-picker';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Icon = {
//   AntDesign: AntDesignIcon,
//   EvilIcons: EvilIcons,
// };

// const JobListingsScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [companyName, setCompanyName] = useState('');
//   const [description, setDescription] = useState('');
//   const [logoUri, setLogoUri] = useState(null);
//   const [fadeAnim] = useState(new Animated.Value(0));
//   const [jobListings, setJobListings] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     if (modalVisible) {
//       Animated.timing(
//         fadeAnim,
//         {
//           toValue: 1,
//           duration: 300,
//           useNativeDriver: true,
//         }
//       ).start();
//     }
//   }, [fadeAnim, modalVisible]);

//   const fetchCompanies = async () => {
//     try {
//       const response = await axios.get('http://192.168.29.209:8080/api/companies/getAll');
//       if (response.status === 200) {
//         console.log(response.data);
//         setJobListings(response.data);
//       } else {
//         console.error('Failed to fetch companies', response.data);
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching companies', error);
//     }
//   };

//   const handleJobItemClick = async (company) => {
//     await AsyncStorage.setItem('CompanyName', company.name);
//     await AsyncStorage.setItem('CompanyId', company.id.toString());
//     navigation.navigate("DriveList");
//   };

//   const handleAddCompany = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', companyName);
//       formData.append('description', description);
//       if (logoUri) {
//         const base64 = await convertToBase64(logoUri);
//         const file = new Blob([base64], { type: 'image/jpeg' }); // Assuming JPEG, adjust if necessary
//         formData.append('logo', file, 'logo.jpg');
//       }

//       const response = await axios.post('http://192.168.29.209:8080/api/companies/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 201) {
//         console.log('Company added successfully');
//         fetchCompanies();
//       } else {
//         console.error('Failed to add company', response.data);
//       }
//     } catch (error) {
//       console.error('An error occurred while adding the company', error);
//       Alert.alert('Error', 'There was an error adding the company.');
//     }

//     setModalVisible(false);
//   };

//   const convertToBase64 = (uri) => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = () => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           resolve(reader.result.split(',')[1]);
//         };
//         reader.readAsDataURL(xhr.response);
//       };
//       xhr.onerror = (error) => {
//         reject(error);
//       };
//       xhr.open('GET', uri);
//       xhr.responseType = 'blob';
//       xhr.send(null);
//     });
//   };

//   const selectLogo = () => {
//     launchImageLibrary({}, response => {
//       if (response.assets && response.assets.length > 0) {
//         setLogoUri(response.assets[0].uri);
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Companies</Text>
//       </View>
//       <FlatList
//         data={jobListings}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableWithoutFeedback onPress={() => handleJobItemClick(item)}>
//             <View style={styles.card}>
//               <View style={styles.listingHeader}>
//                 <Image
//                   source={item.logo ? { uri: `data:image/png;base64,${item.logo}` } : require('../../../assets/images/logo.png')}
//                   style={styles.logo}
//                 />
//                 <View style={styles.titleContainer}>
//                   <Text style={styles.title}>{item.name}</Text>
//                   <Icon.EvilIcons name="trash" size={28} color={'red'} />
//                 </View>
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         )}
//       />

//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => setModalVisible(true)}
//       >
//         <Icon.AntDesign name="plus" size={45} color="white" />
//       </TouchableOpacity>

//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//           <View style={styles.modalContainer}>
//             <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
//               <Text style={styles.modalTitle}>Add Company</Text>
//               <Text>Company Name:</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={text => setCompanyName(text)}
//                 value={companyName}
//               />
//               <Text>Description:</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={text => setDescription(text)}
//                 value={description}
//                 multiline
//               />
//               <Button title="Upload Logo" onPress={selectLogo} />
//               {logoUri && <Image source={{ uri: logoUri }} style={styles.logoPreview} />}
//               <Button title="Add" onPress={handleAddCompany} />
//               <Button title="Cancel" onPress={() => setModalVisible(false)} />
//             </Animated.View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     paddingBottom: Spacing * 9,
//     backgroundColor: Colors.lightPrimary,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 14,
//     backgroundColor: Colors.primary,
//     marginBottom: Spacing * 1,
//   },
//   headerTitle: {
//     marginLeft: 8,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   card: {
//     marginVertical: Spacing * 1,
//     backgroundColor: '#fff',
//     borderRadius: Spacing * 1.5,
//     paddingVertical: Spacing * 1.5,
//     paddingHorizontal: Spacing * 1.5,
//     marginHorizontal: Spacing * 2.2,
//     shadowColor: Colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: Spacing * 0.2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: Spacing * 0.2,
//     elevation: 4,
//   },
//   listingHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', // Align items horizontally
//     marginBottom: Spacing * 0.3,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: Spacing,
//   },
//   titleContainer: {
//     flex: 1, // Take remaining space
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Align items horizontally
//     alignItems: 'center', // Align items vertically
//   },
//   title: {
//     fontSize: responsiveFontSize(2.25),
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   viewD: {
//     fontSize: responsiveFontSize(1.6),
//     color: Colors.primary,
//     fontWeight: 'bold',
//     textAlign: 'right', // Align text to the right
//   },
//   addButton: {
//     position: 'absolute',
//     top: Spacing * 80,
//     right: 15,
//     backgroundColor: Colors.shadePrimary,
//     borderWidth: 4,
//     borderColor: Colors.background,
//     width: 80,
//     height: 80,
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: Spacing * 2,
//     borderRadius: Spacing * 1.5,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: Spacing,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '80%',
//     padding: 10,
//     marginBottom: Spacing,
//   },
//   logoPreview: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginVertical: Spacing,
//   },
// });

// export default JobListingsScreen;

// JobListingsScreen.js
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Modal, TextInput, Button, Animated, Alert } from 'react-native';
import Colors from "../../../constants/Colors";
import Spacing from '../../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { CompanyContext } from './CompanyContext';

const Icon = {
  AntDesign: AntDesignIcon,
  EvilIcons: EvilIcons,
};

const JobListingsScreen = () => {
  const { companies, loading, fetchCompanies, addCompany } = useContext(CompanyContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [logoUri, setLogoUri] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }
      ).start();
    }
  }, [fadeAnim, modalVisible]);

  const handleJobItemClick = async (company) => {
    await AsyncStorage.setItem('CompanyName', company.name);
    await AsyncStorage.setItem('CompanyId', company.id.toString());
    navigation.navigate("DriveList");
  };

  const handleAddCompany = async () => {
    try {
      const formData = new FormData();
      formData.append('name', companyName);
      formData.append('description', description);
      if (logoUri) {
        const base64 = await convertToBase64(logoUri);
        const file = new Blob([base64], { type: 'image/jpeg' }); // Assuming JPEG, adjust if necessary
        formData.append('logo', file, 'logo.jpg');
      }
      await addCompany(formData);
    } catch (error) {
      console.error('An error occurred while adding the company', error);
      Alert.alert('Error', 'There was an error adding the company.');
    }

    setModalVisible(false);
  };

  const convertToBase64 = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = (error) => {
        reject(error);
      };
      xhr.open('GET', uri);
      xhr.responseType = 'blob';
      xhr.send(null);
    });
  };

  const selectLogo = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setLogoUri(response.assets[0].uri);
      }
    });
  };

  const renderPlaceholder = () => (
    <View style={styles.card}>
      <ShimmerPlaceHolder style={styles.logoPlaceholder} />
      <ShimmerPlaceHolder style={styles.titlePlaceholder} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Companies</Text>
      </View>
      <FlatList
        data={loading ? [1, 2, 3, 4, 5] : companies}
        keyExtractor={(item, index) => loading ? index.toString() : item.id.toString()}
        renderItem={({ item }) => (
          loading ? renderPlaceholder() : (
            <TouchableWithoutFeedback onPress={() => handleJobItemClick(item)}>
              <View style={styles.card}>
                <View style={styles.listingHeader}>
                  <Image
                    source={item.logo ? { uri: `data:image/png;base64,${item.logo}` } : require('../../../assets/images/logo.png')}
                    style={styles.logo}
                  />
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Icon.EvilIcons name="trash" size={28} color={'red'} />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Icon.AntDesign name="plus" size={45} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
              <Text style={styles.modalTitle}>Add Company</Text>
              <Text>Company Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setCompanyName(text)}
                value={companyName}
              />
              <Text>Description:</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setDescription(text)}
                value={description}
                multiline
              />
              <Button title="Upload Logo" onPress={selectLogo} />
              {logoUri && <Image source={{ uri: logoUri }} style={styles.logoPreview} />}
              <Button title="Add" onPress={handleAddCompany} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

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
    borderRadius: Spacing * 1.5,
    paddingVertical: Spacing * 1.5,
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
  viewD: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: Spacing * 2,
    borderRadius: Spacing * 1.5,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: Spacing,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: Spacing,
  },
  logoPreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: Spacing,
  },
  logoPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: Spacing,
    backgroundColor: '#e0e0e0',
  },
  titlePlaceholder: {
    height: 20,
    width: '60%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
});

export default JobListingsScreen;


