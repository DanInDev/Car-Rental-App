import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { Header } from '../../constants/Header';


export default function Settings() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Settings</Text>

        <View style={GlobalStyles.container}>
          
        </View>

      </View>
    );
  }

