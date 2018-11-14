import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './app/store';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      //some state variables
    };
  }

  render() {
    return (
        <Provider store={store}>
            <Text>This is some text</Text>
        </Provider>
    );
  }
}

