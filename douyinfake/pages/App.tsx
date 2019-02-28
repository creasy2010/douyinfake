/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// using ES6 modules
import { NativeRouter, Route, Link } from "react-router-native";

import Friend from './friend';
import Home from './home';
import Message from './message';
import Mine from './mine';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Link to="/" underlayColor="#f0f4f7" >
            <Text>Home</Text>
          </Link>
          <Link to="/friend" underlayColor="#f0f4f7">
            <Text>friend</Text>
          </Link>
          <Link to="/message" underlayColor="#f0f4f7">
            <Text>message</Text>
          </Link>
          <Link to="/mine" underlayColor="#f0f4f7" >
            <Text>mine</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/friend" component={Friend} />
        <Route path="/message" component={Message} />
        <Route path="/mine" component={Mine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
