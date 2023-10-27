import axios from "axios";
import { useEffect, useState } from "react";
import { Button, View, FlatList, Text, Modal, Pressable } from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";
import {useNavigation} from "@react-navigation/native";

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
            <Button title="Details" onPress={() => openModal(item)} />
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
            <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={closeModal}
            transparent={true}
            >
                <View>
                    { modelContent && 
                    <View style={{backgroundColor: "white"}}>
                        <Text>{modelContent.make}</Text>
                        <Text>{modelContent.model}</Text>
                        <Text>{modelContent.year}</Text>
                        <Text>{modelContent.car_type}</Text>
                        <Text>Price per day: {modelContent.price_per_day} </Text>
                        <Text>{modelContent.location}</Text>
                        <Text>Available: {modelContent.available ? 'Yes' : 'No'}</Text>
                        <Button title="Rent this shit" onPress={()=> navigation.navigate("RentCar", {item : modelContent})}/>
                    </View>
                    }
                    {
                    !modelContent && <Text>Failed to load</Text>
                    }
                </View>
            </Modal>
        </View>
    );
}