
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Colors from "../../constants/Colors";
// import Spacing from '../../constants/Spacing';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';

// // Dummy data for job listings
// const jobListings = [
//   { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
//   { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
//   { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
//   { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
//   // Add more listings as needed
// ];


// const Applications = [
//   // { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
//   { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
//   // { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
//   { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
//   // Add more listings as needed
// ];



// const Offers = [
//   { id: '1', title: 'Software Engineer', company: 'Amazon', ctc: '10 LPA', jobType: 'Full Time', location: 'New York', logo: require('../../assets/images/amazonlogo.png') },
//   { id: '2', title: 'Web Developer Intern', company: 'Google', ctc: '6 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/googlelogo.png') },
//   // { id: '3', title: 'Tech Consultant', company: 'TATA', ctc: '22 LPA', jobType: 'Full Time', location: 'San Francisco', logo: require('../../assets/images/Tatalogo.png') },
//   // { id: '4', title: 'Cyber Security Intern', company: 'Amazon', ctc: '18 LPA', jobType: 'Internship', location: 'San Francisco', logo: require('../../assets/images/amazonlogo.png') },
//   // Add more listings as needed
// ];

// const JobListingsScreen = ({ navigation: { navigate } }) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={jobListings}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.listingHeader}>
//               <Image source={item.logo} style={styles.logo} />
//               <View style={styles.titleContainer}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.jobType}>{item.jobType}</Text>
//               </View>
//             </View>
//             <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//             <View style={styles.detailsRow}>
//               <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//             </View>
//             <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//             <TouchableOpacity
//               style={styles.applyButton}
//               onPress={() => navigate("CompanyDetails")}
//             >
//               <Text style={styles.applyButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const ApplicationsScreen = () => (
//   <View style={styles.container}>
//       <FlatList
//         data={Applications}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.listingHeader}>
//               <Image source={item.logo} style={styles.logo} />
//               <View style={styles.titleContainer}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.jobType}>{item.jobType}</Text>
//               </View>
//             </View>
//             <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//             <View style={styles.detailsRow}>
//               <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//             </View>
//             <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//             <TouchableOpacity
//               style={styles.applyButton}
//               onPress={() => navigate("CompanyDetails")}
//             >
//               <Text style={styles.applyButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
// );

// const OffersScreen = () => (
//   <View style={styles.container}>
//       <FlatList
//         data={Offers}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.listingHeader}>
//               <Image source={item.logo} style={styles.logo} />
//               <View style={styles.titleContainer}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.jobType}>{item.jobType}</Text>
//               </View>
//             </View>
//             <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//             <View style={styles.detailsRow}>
//               <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//             </View>
//             <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//             <TouchableOpacity
//               style={styles.applyButton}
//               onPress={() => navigate("CompanyDetails")}
//             >
//               <Text style={styles.applyButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
// );

// const AppliedScreen = () => (
//   <View style={styles.screenContainer}>
//     <Text style={styles.screenText}>Applied Screen</Text>
//   </View>
// );

// const Tab = createMaterialTopTabNavigator();

// const S_Jobs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Opportunities"
//       screenOptions={{
//         tabBarActiveTintColor: '#ffffff',
//         tabBarLabelStyle: { fontSize: responsiveFontSize(1.6), fontWeight: "bold", justifyContent: 'center' },
//         tabBarStyle: { backgroundColor: Colors.primary, paddingVertical: Spacing * 0.8 },
//         tabBarIndicatorStyle: { backgroundColor: '#ffffff' },
//       }}
//     >
//       <Tab.Screen name="Opportunities" component={JobListingsScreen} />
//       <Tab.Screen name="Applications" component={ApplicationsScreen} />
//       <Tab.Screen name="Offers" component={OffersScreen} />
//       {/* <Tab.Screen name="Applied" component={AppliedScreen} /> */}
//     </Tab.Navigator>
//   );
// };

