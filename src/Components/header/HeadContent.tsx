import React, { useState } from 'react'
import Header from './Header'
import ReceivingOption from './ReceivingOption'

export default function HeadContent() {
    const [addressStatus, setAddressStatus] = useState('default')

    return (
        <>
            <Header
                addressStatus={addressStatus}
                setAddressStatus={setAddressStatus}
            />
            <ReceivingOption
                addressStatus={addressStatus}
                setAddressStatus={setAddressStatus}
            />
        </>
    )
}
