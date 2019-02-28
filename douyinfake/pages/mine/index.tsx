import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

interface Props {}
export default class Index extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        我的
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
