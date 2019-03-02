import React, {Component} from "react";
import {Platform, StyleSheet, Text, View,Image,TouchableWithoutFeedback, TouchableHighlight,Dimensions} from 'react-native';
import {IVideo} from "../../../api/web-api";
import Detail from  './detail';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/
interface Props {
  info:IVideo;
  index:number;
}

export default class Video extends Component<Props> {

  componentDidMount(){
    console.log(this.props.info);
  }
  render() {


    return (
          <View style={style.container}>
            <Image source={require('./000dEq5b3DHDge.jpg')} style={{
              // width:"100%",
              // resizeMode: 'contain',
              backgroundColor:"white"
            }} />
            <Detail user={this.props.info.userInfo} type={this.props.info.type}></Detail>
          </View>
    );
  }
}

let style =StyleSheet.create({
  container:{
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center",
    height:Dimensions.get('window').height
  }
});