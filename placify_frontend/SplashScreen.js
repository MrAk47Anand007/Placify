import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace 'Home' with your main screen
    }, 3000); // Duration of the splash screen

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="zoomIn"
        duration={1500}
        source={require('./assets/images/logo1.png')} // Adjust the path to your logo image
        style={styles.logo}
        resizeMode="contain"
      />
      <Animatable.Image
        animation="fadeInUp"
        duration={2000}
        delay={400}
        source={require('./assets/images/text.png')} // Adjust the path to your text image
        style={styles.text}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 370,
    height: 370,
    marginBottom: 5,
  },
  text: {
    width: 370, // Adjust the width of the text
    height: 370, // Adjust the height of the text
    marginBottom: 20,
  },
});

export default SplashScreen;
