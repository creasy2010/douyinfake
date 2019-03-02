import {INIT} from './constant';
import {IReducer} from "./types";
import {Action} from "../../types/index";

const home = (
  state:IReducer = {
    videos: [],
  },
  action: Action,
) => {

  switch (action.type) {
    case INIT:
      return {
        ...state,videos:action.payload
      };
    default:
      return state;
  }
};

export default home;
