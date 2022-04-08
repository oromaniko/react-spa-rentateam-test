import ItemsList from "./ItemsList";
import {CategoryType} from "../../types/products";

type CategoriesListProps = {
    categories: CategoryType[],
}

export default function CategoriesList ({categories}: CategoriesListProps) {
    return (
        <>
            {categories.map(({id, name, products}, i) => {
                const bg = i % 2 === 0 ? 'bg-grey' : '';
                if (products.length === 0) {
                    return null;
                }
                return (
                    <section key={id} className={bg} id={name}>
                        <div className='category'>
                            <div>
                                <span>{name}</span>
                            </div>
                            <ItemsList productsId={products} />
                        </div>
                    </section>
                );
            })}
        </>
    );
}