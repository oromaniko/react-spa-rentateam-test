import Plus from '../assets/Plus.svg';
import WhitePlus from '../assets/Plus-white.png';
import Minus from '../assets/Minus.png'
import {useEffect, useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

export default function Item ({ product }: any) {
    const { name, price, img } = product;
    const [count, setCount] = useState(0);
    const sum = useTypedSelector(state => state.basketState.basketSum);
    const {addToBasketAction, removeFromBasketAction} = useActions();

    useEffect(() => {
        if (sum === 0) {
            setCount(0);
        }
    }, [sum])

    const handleAddToBasket = () => {
        addToBasketAction(product);
    };

    const handleDeleteFromBasket = () => {
        removeFromBasketAction(product);
    }

    return (
        <div className='item'>
            <a href='#'>
                <div className='img-box'>
                    <div>
                        <img src={img} alt={name}/>
                    </div>
                    <div className='plus-btn-box'>
                        {count === 0 ? (
                            <div className='plus-btn-circle'>
                                <button className='plus-btn' onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToBasket();
                                    setCount(count + 1)
                                }}>
                                    <img src={Plus} alt='plus'/>
                                </button>
                            </div>
                        ) : (
                            <div className='plus-min-btn-circle'>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    handleDeleteFromBasket();
                                    setCount(count - 1);
                                }}>
                                    <img src={Minus} alt='minus'/>
                                </button>
                                <div>{count}</div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToBasket();
                                    setCount(count + 1);
                                }}>
                                    <img src={WhitePlus} alt='plus'/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='name'><span>{name}</span></div>
                <div className='price'><span>{price}</span><span className='fs-24'> ₽</span></div>
            </a>
        </div>
    );
}