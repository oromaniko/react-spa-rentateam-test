export default function Item ({ product }: any) {
    const { id, name, price, delivery, img } = product;
    return (
        <div className='item'>
            <a href='#'>
                <div className='img-box'>
                    <img src={img} alt={name}/>
                    <div className='plus-btn-box'>
                        <div className='plus-btn-circle'>
                            <button className='plus-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor"
                                     className="bi bi-plus">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='name'><span>{name}</span></div>
                <div className='price'><span>{price} ₽</span></div>
            </a>
        </div>
    );
}