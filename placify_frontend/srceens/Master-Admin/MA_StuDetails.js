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
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

Ionicons.loadFont();

const studentsData = [
  { id: 1, name: 'John Doe', rollNo: '123', status: 'eligible', department: 'CS' },
  { id: 2, name: 'Jane Doe', rollNo: '456', status: 'blocked', department: 'IT' },
  { id: 3, name: 'Alice Smith', rollNo: '789', status: 'eligible', department: 'Mech' },
  { id: 4, name: 'Bob Johnson', rollNo: '101', status: 'blocked', department: 'Civil' },
  { id: 5, name: 'Clara Oswald', rollNo: '234', status: 'eligible', department: 'Instru' },
  { id: 6, name: 'Danny Pink', rollNo: '567', status: 'blocked', department: 'CS' },
  { id: 7, name: 'Eve Moneypenny', rollNo: '890', status: 'eligible', department: 'IT' },
  { id: 8, name: 'Frank Underwood', rollNo: '112', status: 'blocked', department: 'Mech' },
];

const departments = ['CS', 'IT', 'Mech', 'Civil', 'Instru'];

function filterStudents(students, searchQuery, selectedDepartments) {
  return students.filter(student => {
    const nameMatch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const departmentMatch = selectedDepartments.length === 0 || selectedDepartments.includes(student.department);
    return nameMatch && departmentMatch;
  });
}

function StudentsList({ status, searchQuery, selectedDepartments }) {
  const navigation = useNavigation(); // Get the navigation object

  const filteredStudents = filterStudents(studentsData, searchQuery, selectedDepartments).filter(student => student.status === status);

  return (
    <ScrollView>
      {filteredStudents.map((student) => (
  <TouchableOpacity
    key={student.id} // Assign unique key here
    style={styles.card}
    onPress={() => navigation.navigate("studentProfile", { studentData: student })}
  >
    <Image source={{ uri: 'https://i.pravatar.cc/150?u=' + student.id }} style={styles.photo} />
    <View>
      <Text>{student.name}</Text>
      <Text>{student.rollNo}</Text>
      <Ionicons
        name={status === 'eligible' ? 'checkmark-circle' : 'close-circle'}
        size={24}
        color={status === 'eligible' ? 'green' : 'red'}
      />
    </View>
  </TouchableOpacity>
))}
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs({ searchQuery, selectedDepartments }) {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Eligible" 
        children={() => <StudentsList status="eligible" searchQuery={searchQuery} selectedDepartments={selectedDepartments} />} 
      />
      <Tab.Screen 
        name="Blocked" 
        children={() => <StudentsList status="blocked" searchQuery={searchQuery} selectedDepartments={selectedDepartments} />} 
      />
    </Tab.Navigator>
  );
}

const MA_StuDetails = ({ navigation: { navigate } }) =>{
// export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const toggleDepartment = (department) => {
    setSelectedDepartments(prevDepartments => {
      if (prevDepartments.includes(department)) {
        return prevDepartments.filter(dep => dep !== department);
      } else {
        return [...prevDepartments, department];
      }
    });
  };

  return (
    
      <View style={styles.container}>
      <View style={styles.search}>
      <TextInput
          placeholder="Search Students"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.iconButton}>
          <Text><Ionicons name="filter" size={24} color="black" /> Filter</Text>
        </TouchableOpacity>

      </View>
       
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            {departments.map((department, index) => (
              <TouchableOpacity key={index} onPress={() => toggleDepartment(department)} style={styles.departmentOption}>
                <Text>{department}</Text>
                <Ionicons name={selectedDepartments.includes(department) ? 'checkbox-outline' : 'square-outline'} size={24} color="black" />
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
        <MyTabs searchQuery={searchQuery} selectedDepartments={selectedDepartments} />
      </View>
  
  );
}

export default MA_StuDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  searchBar: {
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection:'row-reverse',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor:'#000000',
    borderWidth:1,
    fontSize: 16,
    paddingHorizontal:100

  },
  iconButton: {
    alignSelf: 'flex-end',
    
    padding: 17,
  },
  modalView: {
    marginTop: '50%',
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  departmentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  search:{
  
    flexDirection:'row'  
  }
  
});












// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Modal, Button, ScrollView, StyleSheet } from 'react-native';
// import CheckBox from 'expo-checkbox';
// import Icon from 'react-native-vector-icons/FontAwesome';
// // import * as XLSX from 'xlsx';

// const students = [
//   { id: '1', fullName: 'John Doe', mobileNo: '1234567890', course: 'Computer Science', specialization: 'AI' },
//   // Add more students as needed
// ];

// const StudentListScreen = () => {
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const [filterModalVisible, setFilterModalVisible] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedSpecializations, setSelectedSpecializations] = useState([]);

