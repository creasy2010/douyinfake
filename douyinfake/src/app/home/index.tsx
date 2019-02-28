import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Footer from './components/footer';
import Header from './components/header';
import Video from './components/video';
import { SafeAreaView } from 'react-navigation';


interface Props {}

export default class Index extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Video />
        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor:"black"
  }
});
