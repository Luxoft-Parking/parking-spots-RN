import * as SecureStore from 'expo-secure-store';

// 10.0.2.2 is the same as localhost for android emulator
// const baseUrl = 'http://10.0.2.2:3000';
// const baseUrl = 'http://localhost:3000';
const baseUrl = 'http://192.168.15.7:3000';

async function getJwtHeader() {
    const jwt = await SecureStore.getItemAsync('jwt');

    if (jwt) {
        return {'x-user-jwt': jwt};
    }

    return {};
}

async function post(url, body) {
    const header = await getJwtHeader();

    return fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...header,
        },
        body: JSON.stringify(body),
    });
}

async function get(url) {
    const header = await getJwtHeader();

    return fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...header,
        },
    });
}

async function put(url, body) {
    const header = await getJwtHeader();

    return fetch(`${baseUrl}${url}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...header,
        },
        ...body && {body: JSON.stringify(body)},
    });
}

export default {
    user: {
        login: (email, password, expoToken) => {
            return post('/v1/user/login', {username: email, password, expoToken});
        },
        logout: () => {
            return get('/v1/user/logout');
        },
        info: () => {
            return get('/v1/user/info');
        },
        spot: () => {
            return get('/v1/user/spot');
        },
        carpool: (qrCode) => {
            return post('/v1/user/carpool', {qrCode});
        },
        spotRelease: () => {
            return put('/v1/user/spot/release');
        },
        spotAssign: (spotId) => {
            return put(`/v1/user/spot/${spotId}`);
        },
    },
    spot: {
        free: () => {
            return get('/v1/spot/free');
        },
    },
};
