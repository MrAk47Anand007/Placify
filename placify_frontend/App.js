import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './srceens/Authentication/Home';
import Register from './srceens/Authentication/Register';
import Login from './srceens/Authentication/Login';
import ForgotPassword from './srceens/Authentication/ForgotPassword';
import EmailVerification from './srceens/Authentication/EmailVerification';
import ResetPassword from './srceens/Authentication/ResetPassword';
import StuAppTabs from './StuAppTabs';
import MATabs from './MATabs';
import CompanyDetails from './srceens/Student-Login/CompanyDetails';
import NotificationPage from './srceens/Student-Login/NotificationPage';
import JobDetails from './srceens/Master-Admin/JobDetails';
import AddJob from './srceens/Master-Admin/AddJob';
import MA_studentProfile from './srceens/Master-Admin/MA_studentProfile';
import Student_Offer from './srceens/Master-Admin/Student_Offer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MATabs' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="StuAppTabs" component={StuAppTabs} /> 
        <Stack.Screen name="CompanyDetails" component={CompanyDetails} /> 
        <Stack.Screen name="NotificationPage" component={NotificationPage} /> 
        <Stack.Screen name="MATabs" component={MATabs} /> 
        <Stack.Screen name="JobDetails" component={JobDetails} /> 
        <Stack.Screen name="AddJob" component={AddJob} /> 
        <Stack.Screen name="MA_studentProfile" component={MA_studentProfile} /> 
        <Stack.Screen name="Student_Offer" component={Student_Offer} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;













// In App.js in a new project

// import * as React from 'react';
// // import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './srceens/Authentication/Home';
// import Register from './srceens/Authentication/Register';
// import Login from './srceens/Authentication/Login';
// import ForgotPassword from './srceens/Authentication/ForgotPassword';
// import EmailVerification from './srceens/Authentication/EmailVerification';
// import ResetPassword from './srceens/Authentication/ResetPassword';
// import S_Dashboard from './srceens/Student-Login/S_Dashboard';


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown : false}}>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//         <Stack.Screen name="EmailVerification" component={EmailVerification} />
//         <Stack.Screen name="ResetPassword" component={ResetPassword} />
//         <Stack.Screen name="S_Dashboard" component={S_Dashboard} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
