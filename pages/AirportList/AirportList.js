import React from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {AirportsVal} from '../../const/AirportsVal';
import styles from './AirportList.styles';

const AirportList = ({navigation, route}) => {
    let departure = "Select your airport";
    let arrival = "Select your airport";

    let prevDeparture = route.params.prevDep;
    let prevArrival = route.params.prevArr;

    const selectAirport = (item) => {
        console.log("params type: ", route.params.type);
        if(route.params.type === 'departure') {
            departure = item;
            arrival = prevArrival;
        } else if(route.params.type === 'arrival') {
            departure = prevDeparture;
            arrival = item;
        }

        navigation.navigate('Book a flight', {
            dep: departure,
            arr: arrival,
        });
    }

    return(
      <View style={styles.container}>
          <SectionList
            sections={AirportsVal}
            renderItem={({item}) =>
                <TouchableOpacity onPress={() => selectAirport(item)}>
                    <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
            }
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
          />
      </View>
    );
};

export default AirportList;