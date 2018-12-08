import React from 'react';
import ButtonComponent from '../../components/common/button';
import {View, Text, TextInput} from 'react-native'

export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: 'type username here'
        };
    }

    onButtonClick(){
        //alert(`Button Clicked ${this.props.displayInitialText}`);
        this.props.getUser(this.state.username);
    }

    render (){
        return (
            <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <Text>{this.props.displayInitialText ? 'No user yet' : ` Name: ${this.props.userName} \n Number of Followers: ${this.props.followers} \n Company: ${this.props.company}`} {"\n"}</Text>
                <TextInput
                    onChangeText = {(username) => {this.setState({username})}}
                    placeholder="Type username"
                    autoFocus
                />
                <Text>{"\n"}</Text>
                <ButtonComponent
                    onPress = {this.onButtonClick.bind(this)}
                    title = "Get Github User"
                />
            </View>
        )
    }
}