// import React, { useState,useContext,useEffect } from 'react';
// import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you have this package
// import Colors from "../../../constants/Colors";
// import { ResumeContext } from './ResumeContext';

// const ExtraCoCurricularActivitiesForm = () => {

//   const { resumeData, updateResumeData } = useContext(ResumeContext);

//   const [coCurricularActivities, setCoCurricularActivities] = useState(
//     resumeData.coCurricularActivities ? resumeData.coCurricularActivities : [{ key: Math.random().toString(), value: '' }]
//   );

//   const [extraCurricularActivities, setExtraCurricularActivities] = useState(
//     resumeData.extraCurricularActivities ? resumeData.extraCurricularActivities : [{ key: Math.random().toString(), value: '' }]
//   );

//   const handleAddActivity = (setActivities) => {
//     setActivities(currentActivities => [...currentActivities, '']); // Add an empty string
//   };

//   const handleRemoveActivity = (key, setActivities) => {
//     setActivities(currentActivities => currentActivities.filter((_, index) => index !== key));
//   };

//   const handleChangeActivity = (key, value, setActivities) => {
//     setActivities(currentActivities => currentActivities.map((activity, index) => (index === key ? value : activity)));
//   };

//   const updateContextActivities = () => {
//     updateResumeData({
//       extraCurricularActivities: extraCurricularActivities,
//       coCurricularActivities: coCurricularActivities,
//     });
//   };

//   useEffect(updateContextActivities, [extraCurricularActivities, coCurricularActivities]);

//   return (
//     <ScrollView style={styles.scrollView}>
//       <View style={styles.formContainer}>
//         {/* Extra Curricular Activities */}
//         <Text>Extra Curricular Activities</Text>
//         {extraCurricularActivities.map((activity, index) => (
//           <View key={activity.key} style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Activity"
//               value={activity.value}
//               onChangeText={(text) => handleChangeActivity(activity.key, text, setExtraCurricularActivities)}
//             />
//             <TouchableOpacity onPress={() => handleRemoveActivity(activity.key, setExtraCurricularActivities)}>
//               <Icon name="delete" size={24} color={Colors.dark} />
//             </TouchableOpacity>
//           </View>
//         ))}
//         <Text style={styles.addActivity} onPress={() => handleAddActivity(setExtraCurricularActivities)}>+ Add Activity</Text>

//         {/* Co-Curricular Activities */}
//         <Text>Co-Curricular Activities</Text>
//         {coCurricularActivities.map((activity, index) => (
//           <View key={activity.key} style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Activity"
//               value={activity.value}
//               onChangeText={(text) => handleChangeActivity(activity.key, text, setCoCurricularActivities)}
//             />
//             <TouchableOpacity onPress={() => handleRemoveActivity(activity.key, setCoCurricularActivities)}>
//               <Icon name="delete" size={24} color={Colors.dark} />
//             </TouchableOpacity>
//           </View>
//         ))}
//         <Text style={styles.addActivity} onPress={() => handleAddActivity(setCoCurricularActivities)}>+ Add Activity</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     marginBottom: 20,
//   },
//   formContainer: {
//     padding: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: Colors.lightGray,
//     padding: 10,
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   addActivity: {
//     color: Colors.primary,
//     marginTop: 5,
//     alignSelf: 'flex-end',
//   },
//   // Add more styles as needed
// });

// export default ExtraCoCurricularActivitiesForm;

import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../../../constants/Colors";
import { ResumeContext } from './ResumeContext';

const ExtraCoCurricularActivitiesForm = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const [coCurricularActivities, setCoCurricularActivities] = useState(
    resumeData.coCurricularActivities ? resumeData.coCurricularActivities : [{ key: Math.random().toString(), value: '' }]
  );

  const [extraCurricularActivities, setExtraCurricularActivities] = useState(
    resumeData.extraCurricularActivities ? resumeData.extraCurricularActivities : [{ key: Math.random().toString(), value: '' }]
  );

  const handleAddActivity = (setActivities) => {
    setActivities(currentActivities => [...currentActivities, { key: Math.random().toString(), value: '' }]);
  };

  const handleRemoveActivity = (key, setActivities) => {
    setActivities(currentActivities => currentActivities.filter(activity => activity.key !== key));
  };

  const handleChangeActivity = (key, value, setActivities) => {
    setActivities(currentActivities => currentActivities.map(activity => (activity.key === key ? { ...activity, value } : activity)));
  };

  const updateContextActivities = () => {
    updateResumeData({
      ...resumeData,
      extraCurricularActivities: extraCurricularActivities,
      coCurricularActivities: coCurricularActivities,
    });
  };

  useEffect(() => {
    updateContextActivities();
  }, [extraCurricularActivities, coCurricularActivities]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.formContainer}>
        {/* Extra Curricular Activities */}
        <Text style={styles.sectionTitle}>Extra Curricular Activities</Text>
        {extraCurricularActivities.map((activity, index) => (
          <View key={activity.key} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Activity"
              value={activity.value}
              onChangeText={(text) => handleChangeActivity(activity.key, text, setExtraCurricularActivities)}
            />
            <TouchableOpacity onPress={() => handleRemoveActivity(activity.key, setExtraCurricularActivities)}>
              <Icon name="delete" size={24} color={Colors.dark} />
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.addActivity} onPress={() => handleAddActivity(setExtraCurricularActivities)}>+ Add Activity</Text>

        {/* Co-Curricular Activities */}
        <Text style={styles.sectionTitle}>Co-Curricular Activities</Text>
        {coCurricularActivities.map((activity, index) => (
          <View key={activity.key} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Activity"
              value={activity.value}
              onChangeText={(text) => handleChangeActivity(activity.key, text, setCoCurricularActivities)}
            />
            <TouchableOpacity onPress={() => handleRemoveActivity(activity.key, setCoCurricularActivities)}>
              <Icon name="delete" size={24} color={Colors.dark} />
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.addActivity} onPress={() => handleAddActivity(setCoCurricularActivities)}>+ Add Activity</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 20,
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  addActivity: {
    color: Colors.primary,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Add more styles as needed
});

export default ExtraCoCurricularActivitiesForm;
