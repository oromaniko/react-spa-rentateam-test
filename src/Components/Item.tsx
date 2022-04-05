import Plus from '../assets/Plus.svg';

export default function Item ({ product }: any) {
    const { id, name, price, delivery, img } = product;
    return (
        <div className='item'>
            <a href='#'>
                <div className='img-box'>
                    <div>
                        <img src={img} alt={name}/>
                    </div>
                    <div className='plus-btn-box'>
                        <div className='plus-btn-circle'>
                            <button className='plus-btn'>
                                <img src={Plus} alt='plus'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='name'><span>{name}</span></div>
                <div className='price'><span>{price}</span><span className='fs-24'> ₽</span></div>
            </a>
        </div>
    );
}