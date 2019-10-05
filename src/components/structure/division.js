import React from 'react';
import {View} from 'react-native';

const Division = () => {
    return (
        <View
            style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                marginLeft: 16,
                marginRight: 16,
                marginTop: 32,
                marginBottom: 32,
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: '#aaa',
                }}
            />
        </View>
    );
}

export default Division;
