import {useState} from "react";
import SelectorButtons from "./SelectorButtons";
import {useTypedSelector} from "../hooks/useTypedSelector";

export default function ReceivingOption () {
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
                            <input id='street' type='text' placeholder=' Улица'/>
                        </div>
                        <div>
                            <label htmlFor='house'>Дом</label>
                            <input id='house' type='text' placeholder=' Дом'/>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='address-container'>Москва, Улица Улиц, дом 27</div>
            )}
        </div>
    );
}