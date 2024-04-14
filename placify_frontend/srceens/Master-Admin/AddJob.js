import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";

const AddJob = ({}) => {
  const [companyName, setCompanyName] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [ctc, setCtc] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selectionProcess, setSelectionProcess] = useState('');
  const [logo, setLogo] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setLogo(response);
      }
    });
  };

  const handleFormSubmit = () => {
    // Check if all fields are filled
    if (companyName && employmentType && ctc && location && description && selectionProcess) {
      // All fields are filled
      // You can handle the form submission here
      alert("Form submitted successfully!");
    } else {
      // Some fields are empty
      alert("Please fill all the fields!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Add Job</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Upload Logo</Text>
        </TouchableOpacity>
        {logo && <Image source={{ uri: logo.uri }} style={styles.logo} />}
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={companyName}
          onChangeText={text => setCompanyName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Employment Type (Fulltime/Remote working/Internship)"
          value={employmentType}
          onChangeText={text => setEmploymentType(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CTC (in numbers)"
          value={ctc}
          onChangeText={text => setCtc(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={text => setLocation(text)}
        />
        <TextInput
          style={[styles.input, styles.largeInput]}
          placeholder="Description"
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          style={[styles.input, styles.largeInput]}
          placeholder="Selection Process Details"
          multiline={true}
          value={selectionProcess}
          onChangeText={text => setSelectionProcess(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.large,
    paddingBottom: Spacing.large,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.xxLarge,
    fontWeight: "bold",
    marginBottom: Spacing.large,
    color: Colors.text,
  },
  uploadButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: 5,
    marginBottom: Spacing.medium,
  },
  buttonText: {
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: Spacing.large,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: Colors.borderWithOpacity,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: Spacing.medium,
    marginBottom: Spacing.medium,
    fontSize: FontSize.medium,
    color: Colors.text,
  },
  largeInput: {
    height: 100,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: 5,
    marginTop: Spacing.medium,
  },
});

export default AddJob;
