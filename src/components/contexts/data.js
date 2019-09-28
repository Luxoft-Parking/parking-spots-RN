import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import api from '../../utils/api';

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [globalError, setGlobalError] = useState(null);
    useEffect(() => {
        if (globalError) {
            Alert.alert(
                'Global Error',
                globalError,
                [{text: 'dismiss', onPress: dismissGlobalError}],
                {onDismiss: dismissGlobalError},
            );
        }
    }, [globalError]);

    const dismissGlobalError = () => {
        setGlobalError(null);
    };

    const login = async (email, password) => {
        try {
            const response = await api.login(email, password);
            setUser(response);
        } catch (error) {
            setGlobalError(error.message);
        }
    };

    const logout = async () => {
        try {
            await api.lgout();
            setUser(null);
        } catch (error) {
            setGlobalError(error.message);
        }
    };

    return (
        <DataContext.Provider
            value={{
                actions: {
                    login,
                    logout,
                    dismissGlobalError,
                    scanCode: async () => {},
                },
                state: {
                    isLoggedIn: !!user,
                    user,
                    globalError,
                },
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
