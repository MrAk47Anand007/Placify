// import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// // import ResumesScreen from './ResumesScreen'; // Import your Resumes screen component
// // import ProfileScreen from './ProfileScreen'; // Import your Profile screen component
// // import QueryGenerationScreen from './QueryGenerationScreen'; // Import your Query Generation screen component
// // import LogoutScreen from './LogoutScreen'; // Import your Logout screen component
// // import CustomerSupportScreen from './CustomerSupportScreen'; // Import your Customer Support screen component
// import S_Resume from './S_Resume';
// import S_Jobs from './S_Jobs';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Resumes" component={S_Resume} />
//       <Drawer.Screen name="Profile" component={S_Resume} />
//       <Drawer.Screen name="Query Generation" component={S_Resume} />
//       <Drawer.Screen name="Logout" component={S_Resume} />
//       <Drawer.Screen name="Customer Support" component={S_Jobs} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
    
//       <MyDrawer />
    
//   );
// }









import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const S_More = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
  }
});

export default S_More;