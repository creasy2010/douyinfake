import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {EVideoType, IUserInfo} from '../../../api/web-api';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/
interface Props {
  user: IUserInfo;
  type:EVideoType;
}

export default class Detail extends Component<Props> {
  render() {
    const {userName, desc} = this.props.user;
    return (
      <View style={styles.container}>
        {this.props.type===EVideoType.ad?<Text style={styles.ad}>广告</Text>:null}
        <Text style={styles.title}>@{userName}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    position:"absolute",
    left:0,
    bottom:140,
    paddingLeft:10,
  },
  ad:{
    fontSize:13,
    opacity:0.7,
    color:"white"
  },
  title:{
    marginTop:5,
    marginBottom:5,
    color:"white",
    fontSize:16,
    opacity:0.9
  },
  desc:{
    color:"white",
    fontSize:14,
    opacity:0.7
  }
});
