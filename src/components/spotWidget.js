import React from 'react';
import {Text, TouchableOpacity, Dimensions} from 'react-native';
import {colors} from '../styles';

const SpotWidget = (props) => {
    const {
        level,
        number,
        onPress,
        isSelected,
    } = props;
    const size = (Dimensions.get('window').width * .5) / 2;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: isSelected ? `${colors.primary}66` : '#DFE7ED',
                borderColor: isSelected ? colors.primary : '#9EADBA',
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: size/2,
                width: size,
                height: size,
                padding: 8,
                margin: 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{}}>{`Level ${level}`}</Text>
            <Text style={{}}>{`Number ${number}`}</Text>
        </TouchableOpacity>
    );
}

export default SpotWidget;
