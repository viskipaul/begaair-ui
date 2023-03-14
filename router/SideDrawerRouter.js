import "react-native-gesture-handler";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from '../pages/Home/Home';
import MyFlights from '../pages/MyFlights/MyFlights';
import Information from "../pages/Information/Information";
import MyProfile from "../pages/MyProfile/MyProfile";
import FlightsBooking from "../pages/FlightsBooking/FlightsBooking";
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const SideDrawerRouter = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({focused, size, color }) => <Icon name="home" size={24} />,
                }}
            />
            <Drawer.Screen
                name="Book a flight"
                component={FlightsBooking}
                initialParams={{
                    dep: 'Select airport',
                    arr: 'Select airport'
                }}
                options={{
                    drawerIcon: ({focused, size, color}) => <Icon name="wallet" size={24} />,
                }}/>
            <Drawer.Screen
                name="My flights"
                component={MyFlights}
                options={{
                    drawerIcon: ({focused, size, color}) => <Icon name="airplane" size={24} />,
                }}/>
            <Drawer.Screen
                name="Information"
                component={Information}
                options={{
                    drawerIcon: ({focused, size, color}) => <Icon name="information-circle" size={24} />,
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={MyProfile}
                options={{
                    drawerIcon: ({focused, size, color}) => <Icon name="person" size={24} />,
                }}
            />
        </Drawer.Navigator>
    )
}

export default SideDrawerRouter;