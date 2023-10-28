import React from "react";
import {Button, Text, View} from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";
import { Header } from "../../../constants/Header";

export default function RentCar({route}){
const {item} = route.params;

    return (
        <View style={Header.header}>
            <Text style={Header.title}>Finalize Rent</Text>

            <View style={GlobalStyles.container}>
                {/* still needs reviews, options for pickup date and how long you wanna rent it for*/}
                <Text>{item.make}</Text>
                <Text>{item.model}</Text>
                <Text>{JSON.stringify(item.year)}</Text>
                <Text>{item.car_type}</Text>
                <Text>{JSON.stringify(item.price_per_day)}</Text>
                <Text>{item.location}</Text>
                <Text>Available: {item.available ? 'Yes' : 'No'}</Text>
                <Button title="Pay now" onPress={()=> console.log("Patment reviced")}/>
            </View>
        </View>
        
    )
}
