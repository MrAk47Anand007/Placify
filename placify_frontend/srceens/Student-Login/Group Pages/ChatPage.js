import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// ChatPage component
const ChatPage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim().length > 0) {
      console.log(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {/* Dummy messages for demonstration */}
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, styles.receivedMessage]}>
            <Text style={styles.messageText}>Hey, how are you doing? Is your health good?</Text>
            <Text style={styles.messageTime}>10:45 AM</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={[styles.messageBubble, styles.sentMessage]}>
            <Text style={styles.messageText}>I'm good, thanks!</Text>
            <Text style={styles.messageTime}>10:50 AM</Text>
          </View>
        </View>
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

// Main App component
const App = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Image source={require('../../../assets/images/amazonlogo.png')} style={styles.logo} />
          <Appbar.Content title="Amazon Drive" subtitle="Active now" onPress={() => navigation.navigate('GroupProfile')} />
          <Appbar.Action icon="camera" onPress={() => {}} />
        </Appbar.Header>
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === "ios" ? "padding" : null} 
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <ChatPage />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  messagesContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Adjusted padding to account for input container
  },
  messageContainer: {
    alignItems: 'flex-start', // Align messages to the left by default
    marginVertical: 10,
    marginHorizontal: 5,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  receivedMessage: {
    backgroundColor: '#f0f0f0', // Light gray background for received messages
    alignSelf: 'flex-start', // Align received messages to the left
  },
  sentMessage: {
    backgroundColor: '#dcf8c6', // Light green background for sent messages
    alignSelf: 'flex-end', // Align sent messages to the right
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
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default App;











// import React, { useState } from 'react';
// import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { Appbar, Card } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const ChatPage = () => {
//   const [message, setMessage] = useState('');

//   // Placeholder for sending a message (update with actual functionality)
//   const sendMessage = () => {
//     console.log(message);
//     setMessage('');
//   };

//   return (
//     <View style={styles.container}>
//       <Appbar.Header>
//         <Appbar.Content title="Group Name" subtitle="Active now" />
//         <Appbar.Action icon="camera" onPress={() => {}} />
//         <Image source={require('./path/to/group_logo.png')} style={styles.logo} />
//       </Appbar.Header>

//       <ScrollView contentContainerStyle={styles.messagesContainer}>
        // {/* Dummy messages for demonstration */}
        // <Card style={styles.messageCard}>
        //   <Card.Content>
        //     <Text style={styles.senderName}>John Doe</Text>
        //     <Text>Hey, how are you doing?</Text>
        //     <Text style={styles.messageTime}>10:45 AM</Text>
        //   </Card.Content>
        // </Card>
        // <Card style={styles.messageCard}>
        //   <Card.Content>
        //     <Text style={styles.senderName}>Jane Smith</Text>
        //     <Text>I'm good, thanks!</Text>
        //     <Text style={styles.messageTime}>10:50 AM</Text>
        //   </Card.Content>
        // </Card>
        // {/* Repeat for each message */}
//       </ScrollView>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={setMessage}
//         />
//         <TouchableOpacity onPress={sendMessage}>
//           <Icon name="send" size={30} color="#6200ee" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   messagesContainer: {
//     flexGrow: 1,
//     padding: 10,
//   },
//   messageCard: {
//     marginVertical: 5,
//   },
//   senderName: {
//     fontWeight: 'bold',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   input: {
//     flex: 1,
//     marginRight: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     padding: 10,
//   },
// });

// export default ChatPage;