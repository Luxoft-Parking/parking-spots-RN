import React, {useContext, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';

import Button from '../components/button';
import {blankScreenStyle, centerViewStyle, headerStyle} from '../styles';
import ScreenFit from '../components/structure/screenFit';
import {DataContext} from '../components/contexts/data';

const Menu = ({navigation}) => {
    const {state: {user}} = useContext(DataContext);

    useEffect(() => {
        // TODO
        // if user is not a driver then just redirect him to the carpool screen
        if (user && user.type === 'XXX') {
            navigation.push('Carpool');
        }
    }, [user]);

    const onDrive = useCallback(() => {
        navigation.push('Main');
    }, []);

    const onCarpool = useCallback(() => {
        navigation.push('Carpool');
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
            </View>
        </ScreenFit>
    );
}

export default Menu;