// export default S_Jobs;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     paddingBottom: Spacing * 9,
//     backgroundColor: Colors.lightPrimary,
//   },
//   card: {
//     marginTop: Spacing * 2,
//     backgroundColor: '#fff',
//     borderRadius: Spacing * 2,
//     paddingVertical: Spacing * 2.3,
//     paddingHorizontal: Spacing * 1.5,
//     marginHorizontal: Spacing * 2.2,
//     shadowColor: Colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: Spacing * 0.2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: Spacing * 0.2,
//     elevation: 4,
//   },
//   listingHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', // Align items horizontally
//     marginBottom: Spacing * 0.3,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: Spacing,
//   },
//   titleContainer: {
//     flex: 1, // Take remaining space
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Align items horizontally
//     alignItems: 'center', // Align items vertically
//   },
//   title: {
//     fontSize: responsiveFontSize(2.25),
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   jobType: {
//     fontSize: responsiveFontSize(1.4),
//     color: Colors.primary,
//     fontWeight: 'bold',
//     textAlign: 'right', // Align text to the right
//   },
//   textbelowlogo: {
//     marginLeft: Spacing,
//     fontSize: responsiveFontSize(1.85),
//     color: Colors.darkText
//   },
//   detailsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: Spacing * 0.5,
//   },
//   applyButton: {
//     marginTop: Spacing * 1.5,
//     backgroundColor: Colors.primary,
//     padding: Spacing * 1.2,
//     borderRadius: Spacing * 2,
//     alignItems: 'center',
//   },
//   applyButtonText: {
//     color: Colors.onPrimary,
//     fontWeight: 'bold',
//   },
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   screenText: {
//     fontSize: responsiveFontSize(2),
//     fontWeight: 'bold',
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Colors from "../../constants/Colors";
// import Spacing from '../../constants/Spacing';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import getCompanyLogo from '../Master-Admin/company/CompanyLogoGenerator';

// const config = require('../../config');

// const fetchData = async (url, setData, setLoading, setError) => {
//   try {
//     setLoading(true);
//     const token = await SecureStore.getItemAsync('jwtToken');
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response);
//     console.log(token);
//     setData(response.data);
//   } catch (error) {
//     setError(error);
//   } finally {
//     setLoading(false);
//   }
// };

// const ShimmerItem = () => (
//   <View style={styles.card}>
//     <ShimmerPlaceholder style={styles.logo} />
//     <ShimmerPlaceholder style={styles.titleShimmer} />
//     <ShimmerPlaceholder style={styles.textShimmer} />
//     <ShimmerPlaceholder style={styles.textShimmer} />
//     <ShimmerPlaceholder style={styles.applyButtonShimmer} />
//   </View>
// );

// // const JobListingsScreen = ({ navigation: { navigate } }) => {
// //   const [jobListings, setJobListings] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchJobListings = async () => {
// //       const studentId = await SecureStore.getItemAsync('studentId');
// //       const url = `${config.apiEndpoint}/student/eligible-drives/${studentId}`;
// //       fetchData(url, setJobListings, setLoading, setError);
// //     };
// //     fetchJobListings();
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       {loading ? (
// //         <FlatList
// //           data={[...Array(6).keys()]} // Create an array with placeholders
// //           keyExtractor={(item) => item.toString()}
// //           renderItem={() => <ShimmerItem />}
// //         />
// //       ) : error ? (
// //         <Text>Error: {error.message}</Text>
// //       ) : (
// //         <FlatList
// //           data={jobListings}
// //           keyExtractor={(item) => item.id.toString()}
// //           renderItem={({ item }) => (
// //             <View style={styles.card}>
// //               <View style={styles.listingHeader}>
// //                 <Image source={{ uri: item.logo }} style={styles.logo} />
// //                 <View style={styles.titleContainer}>
// //                   <Text style={styles.title}>{item.title}</Text>
// //                   <Text style={styles.jobType}>{item.jobType}</Text>
// //                 </View>
// //               </View>
// //               <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
// //               <View style={styles.detailsRow}>
// //                 <Text style={styles.textbelowlogo}>CTC: {item.costToCompany}</Text>
// //               </View>
// //               <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
// //               <TouchableOpacity
// //                 style={styles.applyButton}
// //                 onPress={() => navigate("CompanyDetails")}
// //               >
// //                 <Text style={styles.applyButtonText}>View Details</Text>
// //               </TouchableOpacity>
// //             </View>
// //           )}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// const JobListingsScreen = ({ navigation: { navigate } }) => {
//   const [jobListings, setJobListings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJobListings = async () => {
//       const studentId = await SecureStore.getItemAsync('studentId');
//       const url = `${config.apiEndpoint}/student/eligible-drives/${studentId}`;
//       fetchData(url, setJobListings, setLoading, setError);
//     };
//     fetchJobListings();
//   }, []);

//   const renderJobListingItem = async ({ item }) => {
//     const logo = await getCompanyLogo(item.companyName);
//     return (
//       <View style={styles.card}>
//         <View style={styles.listingHeader}>
//           <Image source={{ uri: logo }} style={styles.logo} />
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.jobType}>{item.jobType}</Text>
//           </View>
//         </View>
//         <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
//         <View style={styles.detailsRow}>
//           <Text style={styles.textbelowlogo}>CTC: {item.costToCompany}</Text>
//         </View>
//         <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//         <TouchableOpacity
//           style={styles.applyButton}
//           onPress={() => navigate("CompanyDetails")}
//         >
//           <Text style={styles.applyButtonText}>View Details</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={jobListings}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderJobListingItem}
//         />
//       )}
//     </View>
//   );
// };



// const ApplicationsScreen = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       const studentId = await SecureStore.getItemAsync('studentId');
//       const url = `${config.apiEndpoint}/applications/${studentId}`;
//       fetchData(url, setApplications, setLoading, setError);
//     };
//     fetchApplications();
//   }, []);

//   const renderApplicationItem = async ({ item }) => {
//     const logo = await getCompanyLogo(item.company);
//     return (
//       <View style={styles.card}>
//         <View style={styles.listingHeader}>
//           <Image source={{ uri: logo }} style={styles.logo} />
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.jobType}>{item.jobType}</Text>
//           </View>
//         </View>
//         <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//         <View style={styles.detailsRow}>
//           <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//         </View>
//         <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//         <TouchableOpacity
//           style={styles.applyButton}
//           onPress={() => navigate("CompanyDetails")}
//         >
//           <Text style={styles.applyButtonText}>View Details</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={applications}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderApplicationItem}
//         />
//       )}
//     </View>
//   );
//   // return (
//   //   <View style={styles.container}>
//   //     {loading ? (
//   //       <FlatList
//   //         data={[...Array(6).keys()]}
//   //         keyExtractor={(item) => item.toString()}
//   //         renderItem={() => <ShimmerItem />}
//   //       />
//   //     ) : error ? (
//   //       <Text>Error: {error.message}</Text>
//   //     ) : (
//   //       <FlatList
//   //         data={applications}
//   //         keyExtractor={(item) => item.id.toString()}
//   //         renderItem={({ item }) => (
//   //           <View style={styles.card}>
//   //             <View style={styles.listingHeader}>
//   //               <Image source={{ uri: item.logo }} style={styles.logo} />
//   //               <View style={styles.titleContainer}>
//   //                 <Text style={styles.title}>{item.title}</Text>
//   //                 <Text style={styles.jobType}>{item.jobType}</Text>
//   //               </View>
//   //             </View>
//   //             <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//   //             <View style={styles.detailsRow}>
//   //               <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//   //             </View>
//   //             <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//   //             <TouchableOpacity
//   //               style={styles.applyButton}
//   //               onPress={() => navigate("CompanyDetails")}
//   //             >
//   //               <Text style={styles.applyButtonText}>View Details</Text>
//   //             </TouchableOpacity>
//   //           </View>
//   //         )}
//   //       />
//   //     )}
//   //   </View>
//   // );
// };

// const OffersScreen = () => {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOffers = async () => {
//       const studentId = await SecureStore.getItemAsync('studentId');
//       const url = `${config.apiEndpoint}/offers/${studentId}`;
//       fetchData(url, setOffers, setLoading, setError);
//     };
//     fetchOffers();
//   }, []);

//   const renderOfferItem = async ({ item }) => {
//     const logo = await getCompanyLogo(item.company);
//     return (
//       <View style={styles.card}>
//         <View style={styles.listingHeader}>
//           <Image source={{ uri: logo }} style={styles.logo} />
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.jobType}>{item.jobType}</Text>
//           </View>
//         </View>
//         <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//         <View style={styles.detailsRow}>
//           <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//         </View>
//         <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//         <TouchableOpacity
//           style={styles.applyButton}
//           onPress={() => navigate("CompanyDetails")}
//         >
//           <Text style={styles.applyButtonText}>View Details</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={offers}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderOfferItem}
//         />
//       )}
//     </View>
//   );
//   // return (
//   //   <View style={styles.container}>
//   //     {loading ? (
//   //       <FlatList
//   //         data={[...Array(6).keys()]}
//   //         keyExtractor={(item) => item.toString()}
//   //         renderItem={() => <ShimmerItem />}
//   //       />
//   //     ) : error ? (
//   //       <Text>Error: {error.message}</Text>
//   //     ) : (
//   //       <FlatList
//   //         data={offers}
//   //         keyExtractor={(item) => item.id.toString()}
//   //         renderItem={({ item }) => (
//   //           <View style={styles.card}>
//   //             <View style={styles.listingHeader}>
//   //               <Image source={{ uri: item.logo }} style={styles.logo} />
//   //               <View style={styles.titleContainer}>
//   //                 <Text style={styles.title}>{item.title}</Text>
//   //                 <Text style={styles.jobType}>{item.jobType}</Text>
//   //               </View>
//   //             </View>
//   //             <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//   //             <View style={styles.detailsRow}>
//   //               <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//   //             </View>
//   //             <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//   //             <TouchableOpacity
//   //               style={styles.applyButton}
//   //               onPress={() => navigate("CompanyDetails")}
//   //             >
//   //               <Text style={styles.applyButtonText}>View Details</Text>
//   //             </TouchableOpacity>
//   //           </View>
//   //         )}
//   //       />
//   //     )}
//   //   </View>
//   // );
// };

