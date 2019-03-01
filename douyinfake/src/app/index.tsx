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
import Home from './home';
import Other from './other';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
    Home,
    Other
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