import {AddVideo} from './constant';
import {IReducer} from "./types";
import {Action} from "../../types/index";

const home = (
  state:IReducer = {
    videos: []
  },
  action: Action,
) => {

  switch (action.type) {
    case AddVideo:
      return {
        ...state,videos:state.videos.concat(action.payload)
      };
    default:
      return state;
  }
};

export default home;
