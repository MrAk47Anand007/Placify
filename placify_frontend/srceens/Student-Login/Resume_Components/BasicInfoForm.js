// BasicInfoForm.js
import React, { useState,useEffect,useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import Colors from "../../../constants/Colors";
import { ResumeContext } from './ResumeContext';

const BasicInfoForm = ({ onSubmit, onCancel }) => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [errors, setErrors] = useState({});

  //  State to track if the data is loaded from context
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [branch, setBranch] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (resumeData && !isDataLoaded) {
            setName(resumeData.name);
            setEmail(resumeData.email);
            setPhone(resumeData.phoneNumber);
            setBranch(resumeData.branch);
            setAddress(resumeData.address);
            setIsDataLoaded(true);
        }
    }, [resumeData, isDataLoaded]);

  const handleChange = (text, field) => {
    // Update both local state and context
    switch(field) {
      case 'name':
        setName(text);
        break;
      case 'email':
        setEmail(text);
        break;
      case 'phoneNumber':
        setPhone(text);
        break;
      case 'branch':
        setBranch(text);
        break;
      case 'address':
        setAddress(text);
        break;
    }
    updateResumeData({ [field]: text }); 
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!name) {
      errors.name = 'Required';
      isValid = false;
    }
    if (!email) {
      errors.email = 'Required';
      isValid = false;
    }
    if (!phone) {
      errors.phone = 'Required';
      isValid = false;
    }
    if (!branch) {
      errors.branch = 'Required';
      isValid = false;
    }
    if (!address) {
      errors.address = 'Required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };



  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name} // Access the name field from the resumeData object
        onChangeText={(text) => handleChange(text, 'name')}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email} // Access the email field from the resumeData object
        onChangeText={(text) => handleChange(text, 'email')}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <Text style={styles.label}>Phone No.</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone No."
        value={phone} // Access the phoneNumber field from the resumeData object
        onChangeText={(text) => handleChange(text, 'phoneNumber')}
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
      
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address} // Access the address field from the resumeData object
        onChangeText={(text) => handleChange(text, 'address')}
      />
      {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default BasicInfoForm;
