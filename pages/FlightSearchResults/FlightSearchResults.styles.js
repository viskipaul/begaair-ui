import {StyleSheet} from "react-native";

export default StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },

    headerText: {
        marginLeft: 10,
    },

    headerWrapper: {
        backgroundColor: '#e6eff1',
        paddingBottom: 12,
        marginBottom: 20,
    },

    flightCardWrapper: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    flightCardHours: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 8,
    },

    flightCardHoursDeparture: {
        marginRight: 6,
        fontSize: 25,
        fontWeight: "bold",
    },

    flightCardHoursArrival: {
        marginLeft: 6,
        fontSize: 16,
    },

    searchButton: {
        width: 150,
        borderRadius: 12,
    },

    searchButtonWrapper: {
        alignItems: "flex-end",
        paddingRight: 10,
    },

    flightNumberText: {
        color: 'lightgray',
        paddingLeft: 180,
    }
})
