import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../components/login/LoginPage";
import CreateAccount from "../components/login/CreateAccount";
import SplashScreen from "../components/SplashScreen";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

export default function StackNav() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="LoginPage" component={LoginPage}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
            <Stack.Screen name="TabNav" component={TabNav}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}



