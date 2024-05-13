import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import Colors from '../../constants/Colors';
// Import your logo images
import AmazonLogo from '../../assets/images/amazonlogo.png';
import GoogleLogo from '../../assets/images/googlelogo.png';
import SiemensLogo from '../../assets/images/volvo.png';

const data = [
  { id: 1, name: 'Amazon Drive', lastMessage: 'Hello there!', unreadCount: 3, logo: AmazonLogo },
  { id: 2, name: 'Google Drive', lastMessage: 'How are you?', unreadCount: 0, logo: GoogleLogo },
  { id: 3, name: 'Volvo Drive', lastMessage: 'What\'s up?', unreadCount: 1, logo: SiemensLogo },
  
];

const MA_Groups = ({ navigation: { navigate } }) => {
  const [groups, setGroups] = useState(data);

  const handleGroupPress = (group) => {
    navigate("ChatPage");
    console.log('Group pressed:', group);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groups</Text>
      </View>
      <FlatList
        data={groups}   
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleGroupPress(item)}>
            <View style={styles.groupItem}>
              <View style={styles.groupLogoContainer}>
                <Image source={item.logo} style={styles.groupLogo} />
              </View>
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              {item.unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{item.unreadCount}</Text>
                </View>
              )}
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
    backgroundColor: Colors.lightPrimary,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    backgroundColor: Colors.primary,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  groupLogoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  groupLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    color: '#666',
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default MA_Groups;
