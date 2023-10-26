import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarListings from '../components/homescreen/CarListings';
import Account from '../components/homescreen/Account';
import Settings from '../components/homescreen/Settings';

export default function TabNav(){
    const Tab = createBottomTabNavigator();

    return (
        //No navigationcontainer, as it is already in the StackNav
        <Tab.Navigator initialRouteName='Car Listings' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Car Listings" component={CarListings} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}