// const Tab = createMaterialTopTabNavigator();

// const S_Jobs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Opportunities"
//       screenOptions={{
//         tabBarActiveTintColor: '#ffffff',
//         tabBarLabelStyle: { fontSize: responsiveFontSize(1.6), fontWeight: "bold", justifyContent: 'center' },
//         tabBarStyle: { backgroundColor: Colors.primary, paddingVertical: Spacing * 0.8 },
//         tabBarIndicatorStyle: { backgroundColor: '#ffffff' },
//       }}
//     >
//       <Tab.Screen name="Opportunities" component={JobListingsScreen} />
//       <Tab.Screen name="Applications" component={ApplicationsScreen} />
//       <Tab.Screen name="Offers" component={OffersScreen} />
//     </Tab.Navigator>
//   );
// };

// export default S_Jobs;




// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Colors from "../../constants/Colors";
// import Spacing from '../../constants/Spacing';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import getCompanyLogo from '../Master-Admin/company/CompanyLogoGenerator';

// const config = require('../../config');

// const fetchData = async (url, setData, setLoading, setError) => {
//   try {
//     setLoading(true);
//     const token = await SecureStore.getItemAsync('jwtToken');
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setData(response.data);
//   } catch (error) {
//     setError(error);
//   } finally {
//     setLoading(false);
//   }
// };

