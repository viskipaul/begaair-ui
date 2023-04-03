import React, {useState} from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FlightsBooking.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from '../../components/Button/Button';
import AwesomeAlert from 'react-native-awesome-alerts';

const FlightsBooking = ({navigation, route}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [flightDate, setFlightDate] = useState(new Date(Date.now()));
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [message, setMessage] = useState('');

    let errorMessage = '';

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }
    const handleConfirmDate = (date) => {
        setFlightDate(new Date(date));
        hideDatePicker();
    }

    const handleSearchFlights = () => {
        let today = new Date();

        if(route.params.arr === route.params.dep && route.params.arr !== 'Select airport') {
            errorMessage = "The departure and destination locations cannot be the same.";
        } else if (route.params.arr === 'Select airport' || route.params.dep === 'Select airport') {
            errorMessage = "Please select your departure and destination location.";
        } else if (flightDate.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
            errorMessage = "The selected date is in the past. Please select a proper date for your flight.";
        }
        if(errorMessage !== '') {
            console.log("Error message: ", errorMessage);
            setMessage(errorMessage);
            setShowErrorMessage(true);
        } else {
            navigation.navigate('Flight results');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoHeaderWrapper}>
                <Image style={styles.mainLogo} source={require('../../assets/logo.png')} />
                <Text style={styles.brand}>BegaAir</Text>
            </View>

            <View style={styles.inputWrapper}>
                <Text>LEAVING FROM</Text>
                <View style={styles.inputView}>
                    <Icon name="airplane-takeoff" size={24}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Select an airport', {
                        type: 'departure',
                        prevDep: route.params.dep,
                        prevArr: route.params.arr,
                    })}>
                        <Text style={styles.selectText}>{route.params.dep}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputWrapper}>
                <Text>GOING TO</Text>
                <View style={styles.inputView}>
                    <Icon name="airplane-landing" size={24}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Select an airport', {
                        type: 'arrival',
                        prevDep: route.params.dep,
                        prevArr: route.params.arr,
                    })}>
                        <Text style={styles.selectText}>{route.params.arr}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputWrapper}>
                <Text>WHEN</Text>
                <View style={styles.inputView}>
                    <Icon name="calendar-blank-outline" size={24}/>
                    <TouchableOpacity onPress={showDatePicker}>
                        <Text style={styles.selectText}>{flightDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                    />
                </View>
            </View>

            <View style={styles.logoHeaderWrapper}>
                <Button
                    style={styles.searchButton}
                    title="Search flights"
                    iconName="search"
                    iconFolder="awesome5"
                    onPress={() => handleSearchFlights()}/>

                <AwesomeAlert
                    show={showErrorMessage}
                    showProgress={false}
                    title="Error"
                    message={message}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText={"Ok"}
                    confirmButtonColor="#DD6B55"
                    onConfirmPressed={() => setShowErrorMessage(false)}
                />
            </View>
        </View>
    );
}

export default FlightsBooking;