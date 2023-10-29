import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../constants/Header';

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={Header.header}>
      <Text style={Header.title}>Login</Text>

      <View style={GlobalStyles.container}>
        <Text style={{ fontWeight: 'bold' }}>Username</Text>
        <TextInput style={GlobalStyles.input} />

        <Text style={{ fontWeight: 'bold' }}>Password</Text>
        <TextInput secureTextEntry={true} style={GlobalStyles.input} />

        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => navigation.navigate('TabNav')}
        >
          <Text style={GlobalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={{ fontWeight: 'bold' }}>{"\n\n"}Not an user?</Text>
        <TouchableOpacity
          style={GlobalStyles.button2}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={GlobalStyles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
