import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './MyFlights.styles';
import Button from '../../components/Button/Button';
import {AuthContext} from "../../context/AuthContext";

const MyFlights = ({navigation}) => {
    const {userToken} = useContext(AuthContext);

    if (userToken) {
        return (
            <View style={styles.container}>
                <Text>You are signed in. :)</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>Click the button below to sign in and see your flights.</Text>
                <Button
                    title="Sign in"
                    onPress={() => navigation.navigate('Login')}
                    iconName="login"
                    iconFolder="material"
                    style={styles.signInButton}
                />
            </View>
        </View>
    );
}



export default MyFlights;