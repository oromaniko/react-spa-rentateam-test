import {combineReducers} from "redux";
import {basketReducer} from "./basket";
import {receivingReducer} from "./receiving";

export const rootReducer = combineReducers({
    basketState: basketReducer,
    receivingState: receivingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;