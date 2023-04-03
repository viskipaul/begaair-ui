import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({
    title,
    iconName,
    iconFolder,
    style,
    onPress,
                }) => {
    return(
        <TouchableOpacity style={{...styles.wrapper, ...style}} onPress={onPress}>
            {iconFolder === 'material' && <MaterialIcon name={iconName} style={styles.icon} />}
            {iconFolder === 'awesome5' && <AwesomeIcon name={iconName} style={styles.icon} />}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;