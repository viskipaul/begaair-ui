import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './MyProfile.styles';

const MyProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Sign in to see your profile information.</Text>
            <Button title="Sign in" onPress={() => navigation.navigate('Login')}/>
        </View>
    );
}

export default MyProfile;
