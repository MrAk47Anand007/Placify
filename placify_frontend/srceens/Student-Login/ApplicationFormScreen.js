import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Button, TextInput, Text, Checkbox, useTheme } from 'react-native-paper';
import Colors from "../../constants/Colors";
// import DocumentPicker from 'react-native-document-picker';

const ApplicationFormScreen = ({ navigation }) => {
  const [resume, setResume] = useState(null);
  const [liveBacklogs, setLiveBacklogs] = useState('');
  const [deadBacklogs, setDeadBacklogs] = useState('');
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const { colors } = useTheme(); // Using theme colors for styling

//   const handleResumeUpload = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.pdf],
//       });
//       setResume(res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         Alert.alert('Canceled', 'Resume upload was canceled.');
//       } else {
//         Alert.alert('Error', 'An error occurred during resume upload.');
//         console.error(err);
//       }
//     }
//   };

  const handleSubmit = () => {
    if (!declarationChecked) {
      Alert.alert('Declaration Required', 'You must agree to the declaration before submitting.');
      return;
    }
    Alert.alert('Application Submitted', 'Your application has been submitted successfully.');
    // Handle actual submission logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        {/* <Button icon="upload" mode="contained" onPress={handleResumeUpload} style={styles.button}> */}
        <Button icon="upload" mode="contained" style={styles.button}>
          Upload Resume (PDF)
        </Button>
        {resume && <Text style={styles.resumeText}>Selected: {resume.name}</Text>}

        <TextInput
          label="Live Backlogs"
          mode="outlined"
          keyboardType="numeric"
          value={liveBacklogs}
          onChangeText={setLiveBacklogs}
          style={styles.input}
        />

        <TextInput
          label="Dead Backlogs"
          mode="outlined"
          keyboardType="numeric"
          value={deadBacklogs}
          onChangeText={setDeadBacklogs}
          style={styles.input}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={declarationChecked ? 'checked' : 'unchecked'}
            onPress={() => setDeclarationChecked(!declarationChecked)}
            color={Colors.primary}
          />
          <Text style={styles.checkboxLabel}>I declare that all information provided is correct.</Text>
        </View>

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit Application
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
    backgroundColor: Colors.primary,
  },
  resumeText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ApplicationFormScreen;