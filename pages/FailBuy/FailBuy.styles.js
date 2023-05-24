import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
    },

    inputView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },

    confirmationIcon: {
        color: 'red',
        paddingTop: 40,
    },

    goButton: {
        backgroundColor: 'red',
        marginTop: 100,
    },

    confirmationText: {
        paddingTop: 40,
        fontSize: 28,
        fontWeight: 600,
    },

    confirmationSubText: {
        fontWeight: 300,
        paddingTop: 20,
        width: "80%",
    }
})
