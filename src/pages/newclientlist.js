import React from 'react'
import { ClientListContainer } from 'containers/clientlist'
import useClientData from 'hooks/get-data-hooks/use-get-clients'
import { HeaderContainer } from 'containers/header'
import { BehaviorTimerContainer } from 'containers/deprecated.../behaviortimer'
import { Loading } from 'components'
import LoadingContainer from 'containers/loading'
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
            {loading && <LoadingContainer />}
            {!loading && clients.map((client, index) => {
                return (
                    <ClientListContainer client={client} key={index} />
                    
                )
            })}
            
        </>
    )
}