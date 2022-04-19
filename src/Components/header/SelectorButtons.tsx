import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import styled from 'styled-components';

export default function SelectorButtons() {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);
    const {setReceivingOption} = useActions();

    return (
        <ButtonsWrapper>
            <Button
                option={receivingOption === 'delivery'}
                onClick={() => setReceivingOption('delivery')}
            >
                <span>Доставка</span>
            </Button>
            <Button
                option={receivingOption === 'pickup'}
                onClick={() => setReceivingOption('pickup')}
            >
                <span>Самовывоз</span>
            </Button>
        </ButtonsWrapper>
    );
}

const ButtonsWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    line-height: 24px;
    width: 291px;
`
const Button = styled.button<{ option: boolean }>`
    text-transform: none;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    border: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 12px 17px;
    border-radius: 4px;
    color: ${({ option }) => option ? 'white' : '#9D9D9D'};
    background-color: ${({ option }) => option ? '#E4002B' : '#EFEFEF'};
    border: 1px solid ${({ option }) => option ? '#E4002B' : '#EFEFEF'};
`

