import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Dimensions} from 'react-native';

import {centerViewStyle, headerStyle, colors} from '../styles';
import {DataContext} from '../components/contexts/data';

const CarpoolTab = (props) => {
    const {state: {user}} = useContext(DataContext);
    const screenWidth = Dimensions.get('screen').width * .8;

    return (
        <View
            style={centerViewStyle}
        >
            <Text style={headerStyle}>Da Code!</Text>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 16,
                }}
            >
                <QRCode
                    // TODO
                    // value={user.qrCode}
                    value={'random_string'}
                    size={screenWidth}
                    color='#333'
                    backgroundColor='#fff'
                />
            </View>

            <Text
                style={{
                    fontStyle: 'italic',
                    color: colors.text,
                    textAlign: 'center',
                    marginTop: 32,
                    fontSize: 18,
                }}
            >
                Make sure your buddies scan this code to increase your reputation!
            </Text>
        </View>
    );
};

export default CarpoolTab;
