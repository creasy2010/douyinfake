import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';
/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/

interface Props {}

class Header extends Component<Props & NavigationInjectedProps> {
  render() {
    return (
      <View style={style.container}>
        <View style={style.btn}>
          <TouchableOpacity onPressOut={this._goto}>
            <Text style={style.font}>随拍</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btnCenter}>
          <TouchableOpacity onPressOut={this._goto}>
            <Text style={style.font}>推荐</Text>
          </TouchableOpacity>
          <View style={style.split} />
          <TouchableOpacity onPressOut={this._goto}>
            <Text style={style.font}>南京</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btn}>
          <TouchableOpacity onPressOut={this._goto}>
            <Text style={style.font}>search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _goto = () => {
    this.props.navigation.navigate('Other');
  };
}

export default withNavigation<Props>(Header);

let style = StyleSheet.create({
  container: {
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 40,
  },

  btn: {
    width: 80,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },

  btnCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  split: {
    width: 15,
  },
  font: {
    color: 'white',
    fontSize: 16,
  },
});
