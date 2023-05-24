import React from 'react';
import { Text, View } from 'react-native';
import styles from './Information.styles';

const Information = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>About BegaAir</Text>
            <Text style={styles.aboutText}>BegaAir is a flight company with headquarters in Timisoara, Timis county, Romania. The company operates flights to different destinations in Europe. It has a fleet of over 200 airplanes and over 100,000 passengers every year. We are waiting for you to experience a flight with BegaAir.</Text>
        </View>
    );
}

export default Information;