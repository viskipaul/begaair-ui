import React, {useState} from 'react';
import styles from "./LoginPage.styles";
import {Image, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import Button from '../../components/Button/Button';
import AwesomeAlert from "react-native-awesome-alerts";

const RegisterPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState(false);
    const [message, setMessage] = useState('');
    const registerMessage = 'You have been succesfully registered. Please login with your new credentials.';

    const handleRegister = () => {
        fetch("https://identitymicroservice.azurewebsites.net/api/auth/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }),
        })
            .then((responseData) => {
                    if (responseData.ok) {
                        setShowAlertMessage(true);
                    }
                    else {
                        setMessage("Failed to register.");
                        setShowErrorMessage(true);
                    }
                }
            );
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
                    label="First name"
                    activeOutlineColor="rgba(78, 116, 289, 1)"
                    onChangeText={text => setFirstName(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Last name"
                    activeOutlineColor="rgba(78, 116, 289, 1)"
                    onChangeText={text => setLastName(text)}
                />
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
                    iconName="user-plus"
                    iconFolder="awesome5"
                    title="Create account"
                    onPress={() => handleRegister()}
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
            <AwesomeAlert
                show={showAlertMessage}
                showProgress={false}
                title="Successfully registered"
                message={registerMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText={"Ok"}
                confirmButtonColor="green"
                onConfirmPressed={() => {
                    setShowAlertMessage(false);
                    navigation.navigate('Login')
                }}
            />
        </View>
    )
}

export default RegisterPage;