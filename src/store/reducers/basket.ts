import { Reducer } from 'redux';
import {IBasketState, BasketAction, BasketActionTypes} from "../../types/basketAction";

const initialBasketState: IBasketState = {
    basketSum: 0,
    basketItems: [],
};

export const basketReducer: Reducer<IBasketState, BasketAction> = (
    state = initialBasketState,
    action
) => {
    switch (action.type) {
        case BasketActionTypes.ADD: {
            return {
                ...state,
                basketSum: state.basketSum + action.payload.price,
                basketItems: [...state.basketItems, action.payload],
            };
        }
        case BasketActionTypes.DELETE: {
            return {
                ...state,
                basketSum: state.basketSum - action.payload.price,
                basketItems: state.basketItems.filter(({ id }) => id !== action.payload.id),
            };
        }
        default:
            return state;
    }
};