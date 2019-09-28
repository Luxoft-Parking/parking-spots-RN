import React from 'react';
import {View, Platform, StatusBar} from 'react-native';

const ScreenFit = ({children, style}) => {
    return (
        <View
            style={[{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            }, style]}
        >
            {children}
        </View>
    );
}

export default ScreenFit;
