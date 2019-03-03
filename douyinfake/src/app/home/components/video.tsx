import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {EVideoType, IVideo} from '../../../api/web-api';
import Detail from './detail';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/
interface Props {
  info: IVideo;
  index: number;
}

export default class Video extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <Image
          source={
            this.props.info.type === EVideoType.normal
              ? require('./000dEq5b3DHDge.jpg')
              : require('./ad.jpg')
          }
          style={{
            backgroundColor: 'white',
          }}
        />
        <Detail user={this.props.info.userInfo} type={this.props.info.type} />
      </View>
    );
  }
}

let style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
});
