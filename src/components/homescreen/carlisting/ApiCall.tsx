import axios from "axios";
import { useEffect, useState } from "react";
import { Button, View, FlatList, Text, Modal, Pressable } from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";

export default function ApiCall(){

    interface Car{
        make : String;
        model: String;
        year: number;
        car_type: String;
        price_per_day: number;
        location: String;
        available: boolean
    }

    const [car, setCar] = useState<Car[] | undefined>();
    const [error, setError] = useState(false);

    useEffect(() => {
        //API backend courtsey of Jakob - jamoe20
        axios.get("https://car-rentals.ladegaardmoeller.dk/cars")
            .then(res => {
                console.log(res.data)
                setCar(res.data)
                setError(false)
            })
            .catch(res => setError(true))
    }, [])

    const item = ({item} : {item : Car}) => (
        <View>
            <Text>{item.make}</Text>
            <Text>{item.model}</Text>
            <Text>Price: {item.price_per_day}</Text>
            <Text>Available: {item.available ? 'Yes' : 'No'}</Text>
            <Button title="Details" onPress={() => console.log("Details")} />
        </View>
    )




    return (
        <View style={GlobalStyles.container}>
            { !error &&
                <FlatList
                    data={car}
                    renderItem={item}
                />
            }
            {
                error && 
                <Text>The request failed</Text>
            }
        </View>
    );
}