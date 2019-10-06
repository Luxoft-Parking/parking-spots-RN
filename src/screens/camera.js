import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, Alert, Dimensions} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

import {DataContext} from '../components/contexts/data';
import { colors } from '../styles';

const Camera = ({navigation}) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [didScan, setDidScan] = useState(false);
    const {actions: {carpool}} = useContext(DataContext);

    useEffect(() => {
        let didCancel = false;
        (async () => {
            const {status} = await Permissions.askAsync(Permissions.CAMERA);

            if (didCancel) return;

            setHasCameraPermission(status === 'granted');
        })();

        return () => { didCancel = true; };
    }, []);

    if (hasCameraPermission === null) {
        message = 'Requesting camera permission';
    } else if (hasCameraPermission === false) {
        message = 'No access to camera';
    } else {
        message = 'Scan the QR code!';
    }

    const handleBarCodeScanned = async ({data}) => {
        setDidScan(true);
        const success = await carpool(data, true);

        if (success) {
            const onSuccess = () => navigation.push('Menu');
            Alert.alert(
                'Success!',
                'You are carpooling now!',
                [{text: 'ok', onPress: onSuccess}],
                {onDismiss: onSuccess},
            );
        } else {
            const onDismiss = () => setDidScan(false);
            Alert.alert(
                'Error!',
                'There was a problem!',
                [{text: 'ok', onPress: onDismiss}],
                {onDismiss: onDismiss},
            );
        }
    };

    const size = Dimensions.get('screen').width * .75;

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.black,
            }}>
            {hasCameraPermission &&
                <BarCodeScanner
                    onBarCodeScanned={didScan ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                />
            }
            <View
                style={{
                    width: size,
                    height: size,
                    borderColor: colors.primary,
                    borderWidth: 4,
                    borderStyle: 'dashed',
                    borderRadius: 1,
                }}
            />
            <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    backgroundColor: '#00000077',
                    padding: 16,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        textAlign: 'center',
                    }}
                >
                    {message}
                </Text>
            </View>

        </View>
    );
};

export default Camera;
