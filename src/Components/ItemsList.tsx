import { items } from "../store/mydata";
import Item from "./Item";

export default function ItemsList ({ productsId }: any) {
    const currentCategoryProducts = items.filter(({ id }) => productsId.includes(id));
    return (
        <div className='itemsList'>
            {currentCategoryProducts.map((item) => (
                <Item key={item.id} product={item}/>
            ))}
        </div>
    );
}