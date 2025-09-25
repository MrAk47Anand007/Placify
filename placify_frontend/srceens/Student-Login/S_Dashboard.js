// import React, { useState, useRef, useEffect } from "react";
// import { StyleSheet, View, FlatList, SafeAreaView, ScrollView, Image, TouchableOpacity, Text } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";
// import NotificationPage from "./NotificationPage";
// import notificationsData from './notifications.json';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';


// const S_Dashboard = ({ navigation: { navigate } }) => {

//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Sorting notifications by dateTime in descending order (most recent first)
//     const sortedNotifications = [...notificationsData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
//     setNotifications(sortedNotifications);
//   }, []);

//   const handleLeftBoxPress = () => {
//     navigate("NotificationPage");
//   };

//   const handleRightBoxPress = () => {
//     navigate("ProfileDetailsForm");
//   };

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.Name}>
//           Hi, Account Holder...
//         </Text>
//       </View>
      
//       <View style={styles.circle}>
//         <Image
//           source={require("../../assets/images/boy.png")}
//           style={styles.profileImage}
//         />
//       </View>
//       <View style={styles.boxContainer}>
//         <TouchableOpacity onPress={handleLeftBoxPress} style={styles.box}>
//           <Text style={styles.boxText}>Notifications</Text>
//           <View style={styles.line} />
//           <View style={styles.Lcontainer}>

//             <FlatList
//               data={notifications}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => (
//                 <View style={styles.notificationContainer}>
//                   <View style={styles.notificationContent}>
//                     <Text style={styles.heading}>{item.heading}</Text>
//                     <Text style={styles.dateTime}>{item.dateTime}</Text>
//                   </View>
//                 </View>
//               )}
//             />

//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleRightBoxPress} style={styles.box}>
//           <Text style={styles.boxText}>Profile Details</Text>
//           <View style={styles.line} />
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileDetailText}><Text style={styles.boldText}>Branch :</Text> Computer Engineering</Text>
//             <Text style={styles.profileDetailText}><Text style={styles.boldText}>Batch :</Text> 2023-24</Text>
//             <Text style={styles.profileDetailText}><Text style={styles.boldText}>No. of Applied :</Text> 50</Text>
//             <Text style={styles.profileDetailText}><Text style={styles.boldText}>No. of Offers :</Text> 00</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: Spacing * 4,
//     backgroundColor: Colors.background,
//   },
//   Name: {
//     fontSize: responsiveFontSize(2.6),
//     fontWeight: 'bold',
//     color: Colors.primary,
//     fontStyle: 'italic',
//     marginBottom: Spacing * 3,
//   },
//   circle: {
//     width: Spacing * 36,
//     height: Spacing * 36,
//     borderRadius: Spacing * 18,
//     backgroundColor: Colors.background,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 4,
//     borderColor: Colors.primary,
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     elevation: 8,
//     marginBottom: Spacing * 4,
//   },
//   profileImage: {
//     width: '92%',
//     height: '92%',
//     borderRadius: 180,
//   },
//   boxContainer: {
//     marginTop: Spacing * 2,
//     flexDirection: 'row',
//     justifyContent: 'center', // Adjust as needed
//     width: '90%',
//     marginBottom: Spacing * 2,
//   },
//   box: {
//     flex: 1,
//     height: Spacing * 34,
//     backgroundColor: Colors.primary,
//     borderRadius: Spacing * 4,
//     // justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     elevation: 8,
//     marginLeft: Spacing, // Add some margin to the left of the box
//     marginRight: Spacing, // Add some margin to the right of the box
//   },
//   boxText: {
//     marginTop: Spacing * 1.4,
//     color: Colors.onPrimary,
//     fontSize: FontSize.medium,
//     fontFamily: Font.bold,
//     fontWeight: 'bold',
//   },

//   notificationContainer: {
//     marginBottom: 10,
//     marginHorizontal: 5,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     paddingHorizontal: 5,
//     paddingVertical: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   heading: {
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 11,
//     marginBottom: 5,
//   },
//   dateTime: {
//     fontSize: 11,
//     color: 'gray',
//   },
//   line: {
//     width: '100%',
//     height: 1,
//     backgroundColor: Colors.onPrimary,
//     marginVertical: Spacing * 0.3,
//     marginBottom: Spacing * 1.3,
//   },
//   profileDetails: {
//     alignItems: 'flex-start',
//   },
//   profileDetailText: {
//     fontSize: FontSize.medium,
//     color: Colors.onPrimary,
//     marginBottom: Spacing * 1.2,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
// });

