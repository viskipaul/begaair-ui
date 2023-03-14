import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainLogo: {
        marginTop: 50,
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    welcomeMessage: {
        fontSize: 30,
    },
    cardsView: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 20,
    },
    card: {
        flexBasis: '40%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        width: 20,
        padding: 20,
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
    },
    brand: {
        color: '#2596be',
    },
    cardButton: {
        marginTop: 5,
    }
});
