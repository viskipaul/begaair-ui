import React from 'react';
import styles from "./LoginPage.styles";
import {Image, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import {Button} from "@rneui/themed";

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoHeaderWrapper}>
                <Image style={styles.mainLogo} source={require('../../assets/logo.png')} />
                <Text style={styles.brand}>BegaAir</Text>
            </View>

            <View style={styles.loginWrapper}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    activeOutlineColor="rgba(78, 116, 289, 1)"
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    activeOutlineColor="rgba(78, 116, 289, 1)"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.loginControlsWrapper}>
                <Button
                    style={styles.loginButton.wrapper}
                    title="Login"
                    icon={styles.loginButton.iconStyle}
                    iconContainerStyle={styles.loginButton.iconContainerStyle}
                    titleStyle={styles.loginButton.titleStyle}
                    buttonStyle={styles.loginButton.buttonStyle}
                    containerStyle={styles.loginButton.containerStyle}
                    onPress={() => {}}
                />
                <Button
                    style={styles.loginButton.wrapper}
                    title="Create new account"
                    icon={styles.registerButton.iconStyle}
                    iconContainerStyle={styles.loginButton.iconContainerStyle}
                    titleStyle={styles.loginButton.titleStyle}
                    buttonStyle={styles.registerButton.buttonStyle}
                    containerStyle={styles.loginButton.containerStyle}
                    onPress={() => {}}/>
            </View>
        </View>
    )
}

export default LoginPage;