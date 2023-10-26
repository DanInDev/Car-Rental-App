import { Button, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { Header } from '../../constants/Header';


export default function Account() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Account</Text>

        <View style={GlobalStyles.container}>
          {/*Blank profile picture iocn*/}
          <Text>First name</Text>
          <Text>Last name</Text>
          <Text>View booking history</Text>
          <Text>Payments options</Text>

          <Button title="Terminate account" onPress={() => console.log("account terminated")} />
        </View>

      </View>
    );
  }

