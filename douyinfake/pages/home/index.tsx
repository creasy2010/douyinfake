import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

interface Props {}
export default class Index extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
