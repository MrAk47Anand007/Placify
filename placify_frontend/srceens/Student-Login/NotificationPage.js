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
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import notificationsData from './notifications.json';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Sorting notifications by dateTime in descending order (most recent first)
    const sortedNotifications = [...notificationsData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    setNotifications(sortedNotifications);
  }, []);

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f4f4f4',
  },
  notificationContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
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
  notificationContent: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 12,
    color: 'gray',
  },
});

export default NotificationPage;
