import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const UploadFile = () => {
  const [fileUri, setFileUri] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileSelect = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      });
  
      console.log('DocumentPicker Response:', res);
  
      if (!res.canceled && res.assets && res.assets.length > 0) {
        const file = res.assets[0];
        setFileUri(file.uri);
        setFileType(file.mimeType);
      } else {
        console.log('User cancelled the picker or no file selected');
      }
    } catch (err) {
      console.error('Error picking document:', err);
      Alert.alert('Error', 'An error occurred while selecting the file. Please try again.');
    }
  };

  const uploadFileToGCS = async () => {
    if (fileUri) {
      try {
        const response = await axios.get('http://192.168.137.247:8080/api/companies/drive/getSignedUrl', {
          params: {
            fileName: fileUri.split('/').pop(),
            fileType: fileType,
          },
        });

        const signedUrl = response.data.signedUrl;

        // Fetch the file blob from the URI
        const blob = await fetch(fileUri).then(r => r.blob());
        console.log(blob);

        // Create a File object from the blob
        const file = new File([blob], fileUri.split('/').pop(), { type: fileType, lastModified: new Date().getTime() });

        // Upload the File object to GCS
        const uploadResponse = await axios.put(signedUrl, file, {
          headers: {
            'Content-Type': fileType,
          },
        });

        if (uploadResponse.status >= 200 && uploadResponse.status < 300) {
          const publicUrl = `https://storage.googleapis.com/placify-bucket-normal/uploads/${file.name}`;
          Alert.alert('Success', `File uploaded successfully: ${publicUrl}`);
        } else {
          Alert.alert('Error', 'Failed to upload file.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        Alert.alert('Error', 'There was an error uploading the file.');
      }
    }
  };

  return (
    <View>
      <Button title="Pick Document" onPress={handleFileSelect} />
      <Button title="Upload to GCS" onPress={uploadFileToGCS} disabled={!fileUri} />
    </View>
  );
};

export default UploadFile;