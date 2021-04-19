import React, { useState, useContext } from 'react'
// import { ClientListContainer } from '../containers/clientlist'
import { HeaderContainer } from '../containers/header'
import { ClientCard } from '../components'
import DataSheet from './datasheet'
import useClientData from 'hooks/get-data-hooks/use-get-clients'
// import { BehaviorContext } from 'context/behavior-context'
// import useDurationData from 'hooks/use-duration-data'
// import { useGetDurationEvents } from 'hooks/get-data-hooks/use-get-durations-events'



export default function ClientList() {
    const [datasheetOpen, setDatasheetOpen] = useState(false)
    const [data, setData] = useState({})
    const [backActive, setBackActive] = useState(false) //activates change to animate back icon
    const [openClient, setOpenClient] = useState()
    // const [durationData, setDurationData] = useState([])
    const { clients } = useClientData()
    // const { durations } = useDurationData(data.id)
    // const {totalSeconds} = useGetDurationEvents(openClient)

    // function toDateTime(secs) {
    //     var t = new Date(1970, 0, 1); // Epoch
    //     t.setSeconds(secs);
    //     return t.toString();
    // }

    // console.log(toDateTime(1617538210 - 7200))
    function showClientDatasheet() {
        setDatasheetOpen(!datasheetOpen)
    }



    return (
        <>
            <HeaderContainer
                backIcon={datasheetOpen ? 'true' : 'false'}
                title={datasheetOpen ? data.clientName : 'Clients'}
                name={datasheetOpen ? 'behaviors' : 'clients'}
                addIcon='true'
                data={data}
                backFromDatasheet={() => { setTimeout(() => { 
                    setDatasheetOpen(false)
                 }, 400) }}
                openClient={openClient}
            />
            {datasheetOpen === true ? (

                <DataSheet data={data} openClient={openClient} />

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
                                    setOpenClient({
                                        id: client.docId
                                    })
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