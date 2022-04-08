import {ProductType} from "../store/mydata";

export interface IBasketState {
    basketSum: number;
    basketItems: ProductType[]
}

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

export type BasketAction = IBasketAddAction | IBasketDeleteAction;