import {CategoryType} from "../../types/products";

type CategoriesNavListProps = {
    categories: CategoryType[],
}

export default function CategoriesNavList ({categories}: CategoriesNavListProps) {
    return (
        <div className='nav-box sticky'>
            <nav>
                {categories.map(({ id, name }) => (
                    <a key={id} className='nav-item' href={`#${name}`}><span>{name}</span></a>
                ))}
            </nav>
        </div>
    );
}