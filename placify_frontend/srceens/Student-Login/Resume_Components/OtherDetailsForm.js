import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from "../../../constants/Colors";
import { ResumeContext } from './ResumeContext';

const OtherDetailsForm = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const [otherDetails, setOtherDetails] = useState({
    briefSummary: resumeData.briefSummary || '',
    linkedinLink: resumeData.linkedin || '',
    githubLink: resumeData.github || '',
    technicalSkills: resumeData.skills?.technicalSkills?.join(', ') || '',
    softSkills: resumeData.skills?.softSkills?.join(', ') || '',
  });

  useEffect(() => {
    setOtherDetails({
      briefSummary: resumeData.briefSummary || '',
      linkedinLink: resumeData.linkedin || '',
      githubLink: resumeData.github || '',
      technicalSkills: resumeData.skills?.technicalSkills?.join(', ') || '',
      softSkills: resumeData.skills?.softSkills?.join(', ') || '',
    });
  }, [resumeData]);

  const handleChange = (text, field) => {
    setOtherDetails(prevState => ({
      ...prevState,
      [field]: text,
    }));
  };

  const handleBlur = (field) => {
    let updatedData = { ...resumeData };
    switch (field) {
      case 'technicalSkills':
        updatedData.skills = {
          ...resumeData.skills,
          technicalSkills: otherDetails.technicalSkills.split(',').map(skill => skill.trim()),
        };
        break;
      case 'softSkills':
        updatedData.skills = {
          ...resumeData.skills,
          softSkills: otherDetails.softSkills.split(',').map(skill => skill.trim()),
        };
        break;
      case 'briefSummary':
        updatedData.briefSummary = otherDetails.briefSummary;
        break;
      case 'linkedinLink':
        updatedData.linkedin = otherDetails.linkedinLink;
        break;
      case 'githubLink':
        updatedData.github = otherDetails.githubLink;
        break;
      default:
        break;
    }
    updateResumeData(updatedData);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.formContainer}>
        <Text>Brief Summary</Text>
        <TextInput
          style={[styles.input, styles.briefSummary]}
          placeholder="Brief Summary"
          value={otherDetails.briefSummary}
          onChangeText={text => handleChange(text, 'briefSummary')}
          onBlur={() => handleBlur('briefSummary')}
          multiline={true}
          numberOfLines={4}
        />
        <Text>Technical Skills</Text>
        <TextInput
          style={styles.input}
          placeholder="Technical Skills"
          value={otherDetails.technicalSkills}
          onChangeText={text => handleChange(text, 'technicalSkills')}
          onBlur={() => handleBlur('technicalSkills')}
        />
        <Text>Soft Skills</Text>
        <TextInput
          style={styles.input}
          placeholder="Soft Skills"
          value={otherDetails.softSkills}
          onChangeText={text => handleChange(text, 'softSkills')}
          onBlur={() => handleBlur('softSkills')}
        />
        <Text>LinkedIn Link</Text>
        <TextInput
          style={styles.input}
          placeholder="LinkedIn Link"
          value={otherDetails.linkedinLink}
          onChangeText={text => handleChange(text, 'linkedinLink')}
          onBlur={() => handleBlur('linkedinLink')}
        />
        <Text>GitHub Link</Text>
        <TextInput
          style={styles.input}
          placeholder="GitHub Link"
          value={otherDetails.githubLink}
          onChangeText={text => handleChange(text, 'githubLink')}
          onBlur={() => handleBlur('githubLink')}
        />
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
    marginBottom: 10,
    borderRadius: 5,
  },
  inputHobbies: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  briefSummary: {
    height: 100, // Adjust based on your needs
    textAlignVertical: 'top', // Align text to the top
  },
  addActivity: {
    color: Colors.primary,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  // Add more styles as needed
});

export default OtherDetailsForm;
