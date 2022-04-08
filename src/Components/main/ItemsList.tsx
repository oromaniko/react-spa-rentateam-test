import Item from "./Item";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect, useState} from "react";
import {ProductType} from "../../types/products";

export default function ItemsList ({ productsId }: any) {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:3001/products');
                const products = await response.json();
                setProducts(products);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
        fetchProducts();
    }, [])

    const currentCategoryProducts = products
        .filter(({ id }) => productsId.includes(id))
        .filter(({ delivery }) => (receivingOption === 'delivery' ? delivery : true));

    return (
        <div className='itemsList'>
            {currentCategoryProducts.map((item: ProductType) => (
                <Item key={item.id} product={item}/>
            ))}
        </div>
    );
}