import axios from "axios";
import { useEffect, useState } from "react";
import { Button, View, FlatList, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ApiCall(){
    const navigation = useNavigation();
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
    const [modelContent, setModalContent] = useState<Car | undefined>();
    const[modalVisible, setModalVisible] = useState(false);

    const openModal = (content : Car) => {
        setModalContent(content);
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };

    const getData = async () => {
        let data = await AsyncStorage.getItem('cars')
        if (data !== null) {
            return JSON.parse(data)
        }
        else {
            console.log("no data found")
            throw "NoData"
        }
    }

    useEffect(() => {
        getData().then(data => {
            console.log("Get cars from storage")
            setCar(data)
        }).catch(error => {
            if (error = "NoData"){
                console.log("Getting cars from API")
                //API backend courtsey of Jakob - jamoe20
                axios.get("https://car-rentals.ladegaardmoeller.dk/cars")
                .then(res => {
                    console.log(res.data)
                    setCar(res.data)
                    AsyncStorage.setItem("cars", JSON.stringify(res.data))
                        .catch(error => console.log(error))
                    setError(false)
                })
                .catch(res => setError(true))
            }})
    }, [])

    const item = ({item} : {item : Car}) => (
        <View style={carListingSheets.listingsItems}>
            <Text>{item.make}</Text>
            <Text>{item.model}</Text>
            <Text>Price: {item.price_per_day}</Text>
            <Text>Available: {item.available ? 'Yes' : 'No'}</Text>
            <Button title="Details" onPress={() => openModal(item)} />
        </View>
    )

    const rentalHandler = (content : Car) => (
        closeModal(),
        navigation.navigate("RentCar", {item : content})
    )


    return (
        <View style={carListingSheets.listingsPage}>
            { !error &&
                <FlatList
                    contentContainerStyle={carListingSheets.listingsList}
                    data={car}
                    renderItem={item}
                />
            }
            {
                error && 
                <Text>The request failed</Text>
            }
            <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={closeModal}
            transparent={true}
            >
                <View style={carListingSheets.outerModal}>
                    { modelContent && 
                    <TouchableOpacity onPress={() => closeModal()}>
                        <View>
                            <View style={carListingSheets.innerModal}>
                                <Text>{modelContent.make}</Text>
                                <Text>{modelContent.model}</Text>
                                <Text>{modelContent.year}</Text>
                                <Text>{modelContent.car_type}</Text>
                                <Text>Price per day: {modelContent.price_per_day} </Text>
                                <Text>{modelContent.location}</Text>
                                <Text>Available: {modelContent.available ? 'Yes' : 'No'}</Text>
                                <Button title="Rent this shit" onPress={()=> rentalHandler(modelContent)}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    }
                    {
                    !modelContent && <Text>Failed to load</Text>
                    }
                </View>
            </Modal>
        </View>
    );
}

const carListingSheets = StyleSheet.create({
    listingsPage: {
        flex: 1,
        backgroundColor: 'white',
    },
    listingsList: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "space-evenly",
        gap: 15
    },
    listingsItems:{
        borderWidth: 10,
        borderRadius: 4,
        borderColor: "rgba(0,0,0,0.0)",
        overflow: "hidden",
        elevation: 4,
        shadowColor: 'black'
    },
    innerModal: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        elevation: 50,
        shadowColor: 'black'
    },
    outerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})