import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarListings from '../components/homescreen/carlisting/CarListings';
import Account from '../components/homescreen/Account';
import Settings from '../components/homescreen/Settings';
import { Image, StyleSheet } from 'react-native';

export default function TabNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Car Listings'
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "lightgray" }, 
      }}
    >
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/settingsLogo.png')}
              style={tabStyle.tabImage}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Car Listings"
        component={CarListings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/car-icon.png')}
              style={tabStyle.tabImage}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/accountLogo.png')}
              style={tabStyle.tabImage}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabStyle = StyleSheet.create ({
  tabImage: {
      width: 30,
      height: 30
  }
})
