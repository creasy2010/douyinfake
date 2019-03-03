## 需求描述

 假抖音的广告页面
- 如果停留在这个页面，每30秒，换一个广告
- 如果离开在这个页面，但是在30秒到来前回来，那么就当没有走开过，继续之前的更新时间
- 如果离开在这个页面，在30秒到来时还没有回来，那么一回来就更新广告，然后继续之前的逻辑
- 应用进入到后台，逻辑和离开这个页面一样


## 项目结构


```
├── src
├── api
│   └── web-api.ts
├── app
│   ├── home
│   │   ├── action.ts
│   │   ├── components
│   │   ├── constant.ts
│   │   ├── index.tsx
│   │   ├── reducers.ts
│   │   └── types.ts
│   ├── index.tsx
│   └── other
│       └── index.tsx
├── common
├── reducers
│   ├── store.tsx
│   ├── types
│   └── uikit
```

* 视频页面(home) 与其他页面(other)

## 实现原理

### 视频列表
 使用FlatList,单个视频占一屏,当onViewableItemsChanged事件发生时(用户切换)切换至下一视频源;


### 广告
广告视频与正常视频 共同放在videos字段;

广告加载有两个场景
1. 初始加载时;
2. 当一个广告播放后, 30秒后加载

```typescript

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
```


## 问题

### flatlist onreachEnd触发多次的问题
https://github.com/facebook/react-native/issues/16067


