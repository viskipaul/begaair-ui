import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './MyProfile.styles';
import Button from '../../components/Button/Button';
import {AuthContext} from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyProfile = ({navigation}) => {
    const {logout} = useContext(AuthContext);
    const {userToken} = useContext(AuthContext);
    const [user, setUser] = useState("");

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserToken().then(response => {
                fetchUserInfo(response)
            });
        });
        return unsubscribe;
    }, [navigation])

    const getUserToken = async () => {
        return await AsyncStorage.getItem('userToken');
    }

    const fetchUserInfo = (token) => {
        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/api/User", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                setUser(responseData);
                console.log("USER: ", responseData);
                return responseData;
            })
            .catch((error) => {
                console.error(error);
                return error;
            });
    }

    if (userToken) {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome, {user.name}!</Text>
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
            <Text style={styles.signInMessage}>Sign in to see your profile information.</Text>
            <Button
                title="Sign in"
                onPress={() => navigation.navigate('Login')}
                iconName="login"
                iconFolder="material"
                style={styles.signInButton}
            />
        </View>
    );
}

export default MyProfile;