// export default S_Dashboard;







// import React, { useState, useRef, useEffect } from "react";
// import { StyleSheet, View, FlatList, SafeAreaView, ScrollView, Image, TouchableOpacity, Text, Alert } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";
// import NotificationPage from "./NotificationPage";
// import notificationsData from './notifications.json';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import { launchImageLibrary } from 'react-native-image-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const S_Dashboard = ({ navigation: { navigate } }) => {

//   const defaultProfileImage = require("../../assets/images/boy.png");
//   const [profileImage, setProfileImage] = useState(defaultProfileImage);


//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Sorting notifications by dateTime in descending order (most recent first)
//     const sortedNotifications = [...notificationsData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
//     setNotifications(sortedNotifications);
//   }, []);

//   const handleLeftBoxPress = () => {
//     navigate("NotificationPage");
//   };

//   const handleRightBoxPress = () => {
//     // Navigate to the right box's screen
//     // navigation.navigate('RightBoxScreen');
//     navigate("ProfileDetailsForm");
//   };

//   const handleImageUpload = async () => {
//     try {
//       const result = await launchImageLibrary({ mediaType: 'photo' });
  
//       if (result.didCancel) {
//         // User cancelled image selection
//         return;
//       }
  
//       // Save the URI of the selected image to AsyncStorage
//       await AsyncStorage.setItem('profileImageUri', result.assets[0].uri);
  
//       // Set the profile image URI state
//       setProfileImage({ uri: result.assets[0].uri });
  
//       // Show a success message or perform any other necessary actions
//       Alert.alert("Success", "Profile image uploaded successfully.");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       // Show an error message if upload fails
//       Alert.alert("Error", "Failed to upload profile image. Please try again.");
//     }
//   };


//   useEffect(() => {
//     const retrieveProfileImageUri = async () => {
//       try {
//         // Retrieve the saved profile image URI from AsyncStorage
//         const uri = await AsyncStorage.getItem('profileImageUri');
//         if (uri) {
//           // Set the profile image URI state if it exists
//           setProfileImage({ uri });
//         } else {
//           // If URI is null, set the default profile image
//           setProfileImage(defaultProfileImage);
//         }
//       } catch (error) {
//         console.error("Error retrieving profile image:", error);
//       }
//     };
  
//     retrieveProfileImageUri();
//   }, []);

import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, ScrollView, Image, TouchableOpacity, Text, Alert } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import NotificationPage from "./NotificationPage";
import notificationsData from './notifications.json';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage'; // Import Firebase storage
import * as SecureStore from 'expo-secure-store';


const config = require('../../config');
const uriToBlob = (uri) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new Error('uriToBlob failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
};

const uploadFileToFirebase = async (file, remotePath) => {
  if (!file) {
    console.warn('No file provided for upload');
    return null;
  }

  try {
    const fileBlob = await uriToBlob(file);
    const fileName = file.split('/').pop();
    const storageRef = storage().ref(`${remotePath}/${fileName}`);
    const snapshot = await storageRef.put(fileBlob);
    const downloadUrl = await storage().ref(`${remotePath}/${fileName}`).getDownloadURL();
    return downloadUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    Alert.alert('Error', 'There was an error uploading the file.');
    return null;
  }
};

