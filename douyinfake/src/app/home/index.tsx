import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  ViewToken,
} from 'react-native';

import Footer from './components/footer';
import Header from './components/header';
import Video from './components/video';
import {
  NavigationInjectedProps,
} from 'react-navigation';
import {EVideoType,  IVideo} from '../../api/web-api';
import {connect} from 'react-redux';
import {IProps, IReducer} from './types';
import action from './action';

interface State {
  toShowIndex: number;
  current: number;
  pageNo: number;
}

//视频请求每页数量
const CPageSize = 1;
//广告播放周期
const CAdPeriod =30000;
//存储到store中
const CAdtimeKey = "page::home:info:adtime";

class Index extends Component<IProps & NavigationInjectedProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      toShowIndex: 0,
      current: Date.now(),
      pageNo: 0,
    };

    this.action = action(this.props.dispatch);
  }

  action: ReturnType<typeof action>;

  list: FlatList<IVideo> | null = null;

  adTask: any;

  async componentDidMount() {
    console.log('this.props.home', this.props);
    let {videos} = this.props.home;
    if (!videos || videos.length === 0) {
      await this._queryPage();
    }

    //查询广告时间;
    let adTime = await this._getLastAdtime();

     if (Date.now() - adTime < CAdPeriod) {
      this._startAdTask(Date.now() - adTime);
    } else {
       this._startAdTask(CAdPeriod);
     }
  }

  componentWillUnmount() {
    if (this.adTask) {
      clearTimeout(this.adTask);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          ref={ref => (this.list = ref)}
          data={this.props.home.videos}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.01}
          onScrollEndDrag={this.onScrollEndDrag}
          decelerationRate={0.2}
          showsVerticalScrollIndicator={false}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
        <Footer />
      </View>
    );
  }


  _getLastAdtime=async ():Promise<number>=>{
    let adTime  = await AsyncStorage.getItem(CAdtimeKey);
    return parseInt(adTime||"0");
  }

  _updateAdtime=async (adTime:number=Date.now()):Promise<void> =>{
    return AsyncStorage.setItem(CAdtimeKey,adTime+"")
  }


  /**
   *
   * @param {number} timeout
   * @private
   */
  _startAdTask = (timeout: number) => {

    if(!this.adTask) {
      this.adTask = setTimeout(async () => {
        this.adTask=null;
        await this.action.getAdVideos();
        this._updateAdtime();
        //应该是广告播放后, 再去等30秒后插入广告
        // this._startAdTask(CAdPeriod);
      }, timeout);
    }

  };

  _renderItem = ({item, index}: {item: IVideo; index: number}) => {

    return (
      <TouchableWithoutFeedback>
        <Video info={item} index={index} />
      </TouchableWithoutFeedback>
    );
  };

  _keyExtractor = (item: IVideo) => item.id;
  _queryPage = async () => {
    let {pageNo, current} = this.state;

    let nextPageNo = pageNo + 1;
    await this.action.getVideos({
      current,
      type: EVideoType.normal,
      start: pageNo * CPageSize,
      end: (pageNo + 1) * CPageSize,
    });

    this.setState({pageNo: nextPageNo});
  };

  /**
   *
   *
   * 1.决定 是否划到下一页
   * 2.确定显示上一个还是显示 下一个
   *
   * @param {{viewableItems: Array<ViewToken>; changed: Array<ViewToken>}} info
   */
  onViewableItemsChanged = (info: {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
  }) => {
    if (info.changed[0].isViewable) {
      this.setState({toShowIndex: info.changed[0].index});
      let item = info.changed[0].item as IVideo
      if(item.type===EVideoType.ad) {
        console.log('onViewableItemsChanged  renderItem  ad');
        this._startAdTask(CAdPeriod);
      }
    }
  };

  onEndReached = async (info: {distanceFromEnd: number}) => {
    await this._queryPage();
  };

  onScrollEndDrag = (e: any) => {
    this.list.scrollToIndex({index: this.state.toShowIndex, viewOffset: 0});
  };
}

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = ({home}: {home: IReducer}) => {
  return {home};
};

export default connect(mapStateToProps)(Index);
