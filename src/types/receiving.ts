export interface IReceivingState {
    receivingOption: string
}

export enum ReceivingActionTypes {
    SET ='SET',
}

export type ReceivingOptionSetAction = {
    type: ReceivingActionTypes.SET;
    payload: string;
}
