import * as BasketActionCreators from './basket';
import {setReceivingOption} from "./receiving";
import {fetchProducts} from "./products";

export default {
    ...BasketActionCreators,
    setReceivingOption,
    fetchProducts,
}