import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { Header } from '../../constants/Header';


export default function Settings() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Settings</Text>

        <View style={settingsStyle.settingsContainer}>
          {/*Make these into buttons*/}
          <TouchableOpacity 
            onPress={() => console.log("Theme switched")}
            style={settingsStyle.clickableSetting}>
            <Text style={settingsStyle.settingsText}>Switch Theme</Text>
          </TouchableOpacity>
           
          <TouchableOpacity 
            onPress={() => Alert.alert(
              "Notification settings",
              "There are no notifications implemented in this app, " + 
              "thus there are none to disable or enable.")}
            style={settingsStyle.clickableSetting}>
            <Text style={settingsStyle.settingsText}>Notification Settings</Text>
          </TouchableOpacity>  
          
          <TouchableOpacity 
            onPress={() => Alert.alert(
              "About the app",
              "This is a car rental app for renting cars. " +
              "\n\n" +
              "Our designated deliver driver Peter will get the car to YOU, " +
              "no matter where you may be.")}
            style={settingsStyle.clickableSetting}>
            <Text style={settingsStyle.settingsText}>About</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }

const settingsStyle = StyleSheet.create ({
  settingsContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25
  },
  clickableSetting: {
    paddingLeft: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "lightgray"
  },
  settingsText:{
    fontSize: 35,
    fontWeight: 'bold'
  }
})