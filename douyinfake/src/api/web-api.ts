import {IPageRequest} from '../types';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/2/28
 **/

export async function queryAdVideo(num: number): Promise<IVideo[]> {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push({
      id: 'index_' + i + Math.random(),
      userInfo: {
        userName: '用户名::' + i,
        userId: '111',
        desc: '描述信息',
      },
      src: '',
      type: EVideoType.ad,
      music: {
        name: '歌曲名',
        author: '歌手',
        img: '',
      },
      favourCount: 200000,
      commentCount: 8631,
      shareCount: 13000,
    });
  }

  return result;
}

export async function queryVideo(req: IQueryReq): Promise<IVideo[]> {
  console.log('query video request::', req);
  //mock 数据
  let result = [];
  for (let i = req.start, ilen = req.end; i <= ilen; i++) {
    result.push({
      id: 'index_' + i + Math.random(),
      userInfo: {
        userName: '用户名::'+i,
        userId: '111',
        desc: '描述信息',
      },
      src: '',
      type: req.type,
      music: {
        name: '歌曲名',
        author: '歌手',
        img: '',
      },
      favourCount: 200000,
      commentCount: 8631,
      shareCount: 13000,
    });
  }

  return Promise.resolve(result);
}




export interface IUserInfo {
  userName: string;
  userId: string;
  desc: string;
}

export enum EVideoType {
  normal, //用户视频
  ad, //广告类型
}

export interface IVideo {
  id: string;
  userInfo: IUserInfo;
  src: string;
  type: EVideoType;
  music: {
    name: string;
    author: string;
    img: string;
  };
  favourCount: number;
  commentCount: number;
  shareCount: number;
}

export interface IQueryReq extends IPageRequest {
  //当前时间
  current: number;
  type: EVideoType;
}