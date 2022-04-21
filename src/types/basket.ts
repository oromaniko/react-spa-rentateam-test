import { ProductType } from './products'

export interface IBasketState {
    basketSum: number
    basketItems: ProductType[]
    orderId: null | number
}

export enum BasketActionTypes {
    ADD = 'ADD',
    DELETE = 'DELETE',
    POST = 'POST',
}

export interface IBasketAddAction {
    type: BasketActionTypes.ADD
    payload: ProductType
}

export interface IBasketDeleteAction {
    type: BasketActionTypes.DELETE
    payload: ProductType
}

export interface IBasketClearAction {
    type: BasketActionTypes.POST
    payload: number
}

export type BasketAction =
    | IBasketAddAction
    | IBasketDeleteAction
    | IBasketClearAction
