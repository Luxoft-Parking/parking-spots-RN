import React, {useState, useContext, useEffect} from 'react';
import {Text, View} from 'react-native';

import Modal from '../components/structure/modal';
import Button from '../components/button';
import Banner from '../components/banner';
import Division from '../components/structure/division';
import {
    headerStyle,
    centerViewStyle,
    entryLabelStyle,
    entryValueStyle,
    entryContainerStyle,
    noteStyle,
    descriptionStyle,
} from '../styles';
import {DataContext} from '../components/contexts/data';

const ParkingTab = (props) => {
    const {state: {spot}, actions: {releaseSpot, getSpot}} = useContext(DataContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {getSpot()}, []);
    const handleOnLendYourSpot = () => {
        setIsModalVisible(true);
    };
    const handleOnConfirm = async () => {
        await releaseSpot();
        setIsModalVisible(false);
    };
    const handleOnCancel = () => {
        setIsModalVisible(false);
    };
    const hasSpot = !!spot;
    const showBanner = false; // disabled for now, need a way to know if spot is available

    return (
        <>
            {showBanner &&
                <Banner
                    type="info"
                    text="This spot is just for today!"
                />
            }
            <View style={centerViewStyle}>
                <Text style={headerStyle}>Your Spot!</Text>

                <View style={entryContainerStyle}>
                    <Text style={entryLabelStyle}>Parking Site:</Text>
                    <Text style={entryValueStyle}>{hasSpot ? 'La Perla' : 'Kodak'}</Text>
                </View>

                {hasSpot && (
                    <>
                        <View style={entryContainerStyle}>
                            <Text style={entryLabelStyle}>Parking Level:</Text>
                            <Text style={entryValueStyle}>{spot.level}</Text>
                        </View>

                        <View style={entryContainerStyle}>
                            <Text style={entryLabelStyle}>Parking Spot:</Text>
                            <Text style={entryValueStyle}>{spot.number}</Text>
                        </View>
                    </>
                )}

                <Text style={noteStyle}>Remember to park in the right spot!</Text>

                {hasSpot && (
                    <>
                        <Division />

                        <Text style={headerStyle}>Are you going to the office today?</Text>
                        <Text style={descriptionStyle}>
                            If not, you can let other people use your spot. Don't worry it is just for today!
                        </Text>

                        <Button
                            title="Press to lend your spot"
                            onPress={handleOnLendYourSpot}
                            isPrimary={false}
                        />

                        <Modal
                            fullScreen={false}
                            isVisible={isModalVisible}
                            title="Are you sure buddy?"
                            description="After this confirmation you cannot use your spot for today."
                            buttons={[
                                {
                                    title: 'Yeah, Im sure!',
                                    isPrimary: false,
                                    onPress: handleOnConfirm,
                                },
                                {
                                    title: 'Hell no!',
                                    isPrimary: true,
                                    onPress: handleOnCancel,
                                },
                            ]}
                        />
                    </>
                )}
            </View>
        </>
    );
};

export default ParkingTab;
