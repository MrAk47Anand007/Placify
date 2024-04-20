// import React from "react";
// import { StyleSheet, SafeAreaView } from "react-native";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";
// import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";

// const MA_StuDetails = ({}) => {
//   return (
//     <SafeAreaView style={styles.container}>
      
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: Colors.background,
//   }
// });

// export default MA_StuDetails;

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Modal, Button, ScrollView, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
// import * as XLSX from 'xlsx';

const students = [
  { id: '1', fullName: 'John Doe', mobileNo: '1234567890', course: 'Computer Science', specialization: 'AI' },
  // Add more students as needed
];

const StudentListScreen = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);

  const courses = ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering'];
  const specializations = {
    'Computer Science': ['AI', 'Machine Learning', 'Software Engineering'],
    'Mechanical Engineering': ['Robotics', 'Thermodynamics'],
    'Electrical Engineering': ['Power Systems', 'Electronics'],
  };

  const handleSelectStudent = (id) => {
    setSelectedStudents(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(studentId => studentId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDownload = () => {
    const filtered = students.filter(student => selectedStudents.includes(student.id));
    const ws = XLSX.utils.json_to_sheet(filtered.map(({ id, fullName, mobileNo, course, specialization }) => ({
      FullName: fullName,
      MobileNo: mobileNo,
      Course: course,
      Specialization: specialization,
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    const exportFileName = "students.xlsx";
    XLSX.writeFile(wb, exportFileName);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setSelectedSpecializations([]);
  };

  const handleSelectSpecialization = (specialization) => {
    setSelectedSpecializations(prevSelected => {
      if (prevSelected.includes(specialization)) {
        return prevSelected.filter(spec => spec !== specialization);
      } else {
        return [...prevSelected, specialization];
      }
    });
  };

  const filteredStudents = students.filter(student => {
    return selectedCourse ? student.course === selectedCourse && selectedSpecializations.includes(student.specialization) : true;
  });

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CheckBox value={selectedStudents.includes(item.id)} onValueChange={() => handleSelectStudent(item.id)} />
      <View style={styles.studentDetails}>
        <Text style={styles.studentName}>{item.fullName}</Text>
        <Text>{item.mobileNo}</Text>
        <Text>{`${item.course}, ${item.specialization}`}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Applied Students</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleDownload}>
            <Icon name="download" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilterModalVisible(true)} style={styles.iconButton}>
            <Icon name="filter" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredStudents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {renderFilterModal()}
    </SafeAreaView>
  );

  // Function to render filter modal
  function renderFilterModal() {
    return (
      <Modal visible={filterModalVisible} animationType="slide" onRequestClose={() => setFilterModalVisible(false)}>
        <ScrollView style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Course</Text>
          {courses.map(course => (
            <TouchableOpacity key={course} style={styles.modalButton} onPress={() => handleSelectCourse(course)}>
              <Text style={styles.modalButtonText}>{course}</Text>
              <CheckBox value={selectedCourse === course} onValueChange={() => handleSelectCourse(course)} />
            </TouchableOpacity>
          ))}
          {selectedCourse && (
            <>
              <Text style={styles.modalTitle}>Select Specialization(s)</Text>
              {specializations[selectedCourse].map(specialization => (
                <TouchableOpacity key={specialization} style={styles.modalButton} onPress={() => handleSelectSpecialization(specialization)}>
                  <Text style={styles.modalButtonText}>{specialization}</Text>
                  <CheckBox
                    value={selectedSpecializations.includes(specialization)}
                    onValueChange={() => handleSelectSpecialization(specialization)}
                  />
                </TouchableOpacity>
              ))}
            </>
          )}
          <Button title="Apply Filters" onPress={() => setFilterModalVisible(false)} />
        </ScrollView>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  container: {
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
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  studentDetails: {
    marginLeft: 10,
  },
  studentName: {
    fontWeight: 'bold',
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalButtonText: {
    fontSize: 16,
  },
  // Add other styles as needed
});

export default StudentListScreen;