// const ShimmerItem = () => (
//   <View style={styles.card}>
//     <ShimmerPlaceholder style={styles.logo} />
//     <ShimmerPlaceholder style={styles.titleShimmer} />
//     <ShimmerPlaceholder style={styles.textShimmer} />
//     <ShimmerPlaceholder style={styles.textShimmer} />
//     <ShimmerPlaceholder style={styles.applyButtonShimmer} />
//   </View>
// );

// const JobListingsScreen = ({ navigation: { navigate } }) => {
//   const [jobListings, setJobListings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [logos, setLogos] = useState({});

//   useEffect(() => {
//     const fetchJobListings = async () => {
//       const studentId = await SecureStore.getItemAsync('studentId');
//       const url = `${config.apiEndpoint}/student/eligible-drives/${studentId}`;
//       await fetchData(url, setJobListings, setLoading, setError);
//     };
//     fetchJobListings();
//   }, []);

//   useEffect(() => {
//     const fetchLogos = async () => {
//       const newLogos = {};
//       for (const listing of jobListings) {
//         newLogos[listing.id] = await getCompanyLogo(listing.companyName);
//       }
//       setLogos(newLogos);
//     };
//     if (jobListings.length > 0) {
//       fetchLogos();
//     }
//   }, [jobListings]);

//   const renderJobListingItem = ({ item }) => (
//     <View style={styles.card}>
//       <View style={styles.listingHeader}>
//         <Image source={{ uri: logos[item.id] }} style={styles.logo} />
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.jobType}>{item.jobType}</Text>
//         </View>
//       </View>
//       <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.textbelowlogo}>CTC: {item.costToCompany}</Text>
//       </View>
//       <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//       <TouchableOpacity
//         style={styles.applyButton}
//         onPress={() => navigate("CompanyDetails")}
//       >
//         <Text style={styles.applyButtonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={jobListings}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderJobListingItem}
//         />
//       )}
//     </View>
//   );
// };

// const ApplicationsScreen = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [logos, setLogos] = useState({});

//   useEffect(() => {
//     const fetchApplications = async () => {
//       const studentId = await SecureStore.getItemAsync('studentId');
//       const url = `${config.apiEndpoint}/applications/${studentId}`;
//       await fetchData(url, setApplications, setLoading, setError);
//     };
//     fetchApplications();
//   }, []);

