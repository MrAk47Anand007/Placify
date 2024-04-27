import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';

const GroupProfile = () => {
  // Sample data for group members
  const groupMembers = [
    { id: 1, name: 'John Doe', department: 'Computer Science', course: 'B.E.', avatar: require('../../../assets/images/female.png') },
    { id: 2, name: 'Jane Smith', department: 'Electrical Engineering', course: 'B.Tech', avatar: require('../../../assets/images/male.png') },
    { id: 3, name: 'Alice Johnson', department: 'Mechanical Engineering', course: 'B.E.', avatar: require('../../../assets/images/female.png') },
    { id: 4, name: 'Shreyas Joshi', department: 'Civil Engineering', course: 'B.E.', avatar: require('../../../assets/images/female.png') },
    // Add more members as needed
  ];

  const handleMemberPress = (member) => {
    // Handle press event for member here
    console.log('Pressed on member:', member);
  };

  return (
    <View style={styles.container}>
      {/* Group Logo */}
      <Image source={require('../../../assets/images/amazonlogo.png')} style={styles.logo} />
      
      {/* Group Name */}
      <Text style={styles.groupName}>Amazon Drive</Text>
      
      {/* Members heading */}
      <Text style={styles.membersHeading}>Group Members List</Text>
      
      {/* List of Group Members */}
      <FlatList
        data={groupMembers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMemberPress(item)} style={styles.card}>
            <View style={styles.memberContainer}>
              <Image source={item.avatar} style={styles.avatar} />
              <View>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberDetails}>{item.course} - {item.department}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
    // paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: Colors.primary,
    borderRadius: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 15,
  },
  card: {
    marginTop: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 40,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  groupName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  membersHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 30,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberDetails: {
    fontSize: 14,
    color: 'gray',
  },
});

export default GroupProfile;