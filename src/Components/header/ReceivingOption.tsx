import SelectorButtons from "./SelectorButtons";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import React from "react";
import styled from 'styled-components';
import AddressForm from "./AddressForm";

type AddressProps = {
    addressStatus: string;
    setAddressStatus: React.Dispatch<React.SetStateAction<string>>;
}

export default function ReceivingOption (props: AddressProps) {
    const receivingOption = useTypedSelector(state => state.receivingState.receivingOption);

    return (
        <Container>
            <SelectorWrapper>
                <div>
                    {receivingOption === 'delivery' ? (
                        <h1>Доставка г. Москва</h1>
                    ) : (
                        <h1>Самовывоз</h1>
                    )}
                </div>
                <SelectorButtons />
            </SelectorWrapper>
            <AddressWrapper>
                {receivingOption === 'delivery'
                    ? <AddressForm addressStatus={props.addressStatus} setAddressStatus={props.setAddressStatus}/>
                    : <div className='address-container'>Москва, Улица Улиц, дом 27</div>
                }
            </AddressWrapper>
        </Container>
    );
}

const Container = styled.div`
      width: 100%;
      padding: 0 6.66%;
      background-color: white;
`

const SelectorWrapper = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap-reverse;
      justify-content: space-between;
      align-items: center;
      h1 {
          margin: 0;
      }
`

const AddressWrapper = styled.div`
    padding-bottom: 63px;
    padding-top: 47px;
    position: relative;
`