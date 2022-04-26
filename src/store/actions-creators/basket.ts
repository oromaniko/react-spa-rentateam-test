import {
    BasketActionTypes,
    BasketAction,
    IBasketState,
} from '../../types/basket'
import { ProductType } from '../../types/products'
import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const addToBasketAction = (product: ProductType): BasketAction => ({
    type: BasketActionTypes.ADD,
    payload: product,
})

export const removeFromBasketAction = (product: ProductType): BasketAction => ({
    type: BasketActionTypes.DELETE,
    payload: product,
})

export const postBasketAction: ActionCreator<
    ThunkAction<Promise<any>, IBasketState, null, BasketAction>
> = (order) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(
                'https://delivery-server-rentateam.herokuapp.com/basket',
                {
                    method: 'post',
                }
            )
            const id = await response.json()
            dispatch({
                type: BasketActionTypes.POST,
                payload: id.id,
            })
        } catch (err) {
            console.error(err, 'Произошла ошибка при отправке корзины')
        }
    }
}
