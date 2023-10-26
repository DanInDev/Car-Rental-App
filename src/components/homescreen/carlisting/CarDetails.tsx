import { Text, View} from 'react-native';
import { GlobalStyles } from '../../../constants/GlobalStyles';


export default function CarDetails() {
    return (
      <View style={GlobalStyles.container}>

        {/*This should be a popup with car details*/}

        <Text style={{fontWeight: 'bold', fontSize: 40}}>Car details</Text>
        
      </View>
    );
  }

