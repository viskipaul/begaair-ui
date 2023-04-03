import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Home.styles';

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.mainLogo} source={require('../../assets/logo.png')} />
            <Text style={styles.welcomeMessage}>Welcome to <Text style={styles.brand}>BegaAir!</Text></Text>
            <Text style={styles.subtitle}></Text>
            <View style={styles.cardsView}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Book a flight")}>
                    <Icon name="search-circle-outline" size={36} />
                    <Text style={styles.cardButton}>Book a flight</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("My flights")}>
                    <Icon name="airplane" size={36} />
                    <Text style={styles.cardButton}>View my flights</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;