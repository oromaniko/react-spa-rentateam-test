import Menu from '../assets/Menu.svg';
import Basket from '../assets/Basket.png';

export default function () {
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
                    <div>327 ₽</div>
                    <img src={Basket} alt='basket'/>
                </a>
            </div>
        </header>
    );
}