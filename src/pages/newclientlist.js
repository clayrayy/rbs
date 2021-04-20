import React from 'react'
import { ClientListContainer } from 'containers/clientlist'
import useClientData from 'hooks/get-data-hooks/use-get-clients'



export default function NewClintList() {
    const { clients, loading } = useClientData()

    return (
        <>
            {!loading && clients.map((client, index) => {
                
            })}
        </>
    )
}