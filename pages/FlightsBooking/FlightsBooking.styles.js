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
    welcomeMessage: {
        fontSize: 20,
    },
    textInput: {
        color: 'lightblue',
        width: 200,
        height: 50,
        marginLeft: 20,
    },
    inputView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 5,
    },
    selectText: {
        fontSize: 20,
        marginLeft: 20,
        color: 'rgba(78, 116, 289, 1)',
    },
    inputWrapper: {
        marginTop: 20,
        marginLeft: 30,
    },
    brand: {
        color: '#2596be',
        fontSize: 40,
        marginBottom: 30,
    },
    logoHeaderWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButton: {
        wrapper: {
          marginTop: 30,
        },
        iconStyle: {
            name: "search",
            type: "font-awesome",
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
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }
    }
});