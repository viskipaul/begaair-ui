import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from "react-native";
import styles from "./MyFlights.styles";
import Button from "../../components/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookingCard = ({bookingDetails, onDelete}) => {
    const [userToken, setUserToken] = useState("");
    const [readableDate, setReadableDate] = useState("");

    useEffect(() => {
        const date = new Date(bookingDetails.bookingDate);
        setReadableDate(date.toLocaleDateString());
        getUserToken().then(result => setUserToken(result));
    }, [])

    const getUserToken = async () => {
        return await AsyncStorage.getItem('userToken');
    }

    const handleCancelBooking = () => {
        fetch(`https://ticketsmanagementmicroservice.azurewebsites.net/Booking?bookingId=${bookingDetails.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${userToken}`
            }
        })
            .then((responseData) => {
                if (responseData.ok) {
                    onDelete();
                }
            })
            .catch((error) => {
                console.error(error);
                return error;
            })
    }

    return(
        <View style={styles.bookingCardWrapper}>
            <Text style={styles.dateHeaderText}>{readableDate} {bookingDetails.flight.departureTime}</Text>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.flightNumberText}>{bookingDetails.flight.flightNumber}</Text>
            <View style={styles.locationsTextWrapper}>
                <Text style={styles.locationsText}>{bookingDetails.flight.departureLocation.split(" - ")[0]}</Text>
                <Text style={styles.locationsText}>-</Text>
                <Text style={styles.locationsText}>{bookingDetails.flight.arrivalLocation.split(" - ")[0]}</Text>
            </View>
            <View style={styles.passengersTextWrapper}>
                <Text style={styles.passengersText}>{bookingDetails.noOfPassengers}</Text>
                <Text style={styles.passengersText}>passengers</Text>
            </View>
            <View style={styles.cancelButtonWrapper}>
                <Button
                    style={styles.cancelButton}
                    iconName="table-cancel"
                    iconFolder="material"
                    title="Cancel booking"
                    onPress={() => handleCancelBooking()} />
            </View>

        </View>
    )
}

export default BookingCard;