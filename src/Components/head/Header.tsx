import Menu from '../../assets/Menu.svg';
import Basket from '../../assets/Basket.png';
import {RootState} from "../../store/reducers";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import React from "react";

type HeaderProps = {
    addressStatus: string;
    setAddressStatus: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({addressStatus, setAddressStatus}: HeaderProps) {
    const sum = useTypedSelector((state: RootState) => state.basketState.basketSum);
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);
    const {clearBasketAction} = useActions();

    const handleClearBasket = () => {
        if (sum === 0) {
            alert('Для оформления заказа добавьте, пожалуйста, товары в корзину.')
            return;
        }
        if (receivingOption === 'delivery' && addressStatus !== 'fulfilled') {
            setAddressStatus('error')
            return;
        }

        clearBasketAction();
    };

    return (
        <header>
            <div className='header-logo'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='header-box'>
                <img src={Menu} alt='menu'/>
                <a className='basket' onClick={handleClearBasket}>
                    <div>{sum} ₽</div>
                    <img src={Basket} alt='basket'/>
                </a>
            </div>
        </header>
    );
}