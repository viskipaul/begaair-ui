import React from 'react';
import {Text, View} from "react-native";
import styles from "../FlightSearchResults/FlightSearchResults.styles";
import Button from "../../components/Button/Button";

const FlightCard = ({navigation, route, flightDetails, date}) => {

    return(
        <View style={styles.flightCardWrapper}>
            <View style={styles.flightCardHours}>
                <Text style={styles.flightCardHoursDeparture}>{flightDetails.departureTime}</Text>
                <Text>-</Text>
                <Text style={styles.flightCardHoursArrival}>{flightDetails.arrivalTime}</Text>
                <Text style={styles.flightNumberText}>{flightDetails.flightNumber}</Text>
            </View>
            <View style={styles.searchButtonWrapper}>
                <Button
                    style={styles.searchButton}
                    title={flightDetails.price + " RON"}
                    iconName="wallet"
                    iconFolder="awesome5"
                    onPress={() => {
                        navigation.navigate("Confirm your purchase", {
                            flight: flightDetails,
                            date: date,
                        });
                    }}/>
            </View>
        </View>
    )
}

export default FlightCard;