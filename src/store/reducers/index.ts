import { combineReducers } from 'redux'
import { basketReducer } from './basket'
import { receivingReducer } from './receiving'
import { productsReducer } from './products'

export const rootReducer = combineReducers({
    basketState: basketReducer,
    receivingState: receivingReducer,
    productsState: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
