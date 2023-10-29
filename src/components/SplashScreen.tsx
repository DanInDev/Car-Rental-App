import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../constants/GlobalStyles';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const backgroundImage = require('../../assets/splashPicture.png'); 
  const logoImage = require('../../assets/logo.png'); 

  const navigation = useNavigation();
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animate the splash screen elements when the component mounts
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  // Define the animation styles
  const animatedStyles = {
    opacity: animation,
    transform: [{ scale: animation }],
  };

  return (
    <View style={splashStyles.container}>
    <ImageBackground source={backgroundImage} style={splashStyles.backgroundStyles}>
      <Animated.View style={[splashStyles.animatedContainer, animatedStyles]}>
      
      <ImageBackground source={logoImage} style= {[splashStyles.logo]}>
        </ImageBackground>

        <Text style={splashStyles.title}>Welcome to</Text>
        <Text style={splashStyles.subtitle}>Peter's Car Rental</Text>
        
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={GlobalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => navigation.navigate('TabNav')}
        >
          <Text style={GlobalStyles.buttonText}>Home</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  </View>
  
  );
};

const splashStyles = StyleSheet.create({

  backgroundStyles: {
    resizeMode: 'cover',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  
  logo: {
    width: 205,
    height: 200,
    marginBottom: 200, // Adjust the margin as needed
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
  },
  
  animatedContainer: {
    alignItems: 'center',
  },
  
  title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  
  subtitle: {
    fontFamily: "Roboto",
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 10, // Adjust the margin as needed
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
  },
  
  
});

export default SplashScreen;
