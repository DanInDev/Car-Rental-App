import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { useNavigation } from '@react-navigation/native';


export default function LoginPage() {
  const navigation = useNavigation();
    
    return (
      <View style={GlobalStyles.container}>
        <Text style={{fontWeight: 'bold'}}>Login</Text>
          
          <View style={GlobalStyles.container}>
              <Text style={{fontWeight: 'bold'}}>Username</Text>
              <TextInput style={GlobalStyles.input}/>
              <Text style={{fontWeight: 'bold'}}>Password</Text>
              <TextInput secureTextEntry={true} style={GlobalStyles.input}/>
              <Button title="Login" onPress={() => navigation.navigate("TabNav")} />

              <Text style={{fontWeight: 'bold'}}>Not a user?</Text>
              <Button title="Create an account" onPress={() => navigation.navigate("CreateAccount")} />
            </View>
      </View>
    );
  }

