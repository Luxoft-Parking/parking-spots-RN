import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../styles';

const Button = (props) => {
    const {
        title,
        onPress,
        isPrimary,
        noMargin,
        disabled,
    } = props;
    const backgroundColor = disabled ? colors.disabled : (isPrimary ? colors.primary : colors.white);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: '100%',
                backgroundColor,
                ...!isPrimary && {
                    borderColor: colors.primary,
                    borderStyle: 'solid',
                    borderWidth: 1,
                },
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: noMargin ? 0 : 8,
                marginBottom: noMargin ? 0 : 8,
            }}
        >
            <Text style={{color: isPrimary ? colors.white : colors.primary}}>{title}</Text>
        </TouchableOpacity>
    );
}

Button.defaultProps = {
    noMargin: false,
};

export default Button;
