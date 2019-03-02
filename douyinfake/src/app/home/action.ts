import {queryVideo} from "../../api/web-api";
import {INIT} from "./constant";
import {Dispatch} from "redux";

export default (dispatch:Dispatch) => {
    return {
        /**
         * 初始化
         */
        async init() {
          let videos=await queryVideo();
          console.log("action inti get videos==>",videos);
          dispatch({type:INIT,payload:videos})
        },

        /**
         * 重置
         */
        async clean() {},

        /**
         *
         * @param evt
         */
        async change(evt: any) {}
    };
};
