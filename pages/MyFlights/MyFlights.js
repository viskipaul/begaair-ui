import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './MyFlights.styles';
import Button from '../../components/Button/Button';
import {AuthContext} from "../../context/AuthContext";
import BookingCard from "./BookingCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyFlights = ({navigation}) => {
    const {userToken} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [token, setToken] = useState("");

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserToken().then(response => {
                fetchMyBookings(response);
                setToken(response);
            });
        });
        return unsubscribe;
    }, [navigation]);

    const getUserToken = async () => {
        return await AsyncStorage.getItem('userToken');
    }

    const fetchMyBookings = (token) => {
        fetch("https://ticketsmanagementmicroservice.azurewebsites.net/Booking/getBookings", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("USER TOKEN FROM MY FLIGHTS REQUEST: ", userToken);
                setBookings(responseData);
                return responseData;
            })
            .catch((error) => {
                console.error(error);
                return error;
            });
    }

    const handleDeleteBooking = () => {
        fetchMyBookings(token);
    }

    if (userToken) {
        return (
            <View style={styles.container}>
                {bookings.map((booking) => {
                    return <BookingCard key={booking.id} bookingDetails={booking} onDelete={() => handleDeleteBooking()}/>
                })}
            </View>
        );
    }

    return (
        <View style={styles.unsignedContainer}>
            <Text style={styles.unsignedHeaderText}>Click the button below to sign in and see your flights.</Text>
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



export default MyFlights;