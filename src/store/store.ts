import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer, RootState} from "./reducers";


export const store = createStore(rootReducer, applyMiddleware(thunk));