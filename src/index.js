import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import {DataProvider} from './components/contexts/data';
import Main from './screens/main';
import Login from './screens/login';
import Menu from './screens/menu';
import Carpool from './screens/carpool';
import Camera from './screens/camera';

const NavigationStack = createStackNavigator({
    Main,
    Login,
    Menu,
    Carpool,
    Camera,
}, {
    // initialRouteName: 'Login',
    initialRouteName: 'Main',
    headerMode: 'none',
});

const AppContainer = createAppContainer(NavigationStack);

const App = (props) => {
    return (
        <DataProvider>
            <AppContainer />
        </DataProvider>
    );
};

AppRegistry.registerComponent('main', () => App);
