export default function SelectorButtons ({ selector: selector, setSelector }: any) {
    return (
        <div>
            <div className='btn-box'>
                <button
                    className={`selector-btn ${selector === 'delivery' ? 'btn-red' : 'btn-grey'}`}
                    onClick={() => setSelector('delivery')}
                >
                    <span>Доставка</span>
                </button>
                <button
                    className={`selector-btn ${selector === 'pickup' ? 'btn-red' : 'btn-grey'}`}
                    onClick={() => setSelector('pickup')}
                >
                    <span>Самовывоз</span>
                </button>
            </div>
        </div>
    );
}