//   useEffect(() => {
//     const fetchLogos = async () => {
//       const newLogos = {};
//       for (const application of applications) {
//         newLogos[application.id] = await getCompanyLogo(application.company);
//       }
//       setLogos(newLogos);
//     };
//     if (applications.length > 0) {
//       fetchLogos();
//     }
//   }, [applications]);

//   const renderApplicationItem = ({ item }) => (
//     <View style={styles.card}>
//       <View style={styles.listingHeader}>
//         <Image source={{ uri: logos[item.id] }} style={styles.logo} />
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.jobType}>{item.jobType}</Text>
//         </View>
//       </View>
//       <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//       </View>
//       <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//       <TouchableOpacity
//         style={styles.applyButton}
//         onPress={() => navigate("CompanyDetails")}
//       >
//         <Text style={styles.applyButtonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={applications}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderApplicationItem}
//         />
//       )}
//     </View>
//   );
// };

// const OffersScreen = () => {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [logos, setLogos] = useState({});

//   useEffect(() => {
//     const fetchOffers = async () => {
//       const studentId = await SecureStore.getItemAsync('studentId');
//       const url = `${config.apiEndpoint}/offers/${studentId}`;
//       await fetchData(url, setOffers, setLoading, setError);
//     };
//     fetchOffers();
//   }, []);

//   useEffect(() => {
//     const fetchLogos = async () => {
//       const newLogos = {};
//       for (const offer of offers) {
//         newLogos[offer.id] = await getCompanyLogo(offer.company);
//       }
//       setLogos(newLogos);
//     };
//     if (offers.length > 0) {
//       fetchLogos();
//     }
//   }, [offers]);

//   const renderOfferItem = ({ item }) => (
//     <View style={styles.card}>
//       <View style={styles.listingHeader}>
//         <Image source={{ uri: logos[item.id] }} style={styles.logo} />
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.jobType}>{item.jobType}</Text>
//         </View>
//       </View>
//       <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//       </View>
//       <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//       <TouchableOpacity
//         style={styles.applyButton}
//         onPress={() => navigate("CompanyDetails")}
//       >
//         <Text style={styles.applyButtonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={offers}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderOfferItem}
//         />
//       )}
//     </View>
//   );
// };

// const Tab = createMaterialTopTabNavigator();

// const StudentHomeScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Job Listings" component={JobListingsScreen} />
//     <Tab.Screen name="Applications" component={ApplicationsScreen} />
//     <Tab.Screen name="Offers" component={OffersScreen} />
//   </Tab.Navigator>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.primaryBackground,
//     padding: Spacing,
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: Spacing,
//     borderRadius: 8,
//     marginBottom: Spacing,
//     shadowColor: 'black',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   listingHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     marginRight: Spacing,
//   },
//   titleContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: responsiveFontSize(2),
//     fontWeight: 'bold',
//   },
//   jobType: {
//     fontSize: responsiveFontSize(1.5),
//     color: 'gray',
//   },
//   textbelowlogo: {
//     marginTop: Spacing,
//     fontSize: responsiveFontSize(1.8),
//     color: 'black',
//   },
//   detailsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   applyButton: {
//     marginTop: Spacing,
//     paddingVertical: 10,
//     backgroundColor: Colors.primary,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   applyButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   titleShimmer: {
//     width: '70%',
//     height: 20,
//     borderRadius: 5,
//   },
//   textShimmer: {
//     width: '90%',
//     height: 15,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   applyButtonShimmer: {
//     width: '50%',
//     height: 30,
//     borderRadius: 5,
//     marginTop: 10,
//   },
// });



// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, RefreshControl } from 'react-native';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';
// import { useNavigation, useFocusEffect,useRoute  } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Colors from "../../constants/Colors";
// import Spacing from '../../constants/Spacing';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import getCompanyLogo from '../Master-Admin/company/CompanyLogoGenerator';

// const config = require('../../config');

// const fetchData = async (url, setData, setLoading, setError, dataRef) => {
//   if (dataRef.current) {
//     setData(dataRef.current);
//     return;
//   }
//   try {
//     setLoading(true);
//     const token = await SecureStore.getItemAsync('jwtToken');
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setData(response.data);
//     dataRef.current = response.data;
//   } catch (error) {
//     setError(error);
//   } finally {
//     setLoading(false);
//   }
// };

// const ShimmerItem = () => (
//   <View style={styles.card}>
//     <ShimmerPlaceholder style={styles.logo} />
//     <ShimmerPlaceholder style={styles.titleShimmer} />
//     <ShimmerPlaceholder style={styles.textShimmer} />
//     <ShimmerPlaceholder style={styles.textShimmer} />
//     <ShimmerPlaceholder style={styles.applyButtonShimmer} />
//   </View>
// );

