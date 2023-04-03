import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        flexDirection: 'row',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    icon: {
        fontSize: 20,
        color: '#fff',
    },
    text: {
        fontWeight: 700,
        color: '#fff',
        marginVertical: 15,
        fontSize: 18,
        paddingLeft: 5,
    }
});
