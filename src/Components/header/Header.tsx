import Menu from '../../assets/Menu.svg';
import Basket from '../../assets/Basket.png';
import {RootState} from "../../store/reducers";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import React from "react";
import styled from "styled-components";

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
        <HeaderWrapper>
            <LogoWrapper>
                <div></div>
                <div></div>
                <div></div>
            </LogoWrapper>
            <HeaderContent>
                <img src={Menu} alt='menu'/>
                <BasketLink onClick={handleClearBasket}>
                    <div>{sum} ₽</div>
                    <img src={Basket} alt='basket'/>
                </BasketLink>
            </HeaderContent>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    padding-bottom: 137px;
    width: 100%;
    padding-right: 6.66%;
    padding-left: 6.66%;
    background-color: white;
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 16px;
    div {
        background-color: #E4002B;
        width: 14px;
        height: 17px;
    }
    div:nth-child(2) {
        margin: 0 14px;
    }
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const BasketLink = styled.a`
    display: flex;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 18px;
    background-color: #E4002B;
    color: white;
    font-size: 20px;
    cursor: pointer;
`
