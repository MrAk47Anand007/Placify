// new file for modal
// LogoutModal.js

import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Animated } from 'react-native';
import Colors from '../../constants/Colors';
const LogoutModal = ({ visible, onClose, onConfirm }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, scaleAnim]);

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.modalText}>Are you sure you want to Logout?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Yesbutton} onPress={onConfirm}>
              <Text style={styles.YesbuttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Cancelbutton} onPress={onClose}>
              <Text style={styles.CancelbuttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 350, // Increased width
    padding: 30, // Increased padding
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20, // Increased font size
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Yesbutton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  Cancelbutton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  YesbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  CancelbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default LogoutModal;