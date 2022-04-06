import Menu from '../assets/Menu.svg';
import Basket from '../assets/Basket.png';
import {useSelector} from "react-redux";
import {IAppState} from "../store/store";

export default function () {
    const sum = useSelector((state: IAppState) => state.basketState.basketSum)
    return (
        <header>
            <div className='header-logo'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='header-box'>
                <img src={Menu} alt='menu'/>
                <a className='basket'>
                    <div>{sum} ₽</div>
                    <img src={Basket} alt='basket'/>
                </a>
            </div>
        </header>
    );
}