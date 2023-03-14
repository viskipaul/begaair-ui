import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './MyFlights.styles';

const MyFlights = () => {

    return (
        <View style={styles.container}>
            <Text>Click the button below to sign in and see your flights.</Text>
            <Button title="Sign in" />
        </View>
    );
}



export default MyFlights;