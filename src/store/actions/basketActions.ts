import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IBasicState } from '../reducers/basketReducer';
import {ProductType} from "../mydata";

export enum BasketActionTypes {
    ADD = 'ADD',
    DELETE = 'DELETE',
}

export interface IBasketAddAction {
    type: BasketActionTypes.ADD;
    payload: ProductType;
}

export interface IBasketDeleteAction {
    type: BasketActionTypes.DELETE;
    payload: ProductType;
}

export type BasketActions = IBasketAddAction | IBasketDeleteAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const basicAction: ActionCreator<ThunkAction<Promise<any>, IBasicState, null, IBasketAddAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            // Your logic here
            dispatch({
                payload: null,
                type: BasketActionTypes.ADD
            })
        } catch (err) {
            console.error(err);
        }
    };
};