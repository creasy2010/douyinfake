import React, {Component} from "react";
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/
interface Props{

}

export default class Video extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <Image source={{uri:"https://images.liqucn.com/img/h1/h970/img201709211108070_info300X300.jpg"}} style={{
          width:"100%",
          resizeMode: 'contain',
        }} />
      </View>
    );
  }
}

let style =StyleSheet.create({
  container:{
    width:"100%",
    height:"100%"
  }
});