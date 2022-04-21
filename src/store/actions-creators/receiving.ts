import {
    ReceivingActionTypes,
    ReceivingOptionSetAction,
} from '../../types/receiving'

export const setReceivingOption = (
    option: string
): ReceivingOptionSetAction => ({
    type: ReceivingActionTypes.SET,
    payload: option,
})
