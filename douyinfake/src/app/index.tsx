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
import { Provider } from 'react-redux';
import Other from './other';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import store  from  '../store';
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

    return( <Provider store={ store }>
      <AppContainer />
    </Provider>);
  }
}