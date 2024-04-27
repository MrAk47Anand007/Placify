import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: 1, name: 'Amazon Drive', lastMessage: 'Hello there!', unreadCount: 3 },
  { id: 2, name: 'Google Drive', lastMessage: 'How are you?', unreadCount: 0 },
  { id: 3, name: 'Simens Drive', lastMessage: 'What\'s up?', unreadCount: 1 },
  // Add more group data as needed
];

const S_Groups = ({ navigation: { navigate } }) => {
  const [groups, setGroups] = useState(data);

  const renderGroupItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity style={styles.groupItem} onPress={() => handleGroupPress(item)}>
        {/* Placeholder for group logo */}
        <View style={styles.groupLogo} />
        <View style={styles.groupInfo}>
          <Text style={styles.groupName}>{item.name}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );

  const handleGroupPress = (group) => {
    navigate("ChatPage");
    console.log('Group pressed:', group);
  };

  return (
    <View style={styles.container}>
      {/* Header for the groups */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Company Groups</Text>
      </View>
      <FlatList
        data={groups}
        renderItem={renderGroupItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  groupLogo: {
    width: 50, // Adjust the width according to your design
    height: 50, // Adjust the height according to your design
    borderRadius: 25, // Half of the width and height to make it circular
    backgroundColor: '#ccc', // Placeholder background color
    marginRight: 10,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial', // Change the font family as needed
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  lastMessage: {
    color: '#555',
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  unreadText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default S_Groups;