// export const JobListingsScreen = () => {
//   const [jobListings, setJobListings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState(null);
//   const [logos, setLogos] = useState({});
//   const jobListingsRef = useRef(null);
//   const navigation = useNavigation();

//   const fetchJobListings = async () => {
//     const studentId = await SecureStore.getItemAsync('studentId');
//     const url = `${config.apiEndpoint}/student/eligible-drives/${studentId}`;
//     await fetchData(url, setJobListings, setLoading, setError, jobListingsRef);
//   };

//   useEffect(() => {
//     fetchJobListings();
//   }, []);

//   useEffect(() => {
//     const fetchLogos = async () => {
//       const newLogos = {};
//       for (const listing of jobListings) {
//         newLogos[listing.id] = await getCompanyLogo(listing.companyName);
//       }
//       setLogos(newLogos);
//     };
//     if (jobListings.length > 0) {
//       fetchLogos();
//     }
//   }, [jobListings]);

//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     setJobListings([]); // Clear the existing data
//     setLogos({}); // Clear the existing logos
//     await fetchJobListings();
//     setRefreshing(false);
//   }, []);

//   const renderJobListingItem = ({ item, index }) => (
//     <View style={styles.card} key={item.id + index.toString()}>
//       <View style={styles.listingHeader}>
//         <Image source={{ uri: logos[item.id] }} style={styles.logo} />
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.jobType}>{item.jobType}</Text>
//         </View>
//       </View>
//       <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.textbelowlogo}>CTC: {item.costToCompany}</Text>
//       </View>
//       <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//       <TouchableOpacity
//         style={styles.applyButton}
//         onPress={() => navigation.navigate('CompanyDetails', { item })}
//       >
//         <Text style={styles.applyButtonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={jobListings}
//           keyExtractor={(item, index) => item.id + index.toString()}
//           renderItem={renderJobListingItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       )}
//     </View>
//   );
// };


// export const ApplicationsScreen = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState(null);
//   const [logos, setLogos] = useState({});
//   const applicationsRef = useRef(null);
//   const navigation = useNavigation();

//   const fetchApplications = async () => {
//     const studentId = await SecureStore.getItemAsync('studentId');
//     const url = `${config.apiEndpoint}/student/applied-drives/${studentId}`;
//     await fetchData(url, setApplications, setLoading, setError, applicationsRef);
//   };

//   useFocusEffect(
//     useCallback(() => {
//       fetchApplications();
//     }, [])
//   );

//   useEffect(() => {
//     const fetchLogos = async () => {
//       const newLogos = {};
//       for (const application of applications) {
//         newLogos[application.id] = await getCompanyLogo(application.companyName);
//       }
//       setLogos(newLogos);
//     };
//     if (applications.length > 0) {
//       fetchLogos();
//     }
//   }, [applications]);

//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     setApplications([]); // Clear the existing data
//     setLogos({}); // Clear the existing logos
//     await fetchApplications();
//     setRefreshing(false);
//   }, []);

//   const renderApplicationItem = ({ item, index }) => (
//     <View style={styles.card} key={item.id + index.toString()}>
//       <View style={styles.listingHeader}>
//         <Image source={{ uri: logos[item.id] }} style={styles.logo} />
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item.driveTitle}</Text>
//           <Text style={styles.jobType}>{new Date(item.applicationDate).toLocaleDateString()}</Text>
//         </View>
//       </View>
//       <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.textbelowlogo}>Status: {item.status}</Text>
//       </View>
//       <Text style={styles.textbelowlogo}>Description: {item.driveDescription}</Text>
//       <TouchableOpacity
//         style={styles.applyButton}
//         onPress={() => navigation.navigate('CompanyDetails', { item })}
//       >
//         <Text style={styles.applyButtonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={applications}
//           keyExtractor={(item, index) => item.id + index.toString()}
//           renderItem={renderApplicationItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       )}
//     </View>
//   );
// };


// export const OffersScreen = () => {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState(null);
//   const [logos, setLogos] = useState({});
//   const offersRef = useRef(null);
//   const navigation = useNavigation();

//   const fetchOffers = async () => {
//     const studentId = await SecureStore.getItemAsync('studentId');
//     const url = `${config.apiEndpoint}/offers/${studentId}`;
//     await fetchData(url, setOffers, setLoading, setError, offersRef);
//   };

