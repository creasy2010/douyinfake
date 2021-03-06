import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import {NavigationInjectedProps} from "react-navigation";

interface Props {}
export default class Other extends Component<Props &  NavigationInjectedProps> {
  state = {
    time: 0,
  };

  timer: any;

  componentDidMount() {
    console.log('other 初始化定时器');
    this.timer = setInterval(() => {
      this.setState({time: this.state.time+1});
    }, 1000);

  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
    this.timer=null;
    console.log('other 定时器clean结束!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>停留时长 {this.state.time}秒</Text>
        <TouchableOpacity onPressOut={this._back}>
          <Text>返回</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _back=()=>{
    this.props.navigation.navigate("Home")
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    zIndex:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  },
});
