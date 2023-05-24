import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
    },
    unsignedContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInButton: {
        marginTop: 30,
    },
    bookingCardWrapper: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: "90%",
        height: 170,
    },
    detailsLine: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    detailsTitle: {
        color: 'gray',
        marginRight: 3,
    },
    detailsValue: {
        marginRight: 3,
    },
    dateHeaderText: {
        paddingLeft: 12,
        paddingTop: 10,
        fontWeight: 400,
    },
    horizontalLine: {
        width: "95%",
        borderWidth: 0.5,
        borderColor: 'lightgray',
        margin: 8,
        height: 1,
        backgroundColor: 'lightgray',
    },
    flightNumberText: {
        paddingLeft: 12,
        color: 'gray',
        paddingBottom: 3,
    },
    locationsTextWrapper: {
        paddingLeft: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    locationsText: {
        marginRight: 5,
        fontWeight: 800,
    },
    passengersTextWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 12,
    },
    passengersText: {
        paddingTop: 3,
        marginRight: 5,
    },
    cancelButton: {
        backgroundColor: 'red',
        width: 180,
        fontSize: 12,
        borderRadius: 20,
    },
    cancelButtonWrapper: {
        alignItems: "flex-end",
        paddingRight: 10,
    },
    unsignedHeaderText: {
        fontSize: 14,
        fontWeight: 700,
    }
});