import React from 'react';
import {AppRegistry} from 'react-native';

import {DataProvider} from './components/contexts/data';
import Root from './components/structure/root';

const App = (props) => {
    return (
        <DataProvider>
            <Root />
        </DataProvider>
    );
};

AppRegistry.registerComponent('main', () => App);
