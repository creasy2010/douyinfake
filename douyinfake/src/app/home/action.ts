import {
  EVideoType,
  IQueryReq,
  queryVideo,
  queryAdVideo,
} from '../../api/web-api';
import {AddVideo} from './constant';
import {Dispatch} from 'redux';


export default (dispatch: Dispatch) => {
  return {
    /**
         * 重置
         */
    async getVideos(req: IQueryReq) {
      let videos = await queryVideo(req);
      dispatch({type: AddVideo, payload: videos});
    },

    async getAdVideos() {
      let videos = await queryAdVideo(1);
      dispatch({type: AddVideo, payload: videos});
    },
  };
};
