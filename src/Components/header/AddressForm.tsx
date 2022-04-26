import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type AddressProps = {
    addressStatus: string
    setAddressStatus: React.Dispatch<React.SetStateAction<string>>
}

export default function AddressForm({
    addressStatus,
    setAddressStatus,
}: AddressProps) {
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')

    const handleInputChange = (setValue: any) => (e: any) => {
        setValue(e.target.value)
    }

    useEffect(
        () => setAddressStatus(street && house ? 'fulfilled' : 'default'),
        [street, house, setAddressStatus]
    )

    return (
        <>
            <Form>
                <div>
                    <label htmlFor='street'>Улица</label>
                    <input
                        id='street'
                        value={street}
                        type='text'
                        placeholder=' Улица'
                        onChange={handleInputChange(setStreet)}
                    />
                </div>
                <div>
                    <label htmlFor='house'>Дом</label>
                    <input
                        id='house'
                        value={house}
                        type='text'
                        placeholder=' Дом'
                        onChange={handleInputChange(setHouse)}
                    />
                </div>
            </Form>
            {addressStatus === 'error' && (
                <Tooltip>Нужно заполнить для оформления доставки</Tooltip>
            )}
        </>
    )
}

const Form = styled.form`
    display: flex;
    gap: 20px 43px;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }

    label {
        margin-right: 12px;
    }

    input {
        height: 42px;
        width: 210px;
        background-color: #f7f6f5;
        border-radius: 4px;
        border: 1px solid #f7f6f5;
        padding: 10px 16px;
    }
`
const Tooltip = styled.div`
    position: absolute;
    color: white;
    background-color: black;
    padding: 12px 20px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
    bottom: 0;
    &:before {
        content: '';
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        width: 20px;
        height: 8px;
        background-color: black;
        position: absolute;
        top: -8px;
        left: 43%;
    }
`
