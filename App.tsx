import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Welcome to</Text>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>Peter's Car Rental</Text>

      <Button title="Login" onPress={() => console.log("Login")} />

      <Button title="Home" onPress={() => console.log("Home")} />

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
