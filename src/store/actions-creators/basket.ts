import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {IBasketState, IBasketAddAction, BasketActionTypes, BasketAction} from "../../types/basket";
import {ProductType} from "../mydata";

export const basicAction: ActionCreator<ThunkAction<Promise<any>, IBasketState, null, IBasketAddAction>> = () => {
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

export const addToBasketAction = (product: ProductType): BasketAction => (
    { type: BasketActionTypes.ADD, payload: product }
);

export const removeFromBasketAction = (product: ProductType): BasketAction => (
    { type: BasketActionTypes.DELETE, payload: product }
);

export const clearBasketAction = (): BasketAction => (
    { type: BasketActionTypes.CLEAR }
);