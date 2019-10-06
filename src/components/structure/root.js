import React, {useContext} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Main from '../../screens/main';
import Login from '../../screens/login';
import Menu from '../../screens/menu';
import Carpool from '../../screens/carpool';
import Camera from '../../screens/camera';
import FreeSpots from '../../screens/freeSpots';
import SpotRemainder from '../../screens/spotRemainder';

const NavigationStack = createStackNavigator({
    Main,
    Login,
    Menu,
    Carpool,
    Camera,
    FreeSpots,
    SpotRemainder,
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
});

const AppContainer = createAppContainer(NavigationStack);

const Root = (props) => {
    return (
        <AppContainer />
    );
}

export default Root;
