import Menu from '../assets/Menu.svg';
import Basket from '../assets/Basket.png';
import {RootState} from "../store/reducers";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export default function () {
    const sum = useTypedSelector((state: RootState) => state.basketState.basketSum);
    const {clearBasketAction} = useActions();

    const handleClearBasket = () => {
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
                <a className='basket' onClick={clearBasketAction}>
                    <div>{sum} ₽</div>
                    <img src={Basket} alt='basket'/>
                </a>
            </div>
        </header>
    );
}