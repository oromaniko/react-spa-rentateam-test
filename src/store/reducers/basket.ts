import { Reducer } from 'redux'
import {
    IBasketState,
    BasketActionTypes,
    BasketAction,
} from '../../types/basket'

const initialBasketState: IBasketState = {
    basketSum: 0,
    basketItems: [],
    orderId: null,
}

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
            }
        }
        case BasketActionTypes.DELETE: {
            return {
                ...state,
                basketSum: state.basketSum - action.payload.price,
                basketItems: state.basketItems.filter(
                    ({ id }) => id !== action.payload.id
                ),
            }
        }
        case BasketActionTypes.POST: {
            return {
                ...initialBasketState,
                orderId: action.payload,
            }
        }
        default:
            return state
    }
}