const S_Dashboard = ({ navigation: { navigate } }) => {
  const defaultProfileImage = require("../../assets/images/boy.png");
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [notifications, setNotifications] = useState([]);
  const [userData, setUserData] = useState(null);

  

  useEffect(() => {
    const sortedNotifications = [...notificationsData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    setNotifications(sortedNotifications);
  }, []);

  const handleLeftBoxPress = () => {
    navigate("NotificationPage");
  };

  const handleRightBoxPress = () => {
    navigate("ProfileDetailsForm");
  };

  const handleImageUpload = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });

      if (result.didCancel) {
        return;
      }

      const uri = result.assets[0].uri;

      // Upload the image to Firebase and get the download URL
      const remotePath = 'profileImages';
      const downloadUrl = await uploadFileToFirebase(uri, remotePath);

      if (downloadUrl) {
        // Save the download URL to AsyncStorage
        await AsyncStorage.setItem('profileImageUri', downloadUrl);

        // Set the profile image URI state
        setProfileImage({ uri: downloadUrl });

        Alert.alert("Success", "Profile image uploaded successfully.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Error", "Failed to upload profile image. Please try again.");
    }
  };

  useEffect(() => {
    const retrieveProfileImageUri = async () => {
      try {
        const uri = await AsyncStorage.getItem('profileImageUri');
        if (uri) {
          setProfileImage({ uri });
        } else {
          setProfileImage(defaultProfileImage);
        }
      } catch (error) {
        console.error("Error retrieving profile image:", error);
      }
    };

    retrieveProfileImageUri();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentId = await SecureStore.getItemAsync('studentId');
        const response = await fetch(`${config.apiEndpoint}/api/profile/${studentId}`); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const data = await response.json();
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.Name}>
       Hi {userData ? `${userData.firstName} ${userData.lastName}` : 'Account Holder'}...
        </Text>
      </View>
      
      <TouchableOpacity onPress={handleImageUpload} style={styles.circle}>
      <Image
          source={{ uri: profileImage.uri }}
          defaultSource={defaultProfileImage}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.boxContainer}>
        <TouchableOpacity onPress={handleLeftBoxPress} style={styles.box}>
          <Text style={styles.boxText}>Notifications</Text>
          <View style={styles.line} />
          <View style={styles.Lcontainer}>

            <FlatList
              data={notifications}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.notificationContainer}>
                  <View style={styles.notificationContent}>
                    <Text style={styles.heading}>{item.heading}</Text>
                    <Text style={styles.dateTime}>{item.dateTime}</Text>
                  </View>
                </View>
              )}
            />

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRightBoxPress} style={styles.box}>
          <Text style={styles.boxText}>Profile Details</Text>
          <View style={styles.line} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileDetailText}><Text style={styles.boldText}>Branch :</Text> Computer Engineering</Text>
            <Text style={styles.profileDetailText}><Text style={styles.boldText}>Batch :</Text> 2023-24</Text>
            <Text style={styles.profileDetailText}><Text style={styles.boldText}>No. of Applied :</Text> 50</Text>
            <Text style={styles.profileDetailText}><Text style={styles.boldText}>No. of Offers :</Text> 00</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Spacing * 4,
    backgroundColor: Colors.background,
  },
  Name: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: 'bold',
    color: Colors.primary,
    fontStyle: 'italic',
    marginBottom: Spacing * 3,
  },
  circle: {
    width: Spacing * 36,
    height: Spacing * 36,
    borderRadius: Spacing * 18,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    marginBottom: Spacing * 4,
  },
  profileImage: {
    width: '92%',
    height: '92%',
    borderRadius: 180,
  },
  boxContainer: {
    marginTop: Spacing * 2,
    flexDirection: 'row',
    justifyContent: 'center', // Adjust as needed
    width: '90%',
    marginBottom: Spacing * 2,
  },
  box: {
    flex: 1,
    height: Spacing * 34,
    backgroundColor: Colors.primary,
    borderRadius: Spacing * 4,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    marginLeft: Spacing, // Add some margin to the left of the box
    marginRight: Spacing, // Add some margin to the right of the box
  },
  boxText: {
    marginTop: Spacing * 1.4,
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
    fontFamily: Font.bold,
    fontWeight: 'bold',
  },

  notificationContainer: {
    marginBottom: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
  },
  description: {
    fontSize: 11,
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 11,
    color: 'gray',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.onPrimary,
    marginVertical: Spacing * 0.3,
    marginBottom: Spacing * 1.3,
  },
  profileDetails: {
    alignItems: 'flex-start',
  },
  profileDetailText: {
    fontSize: FontSize.medium,
    color: Colors.onPrimary,
    marginBottom: Spacing * 1.2,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default S_Dashboard;
