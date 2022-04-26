import Item from './Item'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { ProductType } from '../../types/products'
import styled from 'styled-components'

export default function ItemsList({ productsId }: any) {
    const receivingOption = useTypedSelector(
        (state) => state.receivingState.receivingOption
    )
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            try {
                setIsLoading(true)
                const response = await fetch(
                    'https://delivery-server-rentateam.herokuapp.com/products'
                )
                const products = await response.json()
                setProducts(products)
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        fetchProducts()
    }, [])

    const currentCategoryProducts = products
        .filter(({ id }) => productsId.includes(id))
        .filter(({ delivery }) =>
            receivingOption === 'delivery' ? delivery : true
        )

    return (
        <ItemsListWrapper>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                currentCategoryProducts.map((item: ProductType) => (
                    <Item key={item.id} product={item} />
                ))
            )}
        </ItemsListWrapper>
    )
}

const ItemsListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
    margin-top: 32px;
`
