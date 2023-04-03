import React, {useContext, useState} from 'react';
import styles from "./LoginPage.styles";
import {Image, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import Button from '../../components/Button/Button';
import {AuthContext} from "../../context/AuthContext";

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
        navigation.goBack();
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
                />
            </View>
        </View>
    )
}

export default LoginPage;