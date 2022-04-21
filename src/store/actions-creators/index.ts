import * as BasketActionCreators from './basket'
import { setReceivingOption } from './receiving'
import { fetchProducts } from './products'

const actions = {
    ...BasketActionCreators,
    setReceivingOption,
    fetchProducts,
}

export default actions
