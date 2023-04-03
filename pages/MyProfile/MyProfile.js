import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './MyProfile.styles';
import Button from '../../components/Button/Button';
import {AuthContext} from "../../context/AuthContext";

const MyProfile = ({navigation}) => {
    const {userToken} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);

    if (userToken) {
        return (
            <View style={styles.container}>
                <Text>You are logged in.</Text>
                <Button
                    title="Log out"
                    onPress={() => logout()}
                    iconName="logout"
                    iconFolder="material"
                    style={styles.logOutButton}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
                <View>
                    <Text>Sign in to see your profile information.</Text>
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

export default MyProfile;
