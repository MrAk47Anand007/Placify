import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EmailVerification = () => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    // Implement verification logic with the entered code
    console.log('Verifying code:', code); 
  };

  const handleResend = () => {
    // Implement resend verification email logic
    console.log('Resending verification code...'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Verification</Text>
      <Text style={styles.instructions}>
        Enter the code sent to your email
      </Text>
      <TextInput
        style={styles.codeInput}
        onChangeText={setCode}
        value={code}
        placeholder="Verification code"
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <Button title="Resend" onPress={handleResend} />
        <Button title="Verify" onPress={handleVerify} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    marginBottom: 15,
    textAlign: 'center',
  },
  codeInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default EmailVerification;
