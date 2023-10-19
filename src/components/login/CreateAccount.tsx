import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';


export default function CreateAccount() {
    return (
      <View style={styles.container}>

        <Text style={{fontWeight: 'bold', fontSize: 40}}>Create Account</Text>

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