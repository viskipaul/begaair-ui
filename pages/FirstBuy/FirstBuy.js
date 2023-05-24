import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./FirstBuy.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";

const FirstBuy = ({navigation, route, flight}) => {
    const [numberOfPassengers, setNumberOfPassengers] = useState(1);
    const [price, setPrice] = useState(parseInt(route.params.flight.price));
    const [userToken, setUserToken] = useState("");

    useEffect(() => {
        getUserToken().then(result => setUserToken(result));
    })

    const getUserToken = async () => {
        return await AsyncStorage.getItem('userToken');
    }

    const handleBuyTickets = () => {
        console.log("DATE: ", route.params.date);
        fetch(`https://ticketsmanagementmicroservice.azurewebsites.net/Booking/addBooking?flightId=${route.params.flight.id}&noOfPassengers=${numberOfPassengers}&bookingDate=${moment(route.params.date, "DD.MM.YYYY").toISOString()}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${userToken}`
            }
        })
            .then((responseData) => {
                if (responseData.ok) {
                    navigation.navigate("Purchase complete");
                } else {
                    navigation.navigate("Purchase failed");
                }

            })
            .catch((error) => {
                console.error(error);
                return error;
            })
    }

    return(
        <View>
            <View style={styles.headerWrapper}>
                <View style={styles.inputView}>
                    <Icon name="airplane-takeoff" size={24} />
                    <Text style={styles.headerText}>{route.params.flight.departureLocation.split("-")[0]}</Text>
                    <Text style={styles.headerText}>{route.params.flight.departureTime}</Text>
                </View>

                <View style={styles.inputView}>
                    <Icon name="airplane-landing" size={24} />
                    <Text style={styles.headerText}>{route.params.flight.arrivalLocation.split("-")[0]}</Text>
                    <Text style={styles.headerText}>{route.params.flight.arrivalTime}</Text>
                </View>

                <View style={styles.inputView}>
                    <Icon name="calendar-month" size={24} />
                    <Text style={styles.headerText}>{route.params.date}</Text>
                </View>
            </View>
            <View>
                <View style={styles.inputView}>
                    <Text style={styles.numberSelectorHeaderText}>Number of passengers</Text>
                </View>

                <View style={styles.numberSelector}>
                    <TouchableOpacity onPress={() => {
                        if (numberOfPassengers > 1) {
                            setNumberOfPassengers(numberOfPassengers - 1);
                            setPrice(parseInt(route.params.flight.price) * (numberOfPassengers - 1));
                        }
                    }}>
                        <Icon name="minus-circle-outline" size={42} style={styles.numberSelectorIcon}/>
                    </TouchableOpacity>

                    <Text style={styles.numberSelectorNumber}>{numberOfPassengers}</Text>

                    <TouchableOpacity onPress={() => {
                        setNumberOfPassengers(numberOfPassengers + 1);
                        setPrice(parseInt(route.params.flight.price) * (numberOfPassengers + 1))
                    }}>
                        <Icon name="plus-circle-outline" size={42} style={styles.numberSelectorIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buyButton}>
                    <Button
                        style={styles.searchButton}
                        title={"Pay " + price + " RON"}
                        iconName="wallet"
                        iconFolder="awesome5"
                        onPress={() => handleBuyTickets()}/>
                </View>
            </View>
        </View>
    )
}

export default FirstBuy;