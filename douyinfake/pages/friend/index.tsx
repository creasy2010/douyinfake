import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

interface Props {}
export default class Friend extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        friend页面
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
