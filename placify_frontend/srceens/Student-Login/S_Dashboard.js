import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import NotificationPage from "./NotificationPage";
import notificationsData from './notifications.json';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


const S_Dashboard = ({ navigation: { navigate } }) => {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Sorting notifications by dateTime in descending order (most recent first)
    const sortedNotifications = [...notificationsData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    setNotifications(sortedNotifications);
  }, []);

  const handleLeftBoxPress = () => {
    navigate("NotificationPage");
  };

  const handleRightBoxPress = () => {
    // Navigate to the right box's screen
    // navigation.navigate('RightBoxScreen');
  };

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.Name}>
          Hi, Account Holder...
        </Text>
      </View>
      
      <View style={styles.circle}>
        <Image
          source={require("../../assets/images/boy.png")}
          style={styles.profileImage}
        />
      </View>
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




