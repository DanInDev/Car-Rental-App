import React from "react";
import {Button, Text, View, Image, TextInput} from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";
import { Header } from "../../../constants/Header";
import { useNavigation } from "@react-navigation/native";

export default function RentCar({route}){
const {item} = route.params;

const navigation = useNavigation();

    return (
        <View style={Header.header}>
            <Text style={Header.title}>Rental Confirmation</Text>

            <View style={GlobalStyles.rentalContainer}>
                <Text style={GlobalStyles.carTitle}>{item.year} {item.make} {item.model}</Text>
                <Image style={GlobalStyles.imageFormatting} source={require('../../../../assets/lada.jpg')}/>

                <Text>Price per day: {JSON.stringify(item.price_per_day)}</Text>
                <Text>Car is currently located in: {item.location}</Text>
                <Text>Available for rent: {item.available ? 'Yes' : 'No'}{"\n\n"}</Text>

                <Text>Please write your desired pickup location:</Text>
                <TextInput style={GlobalStyles.listingsInput} placeholder="We ship the car to YOU! Worldwide!"/>

                <Text>{"\n"}Please write your desired pickup time and date:</Text>
                <TextInput style={GlobalStyles.listingsInput} placeholder="e.g. November 1st, 22:00"/>

                
                <Text>{"\n"}Click the button below to confirm your car rental:</Text>
                {/*Make this navigation redirect to the "View Rental History" page, when it is made*/}
                <Button title="Confirm Car Rental!" onPress={()=> navigation.navigate("Account")}/>
            </View>
        </View>
        
    )
}
