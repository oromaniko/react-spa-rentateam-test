import {combineReducers} from "redux";
import {basketReducer} from "./basket";
import {IAppState} from "../store";

export const rootReducer = combineReducers<IAppState>({
    basketState: basketReducer
});

export type RootState = ReturnType<typeof rootReducer>;