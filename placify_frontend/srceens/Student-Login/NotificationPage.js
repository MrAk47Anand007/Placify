// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([]);

//   // Function to fetch notifications from API
//   const fetchNotifications = async () => {
//     try {
//       // Make API call to fetch notifications
//       const response = await fetch('API_ENDPOINT_URL');
//       const data = await response.json();
//       setNotifications(data.notifications);
//     } catch (error) {
//       console.error('Error fetching notifications:', error);
//     }
//   };

//   // Fetch notifications on component mount
//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <FlatList
//           data={notifications}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.notificationContainer}>
//               <View style={styles.notificationContent}>
//                 <Text style={styles.heading}>{item.heading}</Text>
//                 <Text style={styles.description}>{item.description}</Text>
//                 <Text style={styles.dateTime}>{item.dateTime}</Text>
//               </View>
//             </View>
//           )}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 40,
//     backgroundColor: '#f4f4f4',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   notificationContainer: {
//     marginBottom: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
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
//   notificationContent: {
//     flex: 1,
//   },
//   heading: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   dateTime: {
//     fontSize: 12,
//     color: 'gray',
//   },
// });

// export default NotificationPage;







// import React, { useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       heading: "Notification 1",
//       description: "This is notification 1.",
//       dateTime: new Date().toLocaleString() // Current date and time
//     },
//     {
//       id: 2,
//       heading: "Notification 2",
//       description: "This is notification 2.",
//       dateTime: new Date().toLocaleString() // Current date and time
//     },
//     {
//       id: 3,
//       heading: "Notification 3",
//       description: "This is notification 3.",
//       dateTime: new Date().toLocaleString() // Current date and time
//     },
//     // Add more notifications as needed
//   ]);

//   return (
//     <View style={styles.container}>
//       {/* FlatList to display notifications */}
//       <FlatList
//         data={notifications}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.notificationContainer}>
//             <View style={styles.notificationContent}>
//               <Text style={styles.heading}>{item.heading}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <Text style={styles.dateTime}>{item.dateTime}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 40,
//     backgroundColor: '#f4f4f4',
//   },
//   notificationContainer: {
//     marginBottom: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
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
//   notificationContent: {
//     flex: 1,
//   },
//   heading: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   dateTime: {
//     fontSize: 12,
//     color: 'gray',
//   },
// });

// export default NotificationPage;



import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import notificationsData from './notifications.json';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Sorting notifications by dateTime in descending order (most recent first)
    const sortedNotifications = [...notificationsData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    setNotifications(sortedNotifications);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.notificationContainer}>
              <View style={styles.notificationContent}>
                <Text style={styles.heading}>{item.heading}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.dateTime}>{item.dateTime}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: Colors.lightPrimary,
  },
  notificationContainer: {
    marginVertical: Spacing * 0.5,
    backgroundColor: '#fff',
    borderRadius: Spacing * 1.2,
    paddingVertical: Spacing * 1.2,
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
  notificationContent: {
    alignItems: 'left',
    marginBottom: Spacing * 0.3,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color:Colors.darkText
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 12,
    color: 'green',
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
    // fontStyle: 'italic'
  },
});

export default NotificationPage;