//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   useEffect(() => {
//     const fetchLogos = async () => {
//       const newLogos = {};
//       for (const offer of offers) {
//         newLogos[offer.id] = await getCompanyLogo(offer.company);
//       }
//       setLogos(newLogos);
//     };
//     if (offers.length > 0) {
//       fetchLogos();
//     }
//   }, [offers]);

//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     setOffers([]); // Clear the existing data
//     setLogos({}); // Clear the existing logos
//     await fetchOffers();
//     setRefreshing(false);
//   }, []);

//   const renderOfferItem = ({ item, index }) => (
//     <View style={styles.card} key={item.id + index.toString()}>
//       <View style={styles.listingHeader}>
//         <Image source={{ uri: logos[item.id] }} style={styles.logo} />
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.jobType}>{item.jobType}</Text>
//         </View>
//       </View>
//       <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
//       </View>
//       <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
//       <TouchableOpacity
//         style={styles.applyButton}
//         onPress={() => navigation.navigate("CompanyDetails", { item })}
//       >
//         <Text style={styles.applyButtonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <FlatList
//           data={[...Array(6).keys()]}
//           keyExtractor={(item) => item.toString()}
//           renderItem={() => <ShimmerItem />}
//         />
//       ) : error ? (
//         <Text>Error: {error.message}</Text>
//       ) : (
//         <FlatList
//           data={offers}
//           keyExtractor={(item, index) => item.id + index.toString()}
//           renderItem={renderOfferItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       )}
//     </View>
//   );
// };


// const Tab = createMaterialTopTabNavigator();

// const StudentHomeScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Job Listings" component={JobListingsScreen} />
//     <Tab.Screen name="Applications" component={ApplicationsScreen} />
//     <Tab.Screen name="Offers" component={OffersScreen} />
//   </Tab.Navigator>
// );

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, RefreshControl } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from "../../constants/Colors";
import Spacing from '../../constants/Spacing';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import getCompanyLogo from '../Master-Admin/company/CompanyLogoGenerator';

const config = require('../../config');

