import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatPage = () => {
  const [message, setMessage] = useState('');

  // Placeholder for sending a message (update with actual functionality)
  const sendMessage = () => {
    console.log(message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Group Name" subtitle="Active now" />
        <Appbar.Action icon="camera" onPress={() => {}} />
        <Image source={require('../../assets/images/a2.png')} style={styles.logo} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {/* Dummy messages for demonstration */}
        <Card style={styles.messageCard}>
          <Card.Content>
            <Text style={styles.senderName}>John Doe</Text>
            <Text>Hey, how are you doing?</Text>
            <Text style={styles.messageTime}>10:45 AM</Text>
          </Card.Content>
        </Card>
        <Card style={styles.messageCard}>
          <Card.Content>
            <Text style={styles.senderName}>Jane Smith</Text>
            <Text>I'm good, thanks!</Text>
            <Text style={styles.messageTime}>10:50 AM</Text>
          </Card.Content>
        </Card>
        {/* Repeat for each message */}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Icon name="send" size={30} color="#6200ee" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messagesContainer: {
    flexGrow: 1,
    padding: 10,
  },
  messageCard: {
    marginVertical: 5,
  },
  senderName: {
    fontWeight: 'bold',
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
  },
});

export default ChatPage;
