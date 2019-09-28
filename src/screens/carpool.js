import React, {useCallback} from 'react';
import {View, Button, Text} from 'react-native';

import {colors, blankScreenStyle, centerViewStyle, headerStyle} from '../styles';
import ScreenFit from '../components/structure/screenFit';

const Carpool = ({navigation}) => {
    const onScan = useCallback(() => {
        navigation.push('Camera');
    }, []);

    return (
        <ScreenFit style={blankScreenStyle}>
            <View style={centerViewStyle}>
                <Text style={headerStyle}>Don't forget to scan your buddie's QR code to help them up their reputation.</Text>
                <Button
                    title="Press to Scan"
                    onPress={onScan}
                    color={colors.primary}
                />
            </View>
        </ScreenFit>
    );
}

export default Carpool;
