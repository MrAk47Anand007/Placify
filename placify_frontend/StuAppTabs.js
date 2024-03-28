
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import S_Dashboard from './srceens/Student-Login/S_Dashboard';
// import S_Jobs from './srceens/Student-Login/S_Jobs';
// import S_More from './srceens/Student-Login/S_More';
// // Import other screens for tabs here

// const Tab = createBottomTabNavigator();

// function StuAppTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen 
//         name="S_Dashboard" 
//         component={S_Dashboard} 
//         options={{ tabBarLabel: 'H' }} // Set the label to 'H' for the home page
//       />
//       <Tab.Screen 
//         name="S_Jobs" 
//         component={S_Jobs} 
//         options={{ tabBarLabel: 'J' }} // Set the label to 'H' for the home page
//       />
//       <Tab.Screen 
//         name="S_More" 
//         component={S_More} 
//         options={{ tabBarLabel: 'M' }} // Set the label to 'H' for the home page
//       />
//       {/* Add more Tab.Screen components for other screens with their respective options */}
//     </Tab.Navigator>
//   );
// }

// export default StuAppTabs;






import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import S_Dashboard from './srceens/Student-Login/S_Dashboard';
import S_Jobs from './srceens/Student-Login/S_Jobs';
import S_More from './srceens/Student-Login/S_More';
// Import other screens for tabs here

const Tab = createBottomTabNavigator();

function StuAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: { fontSize: 20 }, // Customize the label font size
        tabBarStyle: { backgroundColor: 'white' }, // Customize the tab bar background color
      }}
    >
      <Tab.Screen 
        name="S_Dashboard" 
        component={S_Dashboard} 
        options={{ tabBarLabel: 'Home' }} // Use a more descriptive label
      />
      <Tab.Screen 
        name="S_Jobs" 
        component={S_Jobs} 
        options={{ tabBarLabel: 'Jobs' }} // Use a more descriptive label
      />
      <Tab.Screen 
        name="S_More" 
        component={S_More} 
        options={{ tabBarLabel: 'More' }} // Use a more descriptive label
      />
      {/* Add more Tab.Screen components for other screens with their respective options */}
    </Tab.Navigator>
  );
}

export default StuAppTabs;










// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo. If not, you can use react-native-vector-icons
// import S_Dashboard from './S_Dashboard';
// // Placeholder components for other screens
// // import JobsScreen from './JobsScreen';
// // import GroupsScreen from './GroupsScreen';
// // import MoreScreen from './MoreScreen';

// const Tab = createBottomTabNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'ios-home' : 'ios-home-outline';
//             } else if (route.name === 'Jobs') {
//               iconName = focused ? 'briefcase' : 'briefcase-outline';
//             } else if (route.name === 'Groups') {
//               iconName = focused ? 'people' : 'people-outline';
//             } else if (route.name === 'More') {
//               iconName = focused ? 'menu' : 'menu-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'blue',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={S_Dashboard} />
//         <Tab.Screen name="Jobs" component={JobsScreen} />
//         <Tab.Screen name="Groups" component={GroupsScreen} />
//         <Tab.Screen name="More" component={MoreScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigator;