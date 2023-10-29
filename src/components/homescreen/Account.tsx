import { Button, Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../../constants/Header';
import { useNavigation } from '@react-navigation/native';


export default function Account() {
  const navigation = useNavigation();

    return (
      <View style={Header.header}>
        <Text style={Header.title}>Account</Text>

        <View style={accountStyle.container}>
          <View style={{alignItems: 'center'}}>
            <Image style={accountStyle.profilePicture} source={require('../../../assets/placeholderProfilePicture.png')}/>
          </View>
        
          <Text>Email:</Text>
          <View style={accountStyle.box}>
            <Text style={accountStyle.boxText}>peter@car.com</Text>
          </View>


          <Text>Username:</Text>
          <View style={accountStyle.box}>
            <Text style={accountStyle.boxText}>PeterCar</Text>
          </View>

          <Text></Text>{/*Spacing*/}
      
          <TouchableOpacity
            onPress={() => Alert.alert(
              "Rental History",
              "just imagine this leads to a page for your rental history")} 
            style={accountStyle.box}>
            <Text style={accountStyle.boxText}>View Rental History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert(
              "Billing Options",
              "There is no functionality for billing in this project :)")} 
            style={accountStyle.box}>
            <Text style={accountStyle.boxText}>Billing options</Text>
          </TouchableOpacity>


          <View style={accountStyle.signOutButton}>
          <TouchableOpacity style={GlobalStyles.confirmation} onPress={() => navigation.navigate("Account")}>
                    <Text style={GlobalStyles.confirmationText}>CONFIRM</Text>
                </TouchableOpacity>
            <Button title="Sign out" onPress={() => navigation.navigate("Splash")}/>
          </View>
          
          <View style={accountStyle.TerminateAccountButton}>
            <Button title="Terminate account" onPress={() => console.log("account terminated")} />
          </View>
          
        </View>

      </View>
    );
  }

const accountStyle = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  profilePicture: {
    height: 280,
    width: 280,
    borderRadius: 12,
    alignContent: 'center',
    marginBottom: 15
  },
  box: {
    backgroundColor: 'lightgray',
    paddingVertical: 3,
    marginBottom: 5,
    paddingLeft: 8
  },
  boxText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  signOutButton: {
      marginTop: 5,
      alignItems: 'flex-start'
  },
  TerminateAccountButton: {
    marginTop: 'auto'
  }
})

