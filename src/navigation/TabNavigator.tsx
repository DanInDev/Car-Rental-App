import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../components/SplashScreen';
import CarListings from '../components/homescreen/CarListings';
import LoginPage from '../components/login/LoginPage';
import CreateAccount from '../components/login/CreateAccount';
import Account from '../components/homescreen/Account';
import Settings from '../components/homescreen/Settings';

export default function TabNav(){
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={CarListings} />
                <Tab.Screen name="Account" component={Account} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}