
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import Colors from './constants/TabColors';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Icon, { Icons } from './components/Icons';
import S_Dashboard from './srceens/Student-Login/S_Dashboard';
import S_Jobs from './srceens/Student-Login/S_Jobs';
import S_Groups from './srceens/Student-Login/S_Groups';
import S_More from './srceens/Student-Login/S_More';
import S_Resume from './srceens/Student-Login/S_Resume';


const TabArr = [
  { route: 'Groups', label: 'Groups', type: Icons.MaterialIcons, icon: 'groups', component: S_Groups },
  { route: 'Resume', label: 'Resume', type: Icons.FontAwesome, icon: 'file-text-o', component: S_Resume },
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: S_Dashboard },
  { route: 'Jobs', label: 'Jobs', type: Icons.Entypo, icon: 'suitcase', component: S_Jobs },
  { route: 'More', label: 'More', type: Icons.Ionicons, icon: 'grid-outline', component: S_More },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.5: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const StuAppTabs = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const isDarkMode = useColorScheme() === 'dark';

  const { colors } = useTheme()
  const color = isDarkMode ? Colors.white : Colors.black;
  const bgColor = colors.background;
  // const bgColor = colors.background;

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={550}
        style={styles.container}>
        <View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={[styles.text, { color }]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab1() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
        initialRouteName="Home" // Set initial route name to "Home"
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <StuAppTabs {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    margin: 16,
    borderRadius: 60,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: '500'
  }
})















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
//         tabBarLabelStyle: { fontSize: 20 }, // Customize the label font size
//         tabBarStyle: { backgroundColor: 'white' }, // Customize the tab bar background color
//       }}
//     >
//       <Tab.Screen 
//         name="S_Dashboard" 
//         component={S_Dashboard} 
//         options={{ tabBarLabel: 'Home' }} // Use a more descriptive label
//       />
//       <Tab.Screen 
//         name="S_Jobs" 
//         component={S_Jobs} 
//         options={{ tabBarLabel: 'Jobs' }} // Use a more descriptive label
//       />
//       <Tab.Screen 
//         name="S_More" 
//         component={S_More} 
//         options={{ tabBarLabel: 'More' }} // Use a more descriptive label
//       />
//       {/* Add more Tab.Screen components for other screens with their respective options */}
//     </Tab.Navigator>
//   );
// }

// export default StuAppTabs;










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