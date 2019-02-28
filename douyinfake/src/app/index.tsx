/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Friend from './friend';
import Home from './home';
import Message from './message';
import Mine from './mine';

import {createStackNavigator, createAppContainer, HeaderMode} from 'react-navigation';

const MainNavigator = createStackNavigator({
    Home,
    Friend,
    Message,
    Mine
},
  {
    initialRouteName: "Home",
    headerMode:"none"
  });

const AppContainer = createAppContainer(MainNavigator);



export default class Index extends React.Component {
  render() {
    return <AppContainer />;
  }
}