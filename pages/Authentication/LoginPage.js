import React, {useContext, useState} from 'react';
import styles from "./LoginPage.styles";
import {Image, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import Button from '../../components/Button/Button';
import {AuthContext} from "../../context/AuthContext";
import AwesomeAlert from "react-native-awesome-alerts";

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [message, setMessage] = useState('Login failed.');
    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login(email, password).then((result) => {
            if (result === "ok") {
                navigation.goBack();
            } else {
                setMessage(result);
                setShowErrorMessage(true);
            }
        });
    }

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
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    activeOutlineColor="rgba(78, 116, 289, 1)"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={styles.loginControlsWrapper}>
                <Button
                    iconName="login"
                    iconFolder="material"
                    title="Login"
                    onPress={() => handleLogin()}
                />
                <Button
                    style={styles.registerButton}
                    iconName="user-plus"
                    iconFolder="awesome5"
                    title="Create new account"
                    onPress={() => navigation.navigate("Register")}
                />
            </View>
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
    )
}

export default LoginPage;