import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

export default function SelectorButtons() {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);
    const {setReceivingOption} = useActions();

    return (
        <div>
            <div className='btn-box'>
                <button
                    className={`selector-btn ${receivingOption === 'delivery' ? 'btn-red' : 'btn-grey'}`}
                    onClick={() => setReceivingOption('delivery')}
                >
                    <span>Доставка</span>
                </button>
                <button
                    className={`selector-btn ${receivingOption === 'pickup' ? 'btn-red' : 'btn-grey'}`}
                    onClick={() => setReceivingOption('pickup')}
                >
                    <span>Самовывоз</span>
                </button>
            </div>
        </div>
    );
}
