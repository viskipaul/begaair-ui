import LoginScreen from "react-native-login-screen";
import React from "react";
import {
    StyleSheet,
} from 'react-native';

const Login = () => {
    return (
        <LoginScreen
            logoImageSource={require("../assets/logo.png")}
            onLoginPress={() => {}}
            onSignupPress={() => {}}
            onEmailChange={(email: string) => {}}
            onPasswordChange={(password: string) => {}}
            disableSocialButtons={true}
            style={styles.loginScreen}
        />
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        padding: 50,
    }
})

export default Login;