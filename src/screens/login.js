import React, {useState, useContext, useEffect} from 'react';
import {View, TextInput, KeyboardAvoidingView} from 'react-native';

import {blankScreenStyle, centerViewStyle, inputSpacing, inputStyle} from '../styles';
import ScreenFit from '../components/structure/screenFit';
import Button from '../components/button';
import {DataContext} from '../components/contexts/data';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {actions: {login, getUser}, state: {isLoggedIn}} = useContext(DataContext);

    useEffect(() => {
        // try to login in case there is a jwt already saved
        getUser(true);
    }, []);
    useEffect(() => {
        if (isLoggedIn) {
            navigation.replace('Menu');
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
