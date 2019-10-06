import React, {useContext, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';

import Button from '../components/button';
import {blankScreenStyle, centerViewStyle, headerStyle} from '../styles';
import ScreenFit from '../components/structure/screenFit';
import {DataContext} from '../components/contexts/data';

const Menu = ({navigation}) => {
    const {state: {user}, actions: {logout}} = useContext(DataContext);

    useEffect(() => {
        if (user && !user.isDriver) {
            navigation.replace('Carpool');
        }
    }, [user]);

    const onDrive = useCallback(() => {
        navigation.push('Main');
    }, []);

    const onCarpool = useCallback(() => {
        navigation.push('Carpool');
    }, []);

    const onLogout = useCallback(async () => {
        const success = await logout();

        if (success) {
            navigation.push('Login');
        }
    }, []);

    return (
        <ScreenFit style={blankScreenStyle}>
            <View style={centerViewStyle}>
                <Text style={headerStyle}>What do you want to do today?</Text>
                <Button
                    title="Drive to work"
                    onPress={onDrive}
                    isPrimary
                />
                <Button
                    title="Carpool to work"
                    onPress={onCarpool}
                    isPrimary={false}
                />
                <Button
                    title="Logout"
                    onPress={onLogout}
                    isPrimary={false}
                />
            </View>
        </ScreenFit>
    );
}

export default Menu;
