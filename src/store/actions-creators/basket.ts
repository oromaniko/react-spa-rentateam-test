import {BasketActionTypes, BasketAction} from "../../types/basket";
import {ProductType} from "../../types/products";

export const addToBasketAction = (product: ProductType): BasketAction => (
    { type: BasketActionTypes.ADD, payload: product }
);

export const removeFromBasketAction = (product: ProductType): BasketAction => (
    { type: BasketActionTypes.DELETE, payload: product }
);

export const clearBasketAction = (): BasketAction => (
    { type: BasketActionTypes.CLEAR }
);