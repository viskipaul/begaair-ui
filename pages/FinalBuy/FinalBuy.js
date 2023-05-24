import React from 'react';
import {Text, View} from "react-native";
import styles from './FinalBuy.styles';
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button/Button";

const FinalBuy = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Icon name="md-checkmark-circle-outline" size={128} style={styles.confirmationIcon}/>
            <Text style={styles.confirmationText}>BOOKING COMPLETE</Text>
            <Text style={styles.confirmationSubText}>You can view all your bookings under "My flights" page.</Text>
            <Button
                iconName="calendar"
                iconFolder="material"
                title="Go to my bookings"
                style={styles.goButton}
                onPress={() => navigation.navigate("My flights")}
            />
        </View>
    )
}

export default FinalBuy;