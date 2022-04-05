import {categories} from "../store/mydata";

export default function CategoriesNavList () {
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