import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/

interface Props {}

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.font}>首页</Text>
        <Text style={style.font}>首页</Text>
        <Text style={style.font}>首页</Text>
      </View>
    );
  }
}

let style=StyleSheet.create({
  container:{
    // flex:1,
    // flexDirection:"row",
  },
  font:{
    color:"white",
    fontSize:16
  }
})
