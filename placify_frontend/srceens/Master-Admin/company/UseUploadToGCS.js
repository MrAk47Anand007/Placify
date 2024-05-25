import { useState, useEffect } from 'react';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

const signedURLpayload = {
  name: 'mazi_juls',
  twitterhandle: '@ajulibe',
  id: '007'
};

export const useUploadToGCS = () => {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState('👀');

  useEffect(() => {
    if (file === undefined) {
      return;
    } else {
      uploadFileToGCS(signedURLpayload, file);
    }
  }, [file]);

  async function getBlob(fileUri) {
    const resp = await fetch(fileUri);
    const imageBody = await resp.blob();
    return imageBody;
  }

  const pickFile = async () => {
    const file = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
    });

    if (file.type !== 'success') {
      return null;
    } else {
      setFile(file);
    }
  };

  const uploadFileToGCS = async (signedURLpayload, file) => {
    try {
      if (file.type !== 'success') {
        return null;
      } else {
        const { uri } = file;
        const fileBody = await getBlob(uri);
        const fileType = fileBody.type;
        if (fileBody == null) {
          return null;
        } else {
          const response = await axios.get('http://192.168.29.209:8080/api/companies/drive/getSignedUrl', {
            params: {
              fileName: file.name,
              fileType: 'application/octet-stream',
            },
          });

          const signedUrl = response.data.signedUrl;
          if (!signedUrl) {
            throw new Error('Failed to get signed URL');
          } else {
            const base64 = await FileSystem.readAsStringAsync(uri, {
              encoding: FileSystem.EncodingType.Base64,
            });
            const buffer = Buffer.from(base64, 'base64');
            const uploadResponse = await axios.put(signedUrl, buffer, {
              headers: { 'Content-Type': fileType ?? 'application/octet-stream' },
            });

            if (uploadResponse.status === 200) {
              const publicUrl = `https://storage.googleapis.com/placify-bucket-normal/Master-Admin/${file.name}`;
              console.log('Public URL:', publicUrl);
              setRes('🥳🥳');
              return publicUrl;
            } else {
              throw new Error('Failed to upload to GCS');
            }
          }
        }
      }
    } catch (error) {
      setRes('😩😩');
      console.log('Error uploading file:', error);
    }
  };

  return {
    res,
    pickFile,
  };
};