//   const courses = ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering'];
//   const specializations = {
//     'Computer Science': ['AI', 'Machine Learning', 'Software Engineering'],
//     'Mechanical Engineering': ['Robotics', 'Thermodynamics'],
//     'Electrical Engineering': ['Power Systems', 'Electronics'],
//   };

//   const handleSelectStudent = (id) => {
//     setSelectedStudents(prevSelected => {
//       if (prevSelected.includes(id)) {
//         return prevSelected.filter(studentId => studentId !== id);
//       } else {
//         return [...prevSelected, id];
//       }
//     });
//   };

//   const handleDownload = () => {
//     const filtered = students.filter(student => selectedStudents.includes(student.id));
//     const ws = XLSX.utils.json_to_sheet(filtered.map(({ id, fullName, mobileNo, course, specialization }) => ({
//       FullName: fullName,
//       MobileNo: mobileNo,
//       Course: course,
//       Specialization: specialization,
//     })));
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Students");
//     const exportFileName = "students.xlsx";
//     XLSX.writeFile(wb, exportFileName);
//   };

//   const handleSelectCourse = (course) => {
//     setSelectedCourse(course);
//     setSelectedSpecializations([]);
//   };

//   const handleSelectSpecialization = (specialization) => {
//     setSelectedSpecializations(prevSelected => {
//       if (prevSelected.includes(specialization)) {
//         return prevSelected.filter(spec => spec !== specialization);
//       } else {
//         return [...prevSelected, specialization];
//       }
//     });
//   };

//   const filteredStudents = students.filter(student => {
//     return selectedCourse ? student.course === selectedCourse && selectedSpecializations.includes(student.specialization) : true;
//   });

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <CheckBox value={selectedStudents.includes(item.id)} onValueChange={() => handleSelectStudent(item.id)} />
//       <View style={styles.studentDetails}>
//         <Text style={styles.studentName}>{item.fullName}</Text>
//         <Text>{item.mobileNo}</Text>
//         <Text>{`${item.course}, ${item.specialization}`}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Applied Students</Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleDownload}>
//             <Icon name="download" size={24} color="#000" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setFilterModalVisible(true)} style={styles.iconButton}>
//             <Icon name="filter" size={24} color="#000" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <FlatList
//         data={filteredStudents}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       {renderFilterModal()}
//     </SafeAreaView>
//   );

//   // Function to render filter modal
//   function renderFilterModal() {
//     return (
//       <Modal visible={filterModalVisible} animationType="slide" onRequestClose={() => setFilterModalVisible(false)}>
//         <ScrollView style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Select Course</Text>
//           {courses.map(course => (
//             <TouchableOpacity key={course} style={styles.modalButton} onPress={() => handleSelectCourse(course)}>
//               <Text style={styles.modalButtonText}>{course}</Text>
//               <CheckBox value={selectedCourse === course} onValueChange={() => handleSelectCourse(course)} />
//             </TouchableOpacity>
//           ))}
//           {selectedCourse && (
//             <>
//               <Text style={styles.modalTitle}>Select Specialization(s)</Text>
//               {specializations[selectedCourse].map(specialization => (
//                 <TouchableOpacity key={specialization} style={styles.modalButton} onPress={() => handleSelectSpecialization(specialization)}>
//                   <Text style={styles.modalButtonText}>{specialization}</Text>
//                   <CheckBox
//                     value={selectedSpecializations.includes(specialization)}
//                     onValueChange={() => handleSelectSpecialization(specialization)}
//                   />
//                 </TouchableOpacity>
//               ))}
//             </>
//           )}
//           <Button title="Apply Filters" onPress={() => setFilterModalVisible(false)} />
//         </ScrollView>
//       </Modal>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   headerIcons: {
//     flexDirection: 'row',
//   },
//   iconButton: {
//     marginLeft: 15,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//   },
//   studentDetails: {
//     marginLeft: 10,
//   },
//   studentName: {
//     fontWeight: 'bold',
//   },
//   modalContent: {
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   modalButtonText: {
//     fontSize: 16,
//   },
//   // Add other styles as needed
// });

// export default StudentListScreen;