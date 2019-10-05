import React from 'react';
import {Text, View} from 'react-native';
import {bannerTextStyle} from '../styles';

const configs = {
    danger: {
        backgroundColor: '#D3455B66',
        borderColor: '#D3455B',
    },
    info: {
        backgroundColor: '#E8833A66',
        borderColor: '#E8833A',
    },
};

const Banner = (props) => {
    const {
        text,
        type,
    } = props;
    const config = configs[type];

    return (
        <View
            style={{
                width: '100%',
                backgroundColor: config.backgroundColor,
                borderColor: config.borderColor,
                borderStyle: 'solid',
                borderWidth: 1,
                padding: 16,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={bannerTextStyle}>{text}</Text>
        </View>
    );
}

export default Banner;
