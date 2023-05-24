import React from 'react';
import {Text, View} from "react-native";
import styles from './FailBuy.styles';
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button/Button";

const FailBuy = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Icon name="md-close-circle-outline" size={128} style={styles.confirmationIcon}/>
            <Text style={styles.confirmationText}>BOOKING FAILED</Text>
            <Text style={styles.confirmationSubText}>Click the button below to return to the booking page and try again.</Text>
            <Button
                iconName="calendar"
                iconFolder="material"
                title="Go to booking page"
                style={styles.goButton}
                onPress={() => navigation.navigate("Book a flight")}
            />
        </View>
    )
}

export default FailBuy;