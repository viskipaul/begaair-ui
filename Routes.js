import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './pages/Home/Home';
import MyFlights from './pages/MyFlights/MyFlights';

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial = {true} />
                <Scene key="flights" component={MyFlights} title="Flights" />
            </Scene>
        </Router>
    );
}

export default Routes;