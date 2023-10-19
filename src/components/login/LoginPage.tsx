import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';


export default function LoginPage() {
    return (
      <View style={styles.container}>

        <Text style={{fontWeight: 'bold', fontSize: 40}}>Login page</Text>

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