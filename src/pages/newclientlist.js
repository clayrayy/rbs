import React from 'react'
import { ClientListContainer } from 'containers/clientlist'
import useClientData from 'hooks/get-data-hooks/use-get-clients'
import { HeaderContainer } from 'containers/header'
import { BehaviorTimerContainer } from 'containers/behaviortimer'
// import { DurationContainer } from 'containers/duration'

export default function NewClientList() {
    const { clients, loading } = useClientData()

    return (
        <>
            <HeaderContainer 
                backIcon={false}
                addIcon={true}
                title='Clients'
                name='clients'
            />
            {!loading && clients.map((client, index) => {
                return (
                    <ClientListContainer client={client} key={index} />
                    
                )
            })}
            
        </>
    )
}