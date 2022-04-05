import {useState} from "react";
import SelectorButtons from "./SelectorButtons";

export default function DeliveryOption () {
    const [selector, setSelector] = useState('delivery')
    return (
        <div className='selector-box'>
            <div className='selector-container'>
                <div>
                    {selector === 'delivery' ? (
                        <h1>Доставка г. Москва</h1>
                    ) : (
                        <h1>Самовывоз</h1>
                    )}
                </div>
                <SelectorButtons selector={selector} setSelector={setSelector} />
            </div>
            {selector === 'delivery' ? (
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
                <div className='address-container'>12345 Москва Улица Дом</div>
            )}
        </div>
    );
}