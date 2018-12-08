import React from 'react';
import {View, Button} from 'react-native';

const ButtonComponent = (props) => {

    return (
        <View>
            <Button
                onPress = {props.onPress}
                title={props.title}
            >
            </Button>
        </View>
)
};

export default ButtonComponent;