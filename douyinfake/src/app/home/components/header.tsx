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
        <View style={style.btn}>
          <Text style={style.font}>随拍</Text>
        </View>
        <View style={style.btnCenter}>
          <Text style={style.font}>推荐</Text>
          <View style={style.split}></View>
          <Text style={style.font}>南京</Text>
        </View>
        <View style={style.btn}>
          <Text style={style.font}>search</Text>
        </View>
      </View>
    );
  }
}

let style=StyleSheet.create({
  container:{
    zIndex: 10,
    flexDirection:"row",
    justifyContent:"space-around",
    position:"absolute",
    top:40,
  },

  btn:{
    width:80,
    flexDirection:"row",
    marginLeft:10,
    marginRight:10,
    justifyContent:"center"
  },

  btnCenter:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center"
  },
  split:{
    width:15
  },
  font:{
    color:"white",
    fontSize:16
  }
})
