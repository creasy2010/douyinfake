import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationInjectedProps, withNavigation} from "react-navigation";

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/
interface Props {}

 class Footer extends Component<Props & NavigationInjectedProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subItem}>
          <TouchableOpacity onPress={this._onPress}>
            <Text style={styles.font}>首页</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subItem}>
          <TouchableOpacity onPressOut={this._onPress}>
            <Text style={styles.font}>好友</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subItem}>
          {/*<Image></Image>*/}
        </View>
        <View style={styles.subItem}>
          <TouchableOpacity onPressOut={this._onPress}>
            <Text style={styles.font}>消息</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subItem}>
          <TouchableOpacity onPressOut={this._onPress}>
            <Text style={styles.font}>我的</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onPress=()=>{
    this.props.navigation.navigate('Other');
  }
}

export default withNavigation<Props>(Footer)



let styles = StyleSheet.create({
  container: {
    color: 'white',
    height: 50,
    flexDirection: 'row',
    bottom: 75,
  },

  subItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subItemActive: {
    flex: 1,
  },
  font: {
    color: 'white',
    fontSize: 16,
  },
});
