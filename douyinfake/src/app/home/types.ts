import Actions from "./action";
import {IVideo} from "../../api/web-api";
import {Dispatch} from "redux";

export interface IReducer {
  videos:IVideo[]
}

export type IProps = {
  home: IReducer ;
  dispatch:Dispatch;
} & ReturnType<typeof Actions>;
