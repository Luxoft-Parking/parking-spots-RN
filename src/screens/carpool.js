import React, {useCallback} from 'react';
import {View, Text} from 'react-native';

import {blankScreenStyle, centerViewStyle, headerStyle} from '../styles';
import ScreenFit from '../components/structure/screenFit';
import Button from '../components/button';

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
                    isPrimary
                />
            </View>
        </ScreenFit>
    );
}

export default Carpool;
