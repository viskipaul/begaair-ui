import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState('false');
    const [userToken, setUserToken] = useState(null);

    const login = (email, password) => {
        return fetch("https://identitymicroservice.azurewebsites.net/api/auth/Login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.hasOwnProperty('token')) {
                    console.log(responseData['token']);
                    setIsLoading(true);
                    setUserToken(responseData['token']);
                    AsyncStorage.setItem('userToken', responseData['token']);
                    setIsLoading(false);
                    return "ok";
                } else if (responseData.hasOwnProperty('Error')) {
                    console.log(responseData['Error']);
                    return responseData['Error'];
                }
            });

    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        } catch (e) {
            console.log('isLoggedIn error:', e);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}