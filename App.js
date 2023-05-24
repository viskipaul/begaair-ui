import "react-native-gesture-handler";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SideDrawerRouter from "./router/SideDrawerRouter";
import AirportList from "./pages/AirportList/AirportList";
import FlightSearchResults from "./pages/FlightSearchResults/FlightSearchResults";
import LoginPage from "./pages/Authentication/LoginPage";
import {AuthProvider} from "./context/AuthContext";
import RegisterPage from "./pages/Authentication/RegisterPage";
import FirstBuy from "./pages/FirstBuy/FirstBuy";
import FinalBuy from "./pages/FinalBuy/FinalBuy";
import FailBuy from "./pages/FailBuy/FailBuy";
const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <AuthProvider>
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
                    <Stack.Screen name="Register" component={RegisterPage} />
                    <Stack.Screen name="Confirm your purchase" component={FirstBuy} />
                    <Stack.Screen name="Purchase complete" component={FinalBuy} options={{headerBackVisible: false}} />
                    <Stack.Screen name="Purchase failed" component={FailBuy} options={{headerBackVisible: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
}

export default App;