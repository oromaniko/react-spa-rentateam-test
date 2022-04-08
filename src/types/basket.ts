import {ProductType} from "../store/mydata";

export interface IBasketState {
    basketSum: number;
    basketItems: ProductType[]
}

export enum BasketActionTypes {
    ADD = 'ADD',
    DELETE = 'DELETE',
    CLEAR = 'CLEAR'
}

export interface IBasketAddAction {
    type: BasketActionTypes.ADD;
    payload: ProductType;
}

export interface IBasketDeleteAction {
    type: BasketActionTypes.DELETE;
    payload: ProductType;
}

export interface IBasketClearAction {
    type: BasketActionTypes.CLEAR;
}

export type BasketAction = IBasketAddAction | IBasketDeleteAction | IBasketClearAction;