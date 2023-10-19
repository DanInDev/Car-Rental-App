import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';


export default function CarListings() {
    return (
      <View style={GlobalStyles.container}>

        <Text style={{fontWeight: 'bold', fontSize: 40}}>Car Listings</Text>

      </View>
    );
}

