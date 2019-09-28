import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {colors} from '../styles';
import ScreenFit from '../components/structure/screenFit';
import ParkingTab from './parkingTab';
import CarpoolTab from './carpoolTab';

const Tabs = createMaterialTopTabNavigator({
    ParkingTab,
    CarpoolTab
}, {
    tabBarOptions: {
        inactiveTintColor: colors.text,
        activeTintColor: colors.text,
        indicatorStyle: {
            height: '100%',
            backgroundColor: colors.tabBackground,
            borderColor: colors.tabBorder,
            borderWidth: 2,
        },
        labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        style: {
            backgroundColor: '#fff',
        },
    }
});

const Main = ({navigation}) => {
    return (
        <ScreenFit>
            <Tabs navigation={navigation} />
        </ScreenFit>
    );
};

// This is not found in the docs but a workaround is posted here:
// https://github.com/react-navigation/react-navigation/issues/90
Main.router = Tabs.router;

export default Main;
