import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';

import Modal from '../components/structure/modal';
import Button from '../components/button';
import SpotWidget from '../components/spotWidget'
import {
    headerStyle,
    descriptionStyle,
} from '../styles';

const FreeSpots = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedSpot, setSelectedSpot] = useState(null);

    const handleOnConfirmSpot = () => {
        setIsModalVisible(true);
    };
    const handleOnDismiss = () => {
        setIsModalVisible(false);
    };
    const handleOnSpotSelected = (spotId) => () => {
        setSelectedSpot(spotId);
    };

    const spots = [
        {id: 1, level: 2, number: 44},
        {id: 2, level: 2, number: 44},
        {id: 3, level: 2, number: 44},
        {id: 4, level: 2, number: 44},
        {id: 5, level: 2, number: 44},
        {id: 6, level: 2, number: 44},
        {id: 7, level: 2, number: 44},
        {id: 8, level: 2, number: 44},
        {id: 9, level: 2, number: 44},
        {id: 10, level: 2, number: 44},
        {id: 11, level: 2, number: 44},
        {id: 12, level: 2, number: 44},
        {id: 13, level: 2, number: 44},
    ];

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

                {spots.length ?
                    <ScrollView
                        contentContainerStyle={{
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        {spots.map(spot =>
                            <SpotWidget
                                key={spot.id}
                                level={spot.level}
                                number={spot.number}
                                onPress={handleOnSpotSelected(spot.id)}
                                isSelected={selectedSpot === spot.id}
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
