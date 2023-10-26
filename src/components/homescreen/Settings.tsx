import { Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { Header } from '../../constants/Header';


export default function Settings() {
    return (
      <View style={Header.header}>
        <Text style={Header.title}>Settings</Text>

        <View style={GlobalStyles.container}>
          {/*Make these into buttons*/}
          <Text>Switch theme</Text> 
          <Text>Notification settings</Text>  
          <Text>About</Text>
        </View>

      </View>
    );
  }

