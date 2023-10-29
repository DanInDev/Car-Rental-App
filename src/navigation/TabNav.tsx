import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarListings from '../components/homescreen/carlisting/CarListings';
import Account from '../components/homescreen/Account';
import Settings from '../components/homescreen/Settings';
import { Image } from 'react-native';

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
              style={{ width: 30, height: 30, tintColor: color }}
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
              style={{ width: 30, height: 30 }}
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
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
