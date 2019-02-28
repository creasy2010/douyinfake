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


export default class Footer extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subItem}>
          <Text style={styles.font}>首页</Text>
        </View>
        <View style={styles.subItem}>
          <Text style={styles.font}>好友</Text>
        </View>
        <View style={styles.subItem}>
          {/*<Image></Image>*/}
        </View>
        <View style={styles.subItem}>
          <Text style={styles.font}>消息</Text>
        </View>
        <View style={styles.subItem}>
          <Text style={styles.font}>我的</Text>
        </View>
      </View>
    );
  }
}


let styles=StyleSheet.create({

  container:{
    color:"white",
    height:50,
    flexDirection:"row",
    bottom:50,
  },

  subItem:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue",
    flex:1,
  },
  subItemActive:{
    flex:1,
  },
  font:{
    color:"white",
    fontSize:16
  }
})