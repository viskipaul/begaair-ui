import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    signInButton: {
        marginTop: 30,
    },
    logOutButton: {
        backgroundColor: 'red',
    },
    signInMessage: {
        fontWeight: 600,
        fontSize: 20,
        paddingTop: 30,
    },
    welcomeText: {
        fontSize: 28,
        marginTop: 40,
        fontWeight: 500,
        marginBottom: 30,
    }
});