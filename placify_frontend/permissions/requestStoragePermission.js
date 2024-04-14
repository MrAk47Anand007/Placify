import { PermissionsAndroid } from 'react-native';

async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission Required",
        message: "This app needs access to your storage to save files",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the storage");
      // Proceed with saving file
    } else {
      console.log("Storage permission denied");
      // Handle permission denial
    }
  } catch (err) {
    console.warn(err);
  }
}

export default requestStoragePermission;