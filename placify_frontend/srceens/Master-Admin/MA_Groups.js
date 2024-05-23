import React, { useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet, Image, Modal } from 'react-native';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import AmazonLogo from '../../assets/images/amazonlogo.png';
import GoogleLogo from '../../assets/images/googlelogo.png';
import SiemensLogo from '../../assets/images/volvo.png';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
          <TouchableWithoutFeedback onPress={() => handleGroupPress(item)}>
            <View style={styles.groupItem}>
              <View style={styles.content}>
                <Image source={item.logo} style={styles.groupLogo} />
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
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  groupItem: {
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing * 0.3,
  },
  groupLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: Spacing,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: responsiveFontSize(2.25),
    fontWeight: 'bold',
    color: Colors.text,
  },
  lastMessage: {
    color: '#666',
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 40,
    paddingHorizontal: 7.5,
    paddingVertical: 4,
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
