import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';

import api from '../../utils/api';

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [spot, setSpot] = useState(null);
    const [freeSpots, setFreeSpots] = useState([]);
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
            const loginResponse = await api.user.login(email, password);

            if (loginResponse.status === 400) {
                throw new Error('Invalid username and password!');
            }
            if (!loginResponse.ok) {
                throw new Error('There was an error [login]');
            }

            const jwt = await loginResponse.text();

            await SecureStore.setItemAsync('jwt', jwt);

            const userResponse = await api.user.info();

            if (userResponse.status === 404) {
                throw new Error('User not found');
            }
            if (!userResponse.ok) {
                throw new Error('There was an error [userInfo]');
            }

            const user = await userResponse.json();

            setUser(user);
            return true;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const logout = async () => {
        try {
            const logoutResponse = await api.user.logout();

            if (!logoutResponse.ok) {
                throw new Error('There was an error [user.logout]');
            }

            await SecureStore.setItemAsync('jwt', '');
            setUser(null);
            setSpot(null);
            setFreeSpots([]);
            return true;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const getUser = async (silent) => {
        try {
            const userResponse = await api.user.info();

            if (!silent && userResponse.status === 404) {
                throw new Error('User not found');
            }

            if (!silent && !userResponse.ok) {
                throw new Error('There was an error [user.info]');
            }

            if (userResponse.status === 200) {
                const user = await userResponse.json();

                setUser(user);
                return true;
            }
            return false;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const getSpot = async () => {
        try {
            const spotResponse = await api.user.spot();

            if (spotResponse.status === 404) {
                setSpot(null);
                return true;
            }

            if (!spotResponse.ok) {
                throw new Error('There was an error [user.spot]');
            }

            const spot = await spotResponse.json();

            setSpot(spot);
            return true;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const getFreeSpots = async () => {
        try {
            const spotsResponse = await api.spot.free();

            if (spotsResponse.status === 404) {
                throw new Error('Spots not found!');
            }

            if (!spotsResponse.ok) {
                throw new Error('There was an error [spot.free]');
            }

            const spots = await spotsResponse.json();

            setFreeSpots(spots);
            return true;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const assignSpot = async (spotId) => {
        try {
            const spotResponse = await api.user.spotAssign(spotId);

            if (spotResponse.status === 404) {
                throw new Error('Spot not found!');
            }

            if (!spotResponse.ok) {
                throw new Error('There was an error [user.spotAssign]');
            }

            const spot = await spotResponse.json();

            setSpot(spot);
            return true;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const releaseSpot = async () => {
        try {
            const releaseResponse = await api.user.spotRelease();

            if (releaseResponse.status === 404) {
                throw new Error('This spot was not found!');
            }

            if (!releaseResponse.ok) {
                throw new Error('There was an error [user.spotRelease]');
            }

            setSpot(null);
            return true;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    const carpool = async (qrCode, silent) => {
        try {
            const carpoolResponse = await api.user.carpool(qrCode);

            if (!silent) {
                if (carpoolResponse.status === 208) {
                    throw new Error('You cannot carpool at the moment!');
                }

                if (carpoolResponse.status === 404) {
                    throw new Error('We cannot find the driver or the carpooler.');
                }

                if (carpoolResponse.status === 400) {
                    throw new Error('The QR code is not valid anymore.');
                }

                if (!carpoolResponse.ok) {
                    throw new Error('There was an error [user.carpool]');
                }
            }

            if (carpoolResponse.status === 201) {
                return true;
            }

            return false;
        } catch (error) {
            setGlobalError(error.message);
            return false;
        }
    };

    return (
        <DataContext.Provider
            value={{
                actions: {
                    login,
                    logout,
                    getUser,
                    getSpot,
                    getFreeSpots,
                    releaseSpot,
                    assignSpot,
                    carpool,
                    dismissGlobalError,
                },
                state: {
                    isLoggedIn: !!user,
                    user,
                    spot,
                    freeSpots,
                    globalError,
                },
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
