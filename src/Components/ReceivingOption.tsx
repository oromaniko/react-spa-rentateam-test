import React from "react";
import SelectorButtons from "./SelectorButtons";
import {useTypedSelector} from "../hooks/useTypedSelector";

type ReceivingOptionProps = {
    address: {
        street: string;
        setStreet: React.Dispatch<React.SetStateAction<string>>;
        house: string,
        setHouse:  React.Dispatch<React.SetStateAction<string>>;
    }
}

export default function ReceivingOption ({address: {street, setStreet, house, setHouse}}: ReceivingOptionProps) {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);

    return (
        <div className='selector-box'>
            <div className='selector-container'>
                <div>
                    {receivingOption === 'delivery' ? (
                        <h1>Доставка г. Москва</h1>
                    ) : (
                        <h1>Самовывоз</h1>
                    )}
                </div>
                <SelectorButtons />
            </div>
            {receivingOption === 'delivery' ? (
                <div className='address-container'>
                    <form>
                        <div>
                            <label htmlFor='street'>Улица</label>
                            <input id='street' value={street} type='text' placeholder=' Улица' onChange={(e) => setStreet(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor='house'>Дом</label>
                            <input id='house' value={house} type='text' placeholder=' Дом' onChange={(e) => setHouse(e.target.value)}/>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='address-container'>Москва, Улица Улиц, дом 27</div>
            )}
        </div>
    );
}