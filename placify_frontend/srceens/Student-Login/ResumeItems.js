
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon component from react-native-vector-icons
import Colors from '../../constants/Colors';

const ResumeItem = ({ id, name, date, validity, onDownload, onView, onMarkAsDefault, onDelete, isDefault }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  //add confirm msg when delete resume activity.
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="file-text-o" size={24} color= {Colors.primary} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteIcon}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onView} style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDownload} style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMarkAsDefault} style={[styles.button, isDefault && styles.defaultButton]}>
          <Text style={[styles.buttonText, isDefault && styles.defaultButtonText]}>
            {isDefault ? 'Marked as Default' : 'Mark as Default'}
          </Text>
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
    marginBottom: 12,
    borderRadius: 20,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  date: {
    marginLeft: 31,
    fontSize: 14,
    color: '#666',
    marginBottom: 18,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.lightBlue,
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  defaultButton: {
    backgroundColor: '#34B433',
  },
  defaultButtonText: {
    color: Colors.background,
  },
});

export default ResumeItem;
