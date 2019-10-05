import React from 'react';
import {View, Text, Modal} from 'react-native';
import Button from '../button';
import {
    modalTitleStyle,
    descriptionStyle,
    modalStyle,
    modalFullScreenStyle,
    containerStyle,
} from '../../styles';

const CustomModal = (props) => {
    const {
        title,
        description,
        buttons,
        isVisible,
        fullScreen,
    } = props;

    return (
        <Modal
            animationType="slide"
            visible={isVisible}
            transparent={!fullScreen}
        >
            <View style={fullScreen ? modalFullScreenStyle : containerStyle}>
                <View style={modalStyle}>
                    {title && <Text style={modalTitleStyle}>{title}</Text>}
                    {description && <Text style={descriptionStyle}>{description}</Text>}
                    {buttons.map((button, i) => (
                        <Button
                            key={i}
                            title={button.title}
                            onPress={button.onPress}
                            isPrimary={button.isPrimary}
                        />
                    ))}
                </View>
            </View>
        </Modal>
    );
}

export default CustomModal;
