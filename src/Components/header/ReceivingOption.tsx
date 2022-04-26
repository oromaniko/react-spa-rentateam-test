import SelectorButtons from './SelectorButtons'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React from 'react'
import styled from 'styled-components'
import AddressForm from './AddressForm'

type AddressProps = {
    addressStatus: string
    setAddressStatus: React.Dispatch<React.SetStateAction<string>>
}

export default function ReceivingOption(props: AddressProps) {
    const receivingOption = useTypedSelector(
        (state) => state.receivingState.receivingOption
    )

    return (
        <Container>
            <SelectorWrapper>
                {receivingOption === 'delivery' ? (
                    <h1>Доставка г. Москва</h1>
                ) : (
                    <h1>Самовывоз</h1>
                )}
                <SelectorButtons />
            </SelectorWrapper>
            <AddressWrapper>
                {receivingOption === 'delivery' ? (
                    <AddressForm
                        addressStatus={props.addressStatus}
                        setAddressStatus={props.setAddressStatus}
                    />
                ) : (
                    <Address>Москва, Улица Улиц, дом 27</Address>
                )}
            </AddressWrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 0 6.66%;
    background-color: white;
`

const SelectorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin: 0;
    }

    @media (max-width: 1200px) {
        h1 {
            padding-top: 10px;
            font-size: 50px;
        }
    }

    @media (max-width: 992px) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 40px;
        }
    }
`

const AddressWrapper = styled.div`
    padding-bottom: 63px;
    padding-top: 47px;
    position: relative;
`

const Address = styled.div`
    height: 42px;
`
