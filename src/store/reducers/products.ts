import {Reducer} from 'redux';
import {IProductsState, ProductAction, ProductsActionTypes} from '../../types/products';

const initialProductsState: IProductsState = {
    products: [],
    categories: [],
    loading: false,
    error: null,
};

export const productsReducer: Reducer<IProductsState, ProductAction> = (
    state = initialProductsState,
    action
) => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS: {
            return {
                ...state, loading: true,
            };
        }
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                categories: action.payload.categories,
            };
        }
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};