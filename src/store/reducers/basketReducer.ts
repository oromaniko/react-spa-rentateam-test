import { Reducer } from 'redux';
import { BasketActionTypes, BasketActions } from '../actions/basketActions';
import {ProductType} from "../mydata";

export interface IBasicState {
    basketSum: number;
    basketItems: ProductType[]
}

const initialBasicState: IBasicState = {
    basketSum: 0,
    basketItems: [],
};

export const basicReducer: Reducer<IBasicState, BasketActions> = (
    state = initialBasicState,
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