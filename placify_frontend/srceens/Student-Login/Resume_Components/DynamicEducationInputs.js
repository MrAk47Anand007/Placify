import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { ResumeContext } from './ResumeContext';
import Colors from "../../../constants/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const DynamicEducationInputs = ({ educationType, educationIndex }) => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [uploadedImages, setUploadedImages] = useState({});
  const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
  const [openToDatePicker, setOpenToDatePicker] = useState(false);

// Ensure resumeData.education is initialized as an array if undefined
useEffect(() => {
  if (!Array.isArray(resumeData.education)) {
    updateResumeData({ education: [] });
  }
}, [resumeData.education, updateResumeData]);

// Ensure the current education entry is initialized
useEffect(() => {
  if (Array.isArray(resumeData.education) && !resumeData.education[educationIndex]) {
    const updatedEducation = [...resumeData.education];
    updatedEducation[educationIndex] = {};
    updateResumeData({ education: updatedEducation });
  }
}, [educationIndex, resumeData.education, updateResumeData]);

  const currentEducation = resumeData && resumeData.education ? resumeData.education[educationIndex] || {} : {};

  const handleUpload = async (semester) => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });

      if (result.didCancel) {
        return;
      }

      const token = await SecureStore.getItemAsync('jwtToken');
      const formData = new FormData();
      formData.append('form-data', {
        uri: result.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      const uploadResponse = await axios.post(
        'http://192.168.29.209:8080/student/extract/image-data',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const extractedText = uploadResponse.data;

      setUploadedImages(prevImages => ({
        ...prevImages,
        [semester]: result.assets[0].uri,
        [`${semester}Text`]: extractedText,
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleChange = (value, field) => {
    if (resumeData && resumeData.education) {
      const updatedEducation = [...resumeData.education];
      if (!updatedEducation[educationIndex]) {
        updatedEducation[educationIndex] = {};
      }
      updatedEducation[educationIndex][field] = value;
      updateResumeData({ education: updatedEducation });
    }
  };

  const renderInputs = () => {
    if (!currentEducation) {
      return <Text>Please select an education type.</Text>;
    }

    switch (educationType) {
      case 'tenth':
        return (
          <View>
            <Text style={styles.inputLabel}>School/Board Name:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.institution || ''}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Year of Passing:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.passingyear || ''}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.percentage || ''}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            {renderDatePickers()}
          </View>
        );
      case 'twelfth':
        return (
          <View>
            <Text style={styles.inputLabel}>School/Board Name:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.institution || ''}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Year of Passing:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.passingyear || ''}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.percentage || ''}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            {renderDatePickers()}
          </View>
        );
      case 'diploma':
        return (
          <View>
            <Text style={styles.inputLabel}>Institute Name:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.institution || ''}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Branch/Specialization:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.degree || ''}
              onChangeText={(text) => handleChange(text, 'degree')}
            />
            <Text style={styles.inputLabel}>Year of Completion:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.passingyear || ''}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Aggregate Percentage:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.percentage || ''}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            {renderDatePickers()}
          </View>
        );
      case 'degree':
        return (
          <View>
            <Text style={styles.inputLabel}>College Name:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.institution || ''}
              onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Course Name:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.degree || ''}
              onChangeText={(text) => handleChange(text, 'degree')}
            />
            <Text style={styles.inputLabel}>Branch/Specialization:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.specialization || ''}
              onChangeText={(text) => handleChange(text, 'specialization')}
            />
            <Text style={styles.inputLabel}>Year of Completion:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.passingyear || ''}
              onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Aggregate Percentage:</Text>
            <TextInput
              style={styles.inputField}
              value={currentEducation.percentage || ''}
              onChangeText={(text) => handleChange(text, 'percentage')}
            />
            <View style={styles.semesterContainer}>
              {Array.from({ length: 8 }, (_, i) => (
                <View key={i} style={styles.uploadSection}>
                  <Text style={styles.inputLabel}>Semester {i + 1}:</Text>
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={() => handleUpload(`semester${i + 1}`)}
                  >
                    <Icon name="upload" size={20} color={Colors.primary} />
                    <Text style={styles.uploadButtonText}>Upload Marksheet</Text>
                  </TouchableOpacity>
                  {uploadedImages[`semester${i + 1}`] && (
                    <Image
                      source={{ uri: uploadedImages[`semester${i + 1}`] }}
                      style={styles.uploadedImage}
                    />
                  )}
                </View>
              ))}
            </View>
            {renderDatePickers()}
          </View>
        );
      default:
        return null;
    }
  };

  const renderDatePickers = () => (
    <>
      <View style={styles.dateRow}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>From:</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setOpenFromDatePicker(true)}
          >
            <FontAwesome name="calendar" size={20} color={Colors.primary} />
            <Text style={styles.dateText}>
              {currentEducation.startDate
                ? new Date(currentEducation.startDate).toLocaleDateString()
                : 'DD-MM-YYYY'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>To:</Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setOpenToDatePicker(true)}
          >
            <FontAwesome name="calendar" size={20} color={Colors.primary} />
            <Text style={styles.dateText}>
              {currentEducation.endDate
                ? new Date(currentEducation.endDate).toLocaleDateString()
                : 'DD-MM-YYYY'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <DatePicker
        modal
        open={openFromDatePicker}
        date={new Date(currentEducation.startDate || new Date())}
        mode="date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onConfirm={(date) => {
          setOpenFromDatePicker(false);
          handleChange(date.toISOString(), 'startDate');
        }}
        onCancel={() => {
          setOpenFromDatePicker(false);
        }}
      />
      <DatePicker
        modal
        open={openToDatePicker}
        date={new Date(currentEducation.endDate || new Date())}
        mode="date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onConfirm={(date) => {
          setOpenToDatePicker(false);
          handleChange(date.toISOString(), 'endDate');
        }}
        onCancel={() => {
          setOpenToDatePicker(false);
        }}
      />
    </>
  );

  return <View>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  inputLabel: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  semesterContainer: {
    marginBottom: 20,
  },
  uploadSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    marginLeft: 10,
  },
  uploadButtonText: {
    marginLeft: 5,
    color: Colors.primary,
  },
  uploadedImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dateLabel: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  dateText: {
    marginLeft: 10,
    color: Colors.primary,
  },
});

export default DynamicEducationInputs;
