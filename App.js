import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import store from './app/store';
import AppNavigator from './app/routes';
import HomeContainer from './app/containers/HomeContainer';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      //some state variables
    };
  }

  render() {
    return (
        <Provider store={store}>
            <HomeContainer>
                <AppNavigator></AppNavigator>
            </HomeContainer>
        </Provider>
    );
  }
}
