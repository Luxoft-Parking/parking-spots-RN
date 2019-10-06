import React, {useContext, useState} from 'react';

import Modal from '../components/structure/modal';
import {DataContext} from '../components/contexts/data';

const SpotRemainder = ({navigation}) => {
    const {actions: {releaseSpot}} = useContext(DataContext);
    const [isVisible, setIsVisible] = useState(true);
    const handleOnRelease = async () => {
        const success = await releaseSpot();

        if (success) {
            setIsVisible(false);
            navigation.replace('Login');
        }
    };
    const handleOnDismiss = () => {
        setIsVisible(false);
        navigation.replace('Login');
    };

    return (
        <Modal
            fullScreen={false}
            isVisible={isVisible}
            title="One question buddy"
            description="Are you using your parking spot today?"
            buttons={[
                {
                    title: 'Hell yeah!',
                    isPrimary: true,
                    onPress: handleOnDismiss,
                },
                {
                    title: 'Nope',
                    isPrimary: false,
                    onPress: handleOnRelease,
                },
            ]}
        />
    );
};

export default SpotRemainder;
