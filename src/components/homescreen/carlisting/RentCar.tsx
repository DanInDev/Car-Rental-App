import React from "react";
import {Button, Text, View, Image} from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";
import { Header } from "../../../constants/Header";

export default function RentCar({route}){
const {item} = route.params;

    return (
        <View style={Header.header}>
            <Text style={Header.title}>Rental Confirmation</Text>

            <View style={GlobalStyles.rentalContainer}>
                <Text style={GlobalStyles.carTitle}>{item.year} {item.make} {item.model}</Text>
                <Image style={GlobalStyles.imageFormatting} source={require('../../../../assets/lada.jpg')}/>


                

                <Text>{JSON.stringify(item.price_per_day)}</Text>
                <Text>{item.location}</Text>
                <Text>Available: {item.available ? 'Yes' : 'No'}</Text>
                <Button title="Pay now" onPress={()=> console.log("Patment reviced")}/>
            </View>
        </View>
        
    )
}
