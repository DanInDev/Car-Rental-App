import {Button, FlatList, Text, View} from 'react-native';
import { GlobalStyles } from '../../../constants/GlobalStyles';
import { Header } from '../../../constants/Header';
import ApiCall from './ApiCall';


export default function CarListings() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Car Listings</Text>
 
              <ApiCall/>

      </View>
    );
}

