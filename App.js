import "react-native-gesture-handler";
import {
    StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SideDrawerRouter from "./router/SideDrawerRouter";
import AirportList from "./pages/AirportList/AirportList";
import FlightSearchResults from "./pages/FlightSearchResults/FlightSearchResults";
import LoginPage from "./pages/Authentication/LoginPage";
const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BaseRouter"
                    component={SideDrawerRouter}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Select an airport" component={AirportList} />
                <Stack.Screen name="Flight results" component={FlightSearchResults} />
                <Stack.Screen name="Login" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });

export default App;