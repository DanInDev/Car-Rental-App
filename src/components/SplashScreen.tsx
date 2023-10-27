import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
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
      <Animated.View style={[splashStyles.animatedContainer, animatedStyles]}>
        <Text style={splashStyles.title}>Welcome to</Text>
        <Text style={splashStyles.subtitle}>Peter's Car Rental</Text>
        <TouchableOpacity
          style={splashStyles.button}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={splashStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={splashStyles.button}
          onPress={() => navigation.navigate('TabNav')}
        >
          <Text style={splashStyles.buttonText}>Home</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const splashStyles = StyleSheet.create({
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
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SplashScreen;
