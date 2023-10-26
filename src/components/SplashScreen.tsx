import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';


export default function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Welcome to</Text>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>Peter's Car Rental</Text>

      <Button title="Login" onPress={() => navigation.navigate("LoginPage")} />

      <Button title="Home" onPress={() => navigation.navigate("TabNav")} />

      <StatusBar style="auto" />
    </View>
  );
}