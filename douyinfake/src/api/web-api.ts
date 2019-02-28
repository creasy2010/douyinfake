/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/


export interface IVideo{
  userName:string;
  userId:string;
  src:string;
  desc:string;
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
        userName:"用户名",
        userId:"111",
        src:"",
        desc:"描述信息",
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
        userName:"用户名",
        userId:"111",
        src:"",
        desc:"描述信息",
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
        userName:"用户名",
        userId:"111",
        src:"",
        desc:"描述信息",
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
        userName:"用户名",
        userId:"111",
        src:"",
        desc:"描述信息",
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