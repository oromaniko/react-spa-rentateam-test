import { items } from "../store/mydata";
import Item from "./Item";
import {useTypedSelector} from "../hooks/useTypedSelector";

export default function ItemsList ({ productsId }: any) {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);

    const currentCategoryProducts = items
        .filter(({ id }) => productsId.includes(id))
        .filter(({ delivery }) => (receivingOption === 'delivery' ? delivery : true));

    return (
        <div className='itemsList'>
            {currentCategoryProducts.map((item) => (
                <Item key={item.id} product={item}/>
            ))}
        </div>
    );
}