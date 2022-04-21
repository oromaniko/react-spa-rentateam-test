import Plus from '../../assets/Plus.svg'
import Minus from '../../assets/Minus.png'
import WhitePlus from '../../assets/Plus-white.png'
import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import styled from 'styled-components'

export default function ItemButton({ product }: any) {
    const [count, setCount] = useState(0)
    const sum = useTypedSelector((state) => state.basketState.basketSum)
    const { addToBasketAction, removeFromBasketAction } = useActions()

    useEffect(() => {
        if (sum === 0) {
            setCount(0)
        }
    }, [sum])

    const handleAddToBasket = () => {
        addToBasketAction(product)
    }

    const handleDeleteFromBasket = () => {
        removeFromBasketAction(product)
    }

    return (
        <ButtonsWrapper>
            {count === 0 ? (
                <PlusButtonCircle>
                    <PlusButton
                        onClick={(e) => {
                            e.preventDefault()
                            handleAddToBasket()
                            setCount(count + 1)
                        }}
                    >
                        <img src={Plus} alt='plus' />
                    </PlusButton>
                </PlusButtonCircle>
            ) : (
                <PlusMinusButtonCircle>
                    <PlusMinusButton
                        onClick={(e) => {
                            e.preventDefault()
                            handleDeleteFromBasket()
                            setCount(count - 1)
                        }}
                    >
                        <img src={Minus} alt='minus' />
                    </PlusMinusButton>
                    <div>{count}</div>
                    <PlusMinusButton
                        onClick={(e) => {
                            e.preventDefault()
                            handleAddToBasket()
                            setCount(count + 1)
                        }}
                    >
                        <img src={WhitePlus} alt='plus' />
                    </PlusMinusButton>
                </PlusMinusButtonCircle>
            )}
        </ButtonsWrapper>
    )
}

const ButtonsWrapper = styled.div`
    bottom: 16px;
    position: absolute;
    right: 16px;
`

const Button = styled.button`
    text-transform: none;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    background: none;
    border: unset;
    cursor: pointer;
`

const PlusButtonCircle = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    height: 40px;
    justify-content: flex-end;
    padding: 10px 0;
    position: relative;
    width: 40px;
`

const PlusButton = styled(Button)`
    align-items: center;
    border-radius: 10rem;
    box-shadow: 0 4px 6px 0 rgb(0 0 0 / 8%);
    display: flex;
    flex-direction: column;
    height: 40px;
    justify-content: center;
    padding: 14px;
    position: relative;
    transition-duration: 0.3s;
    transition-property: box-shadow, border-width;
    transition-timing-function: ease;
    width: 40px;
    z-index: 3;
`

const PlusMinusButtonCircle = styled.div`
    width: 104px;
    height: 40px;
    background-color: black;
    color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
        font-size: 20px;
        padding-top: 5px;
    }
`

const PlusMinusButton = styled(Button)`
    position: relative;
    width: 40px;
`
