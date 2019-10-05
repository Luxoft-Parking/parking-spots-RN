import React, {useState, useContext, useEffect} from 'react';
import {View, Button, TextInput, KeyboardAvoidingView} from 'react-native';

import { colors, blankScreenStyle, centerViewStyle, inputSpacing, inputStyle } from '../styles';
import ScreenFit from '../components/structure/screenFit';
import {DataContext} from '../components/contexts/data';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {actions: {login}, state: {isLoggedIn}} = useContext(DataContext);
    useEffect(() => {
        if (isLoggedIn) {
            navigation.push('Tabs');
        }
    }, [isLoggedIn]);

    function onLogin() {
        login(email, password);
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
                        disabled={false}
                        onPress={onLogin}
                        color={colors.primary}
                        style={inputSpacing}
                    />
                </View>
            </KeyboardAvoidingView>
        </ScreenFit>
    );
}

export default Login;
