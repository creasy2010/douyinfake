/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/

export interface IUserInfo{
  userName:string;
  userId:string;
  desc:string;
}

export enum EVideoType{
  normal,//用户视频
  ad //广告类型
}

export interface IVideo{
  userInfo:IUserInfo;
  src:string;
  type:EVideoType;
  music:{
    name:string;
    author:string;
    img:string;
  },
  favourCount:number;
  commentCount:number;
  shareCount:number;
}


export async function queryVideo():Promise<IVideo[]>{
  return Promise.resolve(
    [
      {
        userInfo:{
          userName:"用户名",
          userId:"111",
          desc:"描述信息",
        },
        src:"",
        type:EVideoType.normal,
        music:{
          name:"歌曲名",
          author:"歌手",
          img:"",
        },
        favourCount:200000,
        commentCount:8631,
        shareCount:13000,
      },
      {
        userInfo:{
          userName:"用户名",
          userId:"111",
          desc:"描述信息",
        },
        src:"",
        type:EVideoType.ad,
        music:{
          name:"歌曲名",
          author:"歌手",
          img:"",
        },
        favourCount:200000,
        commentCount:8631,
        shareCount:13000,
      },
      {
        userInfo:{
          userName:"用户名",
          userId:"111",
          desc:"描述信息",
        },
        src:"",
        type:EVideoType.normal,
        music:{
          name:"歌曲名",
          author:"歌手",
          img:"",
        },
        favourCount:200000,
        commentCount:8631,
        shareCount:13000,
      }, {
      userInfo:{
        userName:"用户名",
        userId:"111",
        desc:"描述信息",
      },
      src:"",
      type:EVideoType.normal,
      music:{
        name:"歌曲名",
        author:"歌手",
        img:"",
      },
      favourCount:200000,
      commentCount:8631,
      shareCount:13000,
    },
    ]
  );
}