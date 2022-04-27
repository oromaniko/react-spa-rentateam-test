import styled from 'styled-components'
import ItemButton from './ItemButton'

export default function Item({ product }: any) {
    const { name, price, img } = product

    return (
        <ItemContainer>
            <LinkWrapper href='#' onClick={(e) => e.preventDefault()}>
                <ImageContainer>
                    <div>
                        <img src={img} alt={name} />
                    </div>
                    <ItemButton product={product} />
                </ImageContainer>
                <Name>
                    <span>{name}</span>
                </Name>
                <Price>
                    <span>{price}</span>
                    <span> ₽</span>
                </Price>
            </LinkWrapper>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    width: 288px;
    height: 360px;
`

const LinkWrapper = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 40px;
    text-decoration: none;
    color: black;

    &:hover {
        background-color: #ffffff;
        > div:nth-child(2) {
            color: #000;
        }
        > div:first-child > div:first-child {
            transition: transform 0.3s;
            transform: scale(1.12);
        }
    }
`

const ImageContainer = styled.div`
    width: 208px;
    height: 208px;
    display: flex;
    justify-content: center;
    position: relative;

    > div:first-child {
        width: 92%;
        height: 92%;
        position: relative;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
    }
`

const Name = styled.div`
    text-align: center;
    width: 100%;
    color: #9d9d9d;
    font-size: 24px;
    line-height: 32px;
`

const Price = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    color: #e4002b;
    font-size: 32px;
    line-height: 40px;
    margin-top: 11px;

    span:last-child {
        font-size: 24px;
        line-height: 29px;
    }
`
