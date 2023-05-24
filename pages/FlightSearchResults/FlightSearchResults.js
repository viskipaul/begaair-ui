import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "../FlightSearchResults/FlightSearchResults.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FlightCard from "./FlightCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FlightSearchResults = ({navigation, route}) => {

    return(
        <View>
            <View style={styles.headerWrapper}>
                <View style={styles.inputView}>
                    <View style={styles.inputView}>
                        <Icon name="airplane-takeoff" size={24}/>
                        <Text style={styles.headerText}>{route.params.departure.split("-")[0]}</Text>
                    </View>
                    <Icon name="arrow-right-thin" size={24}/>
                    <View style={styles.inputView}>
                        <Icon name="airplane-landing" size={24}/>
                        <Text style={styles.headerText}>{route.params.arrival.split("-")[0]}</Text>
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Icon name="calendar-month" size={24}/>
                    <Text style={styles.headerText}>{route.params.date}</Text>
                </View>
            </View>

            {route.params.flights.map(result => {
                return <FlightCard  key={result.id} flightDetails={result} navigation={navigation} date={route.params.date}/>
            })}
        </View>
    )
}

export default FlightSearchResults;