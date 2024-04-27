import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import ResumeItem from './ResumeItems';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using react-native-vector-icons

const resumes = [
  { id: 1, name: 'John Doe Resume', date: '2024-01-15', validity: true },
  { id: 2, name: 'John Doe Resume', date: '2024-01-15', validity: true },
  // Add more resumes as needed
];

const ResumesScreen = () => {
  // Placeholder functions for Edit and Filter actions
  const onEdit = () => {
    console.log('Edit action');
  };

  const onFilter = () => {
    console.log('Filter action');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Resumes</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onFilter} style={styles.iconButton}>
            <Icon name="filter" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {resumes.map((resume) => (
            <ResumeItem
              key={resume.id}
              name={resume.name}
              date={resume.date}
              validity={resume.validity}
              onDownload={() => console.log('Download', resume.id)}
              onView={() => console.log('View', resume.id)}
              onMarkAsDefault={() => console.log('Mark as Default', resume.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});

export default ResumesScreen;