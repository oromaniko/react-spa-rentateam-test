import { categories } from "../store/mydata";
import ItemsList from "./ItemsList";

export default function CategoriesList () {
    return (
        <>
            {categories.map(({id, name, products}, i) => {
                const bg = i % 2 === 0 ? 'bg-grey' : '';
                return (
                    <section key={id} className={bg}>
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