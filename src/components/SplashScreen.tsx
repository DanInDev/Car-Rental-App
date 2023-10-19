import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function SplashScreen() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Welcome to</Text>
        <Text style={{fontWeight: 'bold', fontSize: 40}}>Peter's Car Rental</Text>
  
        <Button title="Login" onPress={() => Alert.alert("Login")} />
  
        <Button title="Home" onPress={() => console.log("ioaushdouisa")} />
  
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#808080',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });