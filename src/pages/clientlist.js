import React, { useState } from 'react'
// import { ClientListContainer } from '../containers/clientlist'
import { HeaderContainer } from '../containers/header'
import { ClientCard } from '../components'
import DataSheet from './datasheet'
import useClientList from 'hooks/use-client-data'
// import useDurationData from 'hooks/use-duration-data'
import { useGettingData } from 'hooks/gettingdatahook'


export default function ClientList() {
    const [datasheetOpen, setDatasheetOpen] = useState(false)
    const [data, setData] = useState({})
    // const [durationData, setDurationData] = useState([])
    const { clients } = useClientList('clients')
    // const { durations } = useDurationData(data.id)
    
    function showClientDatasheet() {
        setDatasheetOpen(!datasheetOpen)
    }
    console.log(useGettingData())
    
    return (
        <>
            <HeaderContainer
                backIcon={datasheetOpen ? 'true' : 'false'}
                title={datasheetOpen ? data.clientName : 'Clients'}
                name={datasheetOpen ? 'behaviors' : 'clients'}
                addIcon='true'
                data={data}
                backFromDatasheet={() => setDatasheetOpen(false)}
            />
            {datasheetOpen === true ? (
            <DataSheet data={data} />
            )
                : (
                    clients.map(client => {
                        // console.log(client.durations)
                        const clientName = `${client.first} ${client.last}`
                        return (
                            <ClientCard
                                key={client.docId}
                                onClick={() => {
                                    showClientDatasheet()
                                    setData({
                                        id: client.docId,
                                        clientName: clientName,
                                        behaviors: client.durations
                                       
                                    })
                                }}
                            >
                                <ClientCard.TitleContainer>
                                    <ClientCard.Title>{clientName}</ClientCard.Title>
                                </ClientCard.TitleContainer>
                                <ClientCard.IconContainer>
                                    <ClientCard.OpenClientIcon />
                                </ClientCard.IconContainer>
                            </ClientCard>
                        )
                    })
                )
            }
        </>
    )
}