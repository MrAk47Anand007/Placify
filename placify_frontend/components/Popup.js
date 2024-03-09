// Popup.js
import React, { useEffect } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import Font from '../constants/Font';

const Popup = ({ visible, onClose }) => {
  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        onClose();
      }, 3000); 
    }
    return () => {
      clearTimeout(timer);
    };
  }, [visible, onClose]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.text}>Login Successful</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Spacing * 3, // Adjust the top padding as needed
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popup: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#00c04b",
    borderRadius: Spacing,
    padding: Spacing * 0.65,
    alignItems: 'center',
  },
  text: {
    fontFamily: Font['poppins-bold'],
    fontSize: FontSize.medium,
    color: '#00c04b',
    fontWeight: "bold",
  },
});

export default Popup;













// Popup.js
// import React from 'react';
// import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../constants/Colors';
// import Spacing from '../constants/Spacing';
// import FontSize from '../constants/FontSize';
// import Font from '../constants/Font';

// const Popup = ({ visible, onClose }) => {
//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}>
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <Text style={styles.modalText}>Login Successful</Text>
//           <TouchableOpacity onPress={onClose} style={styles.button}>
//             <Text style={styles.buttonText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderRadius: Spacing,
//     padding: Spacing * 2,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   modalText: {
//     fontFamily: Font['poppins-bold'],
//     fontSize: FontSize.large,
//     marginBottom: Spacing,
//   },
//   button: {
//     backgroundColor: Colors.primary,
//     borderRadius: Spacing,
//     padding: Spacing,
//     elevation: 2,
//   },
//   buttonText: {
//     fontFamily: Font['poppins-bold'],
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default Popup;
