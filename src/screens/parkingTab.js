import React, {useState} from 'react';
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
    linkStyle,
} from '../styles';

const ParkingTab = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleOnLendYourSpot = () => {
        setIsModalVisible(true);
    };
    const handleOnConfirm = () => {
        setIsModalVisible(false);
    };
    const handleOnCancel = () => {
        setIsModalVisible(false);
    };
    const handleOnShowRealSpot = () => {

    };

    return (
        <>
            <Banner
                type="info"
                text="This spot is just for today!"
            />
            <View style={centerViewStyle}>
                <Text style={headerStyle}>Your Spot!</Text>
                <Text
                    style={linkStyle}
                    onPress={handleOnShowRealSpot}
                >
                    Show my real spot!
                </Text>

                <View style={entryContainerStyle}>
                    <Text style={entryLabelStyle}>Parking Site:</Text>
                    <Text style={entryValueStyle}>La Perla</Text>
                </View>

                <View style={entryContainerStyle}>
                    <Text style={entryLabelStyle}>Parking Level:</Text>
                    <Text style={entryValueStyle}>2</Text>
                </View>

                <View style={entryContainerStyle}>
                    <Text style={entryLabelStyle}>Parking Spot:</Text>
                    <Text style={entryValueStyle}>45</Text>
                </View>

                <Text style={noteStyle}>Remember to park in the right spot!</Text>

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
            </View>
        </>
    );
};

export default ParkingTab;
