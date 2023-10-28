import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../components/login/LoginPage";
import CreateAccount from "../components/login/CreateAccount";
import SplashScreen from "../components/SplashScreen";
import TabNav from "./TabNav";
import RentCar from "../components/homescreen/carlisting/RentCar"
import ReviewCar from "../components/homescreen/carlisting/ReviewCar"; 
import Account from "../components/homescreen/Account";

const Stack = createStackNavigator();

export default function StackNav() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="LoginPage" component={LoginPage}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
            <Stack.Screen name="TabNav" component={TabNav}/>
            <Stack.Screen name="RentCar" component={RentCar}/>
            <Stack.Screen name="ReviewCar" component={ReviewCar}/>
            <Stack.Screen name="Account" component={Account}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}



