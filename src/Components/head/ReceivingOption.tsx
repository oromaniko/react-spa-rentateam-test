import SelectorButtons from "./SelectorButtons";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import React, {useState} from "react";

type ReceivingOptionProps = {
    addressStatus: string;
    setAddressStatus: React.Dispatch<React.SetStateAction<string>>;
}

export default function ReceivingOption ({addressStatus, setAddressStatus}: ReceivingOptionProps) {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');

    const handleInputChange = (setValue: any) => (e: any) => {
        setValue(e.target.value);
        if (street && house) {
            setAddressStatus('fulfilled')
        } else {
            setAddressStatus('default')
        }

    };

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
                            <input id='street' value={street} type='text' placeholder=' Улица' onChange={handleInputChange(setStreet)}/>
                        </div>
                        <div>
                            <label htmlFor='house'>Дом</label>
                            <input id='house' value={house} type='text' placeholder=' Дом' onChange={handleInputChange(setHouse)} />
                        </div>
                    </form>
                    {addressStatus === 'error' && (
                        <div className='tooltip'>Нужно заполнить для оформления доставки</div>
                    )}
                </div>
            ) : (
                <div className='address-container'>Москва, Улица Улиц, дом 27</div>
            )}
        </div>
    );
}