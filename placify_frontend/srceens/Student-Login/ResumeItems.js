import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResumeItem = ({ name, date, validity, onDownload, onView, onMarkAsDefault }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.validity}>{validity ? 'Valid' : 'Invalid'}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onView} style={styles.button}>
          <Text>View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDownload} style={styles.button}>
          <Text>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMarkAsDefault} style={styles.button}>
          <Text>Mark as Default</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Black color for the text
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  validity: {
    fontSize: 14,
    color: '#308000', // Keeping the green color for validity, adjust as needed
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007bff', // Bootstrap primary blue
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 25,
  },
});
export default ResumeItem;