export type ProductType = {
    id: number
    name: string
    price: number
    delivery: boolean
    img: string
};

export type CategoryType = {
    id: number
    name: string
    products: number[]
};

export type IProductsState = {
    products: ProductType[]
    categories: CategoryType[]
    loading: boolean
    error: null | string
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export type FetchProductsAction = {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}

export type FetchProductsSuccessAction = {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: {products: ProductType[], categories: CategoryType[]};
}

export type FetchProductsErrorAction = {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction;


