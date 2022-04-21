import { Reducer } from 'redux'
import {
    IReceivingState,
    ReceivingActionTypes,
    ReceivingOptionSetAction,
} from '../../types/receiving'

const initialReceivingState: IReceivingState = {
    receivingOption: 'delivery',
}

export const receivingReducer: Reducer<
    IReceivingState,
    ReceivingOptionSetAction
> = (state = initialReceivingState, action) => {
    switch (action.type) {
        case ReceivingActionTypes.SET: {
            return {
                ...state,
                receivingOption: action.payload,
            }
        }
        default:
            return state
    }
}
