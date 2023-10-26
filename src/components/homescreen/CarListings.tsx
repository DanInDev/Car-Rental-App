import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { Header } from '../../constants/Header';


export default function CarListings() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Car Listings</Text>

        <View style={GlobalStyles.container}>
          
        </View>

      </View>
    );
}

