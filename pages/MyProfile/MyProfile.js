import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './MyProfile.styles';

const MyProfile = () => {
    return (
        <View style={styles.container}>
            <Text>Sign in to see your profile information.</Text>
            <Button title="Sign in" />
        </View>
    );
}

export default MyProfile;
