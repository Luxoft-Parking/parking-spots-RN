import React, {useState, useContext, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';

import Modal from '../components/structure/modal';
import Button from '../components/button';
import SpotWidget from '../components/spotWidget';
import {DataContext} from '../components/contexts/data';
import {
    headerStyle,
    descriptionStyle,
} from '../styles';

const FreeSpots = ({navigation}) => {
    const {state: {freeSpots}, actions: {getFreeSpots, assignSpot}} = useContext(DataContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedSpot, setSelectedSpot] = useState(null);
    useEffect(() => {
        getFreeSpots();
    }, []);

    const handleOnConfirmSpot = async () => {
        const success = await assignSpot(selectedSpot);

        if (success) {
            navigation.replace('Login');
        } else {
            setIsModalVisible(true);
        }
    };
    const handleOnDismiss = () => {
        setIsModalVisible(false);
    };
    const handleOnSpotSelected = (spotId) => () => {
        setSelectedSpot(spotId);
    };

    return (
        <>
            <View style={{
                flexDirection: 'column',
                padding: 32,
            }}>
                <Text style={headerStyle}>Lucky you!</Text>
                <Text style={descriptionStyle}>
                    Hurry up choose a spot before somebody else gets it!
                </Text>

                {freeSpots.length ?
                    <ScrollView
                        contentContainerStyle={{
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        {freeSpots.map(spot =>
                            <SpotWidget
                                key={spot._id}
                                level={spot.level}
                                number={spot.number}
                                onPress={handleOnSpotSelected(spot._id)}
                                isSelected={selectedSpot === spot._id}
                            />
                        )}
                    </ScrollView>
                    :
                    <Text style={headerStyle}>There are no spots available!</Text>
                }
            </View>
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            }}>
                <Button
                    title="Press to get spot!"
                    onPress={handleOnConfirmSpot}
                    isPrimary
                    noMargin
                    disabled={!selectedSpot}
                />
            </View>
            <Modal
                fullScreen={false}
                isVisible={isModalVisible}
                title="Sorry Buddy!"
                description="Somebody else got that spot! Be faster next time!"
                buttons={[
                    {
                        title: 'Oh man!',
                        isPrimary: false,
                        onPress: handleOnDismiss,
                    },
                ]}
            />
        </>
    );
};

export default FreeSpots;
