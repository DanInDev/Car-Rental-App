import {Button, FlatList, Text, View} from 'react-native';
import { GlobalStyles } from '../../../constants/GlobalStyles';
import { Header } from '../../../constants/Header';
import ApiCall from './ApiCall';


export default function CarListings() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Car Listings</Text>

        <View style={GlobalStyles.container}>
          {/*Flatlist of JSON data*/}

          <Button title="Search" onPress={() => console.log("search")} />

            <View>
              <ApiCall/>
            </View>
          

        </View>

      </View>
    );
}

