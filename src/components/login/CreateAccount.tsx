import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../constants/Header';

export default function CreateAccount() {
  const navigation = useNavigation();
    
  return (
    <View style={Header.header}>
      <Text style={Header.title}>Create Account</Text>
        
        <View style={GlobalStyles.container}>
          <Text style={{fontWeight: 'bold'}}>Email</Text>
          <TextInput style={GlobalStyles.input}/>
          
          <Text style={{fontWeight: 'bold'}}>Username</Text>
          <TextInput style={GlobalStyles.input}/>
          
          <Text style={{fontWeight: 'bold'}}>Password</Text>
          <TextInput secureTextEntry={true} style={GlobalStyles.input}/>
          
          <Text style={{fontWeight: 'bold'}}>Repeat password</Text>
          <TextInput secureTextEntry={true} style={GlobalStyles.input}/>

          <Text> </Text>

          <TouchableOpacity
            style={GlobalStyles.button}
            onPress={() => navigation.navigate('TabNav')}
          >
            <Text style={GlobalStyles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
  }
