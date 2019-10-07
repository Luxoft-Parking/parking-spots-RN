import React, {useState, useContext, useEffect} from 'react';
import {View, TextInput, KeyboardAvoidingView} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import {blankScreenStyle, centerViewStyle, inputSpacing, inputStyle} from '../styles';
import ScreenFit from '../components/structure/screenFit';
import Button from '../components/button';
import {DataContext} from '../components/contexts/data';

async function getToken() {
    const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    if (finalStatus !== 'granted') {
        return null;
    }

    const token = await Notifications.getExpoPushTokenAsync();
    return token;
}

const Login = ({navigation}) => {
    const [email, setEmail] = useState('lmedina@luxoft.com');
    const [password, setPassword] = useState('pass1123');
    const [token, setToken] = useState(null);
    const {actions: {login, getUser}, state: {isLoggedIn}} = useContext(DataContext);

    useEffect(() => {
        (async () => {
            try {
                const token = await getToken();
                setToken(token);
            } catch (error) {
                console.error(error);
            }
        })();
        // try to login in case there is a jwt already saved
        getUser(true);
    }, []);
    useEffect(() => {
        if (isLoggedIn) {
            navigation.replace('Menu');
        }
    }, [isLoggedIn]);

    function onLogin() {
        login(email, password, token);
    }

    return (
        <ScreenFit style={blankScreenStyle}>
            <KeyboardAvoidingView behavior="padding">
                <View style={centerViewStyle}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        style={[inputStyle, inputSpacing]}
                    />
                    <TextInput
                        placeholder="Password"
                        autoCompleteType="password"
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                        style={[inputStyle, inputSpacing]}
                    />
                    <Button
                        title="Login"
                        onPress={onLogin}
                        isPrimary
                        disabled={!email || !password}
                    />
                </View>
            </KeyboardAvoidingView>
        </ScreenFit>
    );
}

export default Login;