const fetchData = async (url, setData, setLoading, setError, dataRef) => {
  if (dataRef.current) {
    setData(dataRef.current);
    return;
  }
  try {
    setLoading(true);
    const token = await SecureStore.getItemAsync('jwtToken');
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(response.data);
    dataRef.current = response.data;
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

const ShimmerItem = () => (
  <View style={styles.card}>
    <ShimmerPlaceholder style={styles.logo} />
    <ShimmerPlaceholder style={styles.titleShimmer} />
    <ShimmerPlaceholder style={styles.textShimmer} />
    <ShimmerPlaceholder style={styles.textShimmer} />
    <ShimmerPlaceholder style={styles.applyButtonShimmer} />
  </View>
);

const JobListingsScreen = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [logos, setLogos] = useState({});
  const jobListingsRef = useRef(null);
  const navigation = useNavigation();

  const fetchJobListings = async () => {
    const studentId = await SecureStore.getItemAsync('studentId');
    const url = `${config.apiEndpoint}/student/eligible-drives/${studentId}`;
    await fetchData(url, setJobListings, setLoading, setError, jobListingsRef);
  };

  useEffect(() => {
    fetchJobListings();
  }, []);

  useEffect(() => {
    const fetchLogos = async () => {
      const newLogos = {};
      for (const listing of jobListings) {
        newLogos[listing.id] = await getCompanyLogo(listing.companyName);
      }
      setLogos(newLogos);
    };
    if (jobListings.length > 0) {
      fetchLogos();
    }
  }, [jobListings]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setJobListings([]); // Clear the existing data
    setLogos({}); // Clear the existing logos
    await fetchJobListings();
    setRefreshing(false);
  }, []);

  const renderJobListingItem = ({ item, index }) => (
    <View style={styles.card} key={item.id + index.toString()}>
      <View style={styles.listingHeader}>
        <Image source={{ uri: logos[item.id] }} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.jobType}>{item.jobType}</Text>
        </View>
      </View>
      <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.textbelowlogo}>CTC: {item.costToCompany}</Text>
      </View>
      <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('CompanyDetails', { item })}
      >
        <Text style={styles.applyButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <FlatList
          data={[...Array(6).keys()]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <ShimmerItem />}
        />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={jobListings}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={renderJobListingItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const ApplicationsScreen = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [logos, setLogos] = useState({});
  const applicationsRef = useRef(null);
  const navigation = useNavigation();

  const fetchApplications = async () => {
    const studentId = await SecureStore.getItemAsync('studentId');
    const url = `${config.apiEndpoint}/student/applied-drives/${studentId}`;

    const appls = applications;
    await fetchData(url, setApplications, setLoading, setError, applicationsRef);

    console.log(appls == applications);

  };

  useFocusEffect(
    useCallback(() => {
      fetchApplications();
    }, [])
  );

  useEffect(() => {
    const fetchLogos = async () => {
      const newLogos = {};
      for (const application of applications) {
        newLogos[application.id] = await getCompanyLogo(application.companyName);
      }
      setLogos(newLogos);
    };
    if (applications.length > 0) {
      fetchLogos();
    }
  }, [applications]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setApplications([]); // Clear the existing data
    setLogos({}); // Clear the existing logos
    await fetchApplications();
    setRefreshing(false);
  }, []);

  const renderApplicationItem = ({ item, index }) => (
    <View style={styles.card} key={item.id + index.toString()}>
      <View style={styles.listingHeader}>
        <Image source={{ uri: logos[item.id] }} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.driveTitle}</Text>
          <Text style={styles.jobType}>{new Date(item.applicationDate).toLocaleDateString()}</Text>
        </View>
      </View>
      <Text style={styles.textbelowlogo}>Company: {item.companyName}</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.textbelowlogo}>Status: {item.status}</Text>
      </View>
      <Text style={styles.textbelowlogo}>Description: {item.driveDescription}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('CompanyDetails', { item })}
      >
        <Text style={styles.applyButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <FlatList
          data={[...Array(6).keys()]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <ShimmerItem />}
        />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={applications}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={renderApplicationItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const OffersScreen = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [logos, setLogos] = useState({});
  const offersRef = useRef(null);
  const navigation = useNavigation();

  const fetchOffers = async () => {
    const studentId = await SecureStore.getItemAsync('studentId');
    const url = `${config.apiEndpoint}/offers/${studentId}`;
    await fetchData(url, setOffers, setLoading, setError, offersRef);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  useEffect(() => {
    const fetchLogos = async () => {
      const newLogos = {};
      for (const offer of offers) {
        newLogos[offer.id] = await getCompanyLogo(offer.company);
      }
      setLogos(newLogos);
    };
    if (offers.length > 0) {
      fetchLogos();
    }
  }, [offers]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setOffers([]); // Clear the existing data
    setLogos({}); // Clear the existing logos
    await fetchOffers();
    setRefreshing(false);
  }, []);

  const renderOfferItem = ({ item, index }) => (
    <View style={styles.card} key={item.id + index.toString()}>
      <View style={styles.listingHeader}>
        <Image source={{ uri: logos[item.id] }} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.jobType}>{item.jobType}</Text>
        </View>
      </View>
      <Text style={styles.textbelowlogo}>Company: {item.company}</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.textbelowlogo}>CTC: {item.ctc}</Text>
      </View>
      <Text style={styles.textbelowlogo}>Location: {item.location}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate("CompanyDetails", { item })}
      >
        <Text style={styles.applyButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <FlatList
          data={[...Array(6).keys()]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <ShimmerItem />}
        />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={offers}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={renderOfferItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const StudentHomeScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Job Listings" component={JobListingsScreen} />
    <Tab.Screen name="Applications" component={ApplicationsScreen} />
    <Tab.Screen name="Offers" component={OffersScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: Spacing * 9,
    backgroundColor: Colors.lightPrimary,
  },
  card: {
    marginTop: Spacing * 2,
    backgroundColor: '#fff',
    borderRadius: Spacing * 2,
    paddingVertical: Spacing * 2.3,
    paddingHorizontal: Spacing * 1.5,
    marginHorizontal: Spacing * 2.2,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing * 0.2,
    },
    shadowOpacity: 0.23,
    shadowRadius: Spacing * 0.2,
    elevation: 4,
  },
  listingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing * 0.3,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: Spacing,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(2.25),
  },
  jobType: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.secondary,
  },
  textbelowlogo: {
    fontSize: responsiveFontSize(1.8),
    marginTop: Spacing,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 0.8,
    paddingHorizontal: Spacing * 1.5,
    borderRadius: Spacing,
    marginTop: Spacing * 2,
  },
  applyButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  titleShimmer: {
    width: '60%',
    height: 20,
    marginBottom: Spacing,
  },
  textShimmer: {
    width: '80%',
    height: 20,
    marginBottom: Spacing,
  },
  applyButtonShimmer: {
    width: '40%',
    height: 40,
    borderRadius: Spacing,
    marginTop: Spacing * 2,
  },
});

export default StudentHomeScreen;
