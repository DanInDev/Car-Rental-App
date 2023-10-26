import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { Header } from '../../constants/Header';


export default function Account() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Account</Text>

        <View style={GlobalStyles.container}>

        </View>

      </View>
    );
  }

