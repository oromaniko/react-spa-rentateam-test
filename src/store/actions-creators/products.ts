import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
    IProductsState,
    ProductAction,
    ProductsActionTypes,
} from '../../types/products'

export const fetchProducts: ActionCreator<
    ThunkAction<Promise<any>, IProductsState, null, ProductAction>
> = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS })
            const promise1 = fetch('http://localhost:3001/products')
            const promise2 = fetch('http://localhost:3001/categories')
            const [productsResponse, categoriesCategories] = await Promise.all([
                promise1,
                promise2,
            ])
            const products = await productsResponse.json()
            const categories = await categoriesCategories.json()
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: { products, categories },
            })
        } catch (err) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Произошла ошибка при загрузке',
            })
        }
    }
}
