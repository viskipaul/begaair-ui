import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainLogo: {
        width: 150,
        height: 150,
        marginTop: 50,
    },
    logoHeaderWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        color: '#2596be',
        fontSize: 40,
        marginBottom: 30,
    },
    loginWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    loginControlsWrapper: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerButton: {
        iconStyle: {
            name: "user-plus",
            type: "font-awesome",
            size: 15,
            color: "white",
        },
        buttonStyle: {
            backgroundColor: 'gray',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
        },
    },
    loginButton: {
        wrapper: {
            marginTop: 20,
        },
        iconStyle: {
            name: "login",
            type: "material",
            size: 15,
            color: "white",
        },
        iconContainerStyle: {
            marginRight: 10,
        },
        titleStyle: {
            fontWeight: '700'
        },
        buttonStyle: {
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
        },
        containerStyle: {
            width: 250,
            marginHorizontal: 10,
        }
    }
})