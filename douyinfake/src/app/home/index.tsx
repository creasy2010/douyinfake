import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ViewToken
} from 'react-native';

import Footer from './components/footer';
import Header from './components/header';
import Video from './components/video';
import {SafeAreaView, SafeAreaViewForceInsetValue} from 'react-navigation';
import {IVideo, queryVideo} from "../../api/web-api";

interface Props {}
interface State {
  videos:IVideo[];
  toShowIndex:number;
}

export default class Index extends Component<Props,State> {

  constructor(props:any){
    super(props);
    this.state={
      videos:[],
      toShowIndex:0
    }
  }

  list:FlatList<IVideo>|null=null;

  async componentDidMount(){
    let videos=await queryVideo();
    console.log("videos==>",videos);
    this.setState({videos})
  }

  render() {
    return (
       <View style={styles.container}>
        <Header />
        <FlatList
          ref={(ref) => this.list = ref}
          data={this.state.videos}
          onLayout={this.onLayout}
          onScroll={this.onScroll}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}
          decelerationRate={0.2}
          showsVerticalScrollIndicator = {false}
          extraData={this.state}
          renderItem={this._renderItem}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
        <Footer />
      </View>
    );
  }

  _renderItem=({item,index}:{item:IVideo,index:number})=>{
    return (
      < TouchableWithoutFeedback
    onPress={this.onPress}
    onPressIn={this.onPressIn}
    onPressOut={this.onPressOut}
    >
      <Video info={item} index={index}></Video>
    </TouchableWithoutFeedback>
    )
  }

  /**
   *
   *
   * 1.决定 是否划到下一页
   * 2.确定显示上一个还是显示 下一个
   * @param {{viewableItems: Array<ViewToken>; changed: Array<ViewToken>}} info
   */
  onViewableItemsChanged=(info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> })=>{
    if(info.changed[0].isViewable) {
      console.log('==>onViewableItemsChanged do it ',info,this.list);
      this.setState({toShowIndex:info.changed[0].index});
    }else{
      console.log('==>onViewableItemsChanged don\'t do it ',info,this.list);
    }
  }

  onScrollBeginDrag=(e:any)=>{
    console.log("onScrollBeginDrag  ",e);
  }
  onScrollEndDrag=(e:any)=>{
    this.list.scrollToIndex({index:this.state.toShowIndex,viewOffset:0})
    console.log("onScrollEndDrag  ",e);
  }
  onScroll=(e:any)=>{
    console.log("onScroll  ",e);
  }

  onLayout=(e:any)=>{
    console.log('on onLayout',e);
  }
  onBlur=(e:any)=>{
    console.log('on onBlur',e);
  }

  onFocus=(e:any)=>{
    console.log('on onFocus',e);
  }
  onLongPress=(e:any)=>{
    console.log('on onLongPress',e);
  }
  onPress=(e:any)=>{
    console.log('on onPress',e);
  }
  onPressIn=(e:any)=>{
    console.log('on onPressIn',e);
  }
  onPressOut=(e:any)=>{
    console.log('on onPressOut',e);
  }
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // width: '100%',
    // height: '100%',
    // backgroundColor:"orange"
  }
});
