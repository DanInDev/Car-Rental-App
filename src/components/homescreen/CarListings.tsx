import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';


export default function CarListings() {
    return (
      <View style={styles.container}>

        <Text style={{fontWeight: 'bold', fontSize: 40}}>Car Listings</Text>

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