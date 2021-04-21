import React, { useState, useContext } from 'react'
import { HeaderContainer } from '../containers/header'
import { ClientCard } from '../components'
import DataSheet from './datasheet'
import * as ROUTES from '../constants/routes'
import useClientData from 'hooks/get-data-hooks/use-get-clients'
import { ClientListContainer } from 'containers/clientlist'
// import { DataSheet } from 'pages'


//

export default function ClientList() {
    const [datasheetOpen, setDatasheetOpen] = useState(false)
    const [data, setData] = useState({})
    const [showSessions, setShowSessions] = useState(false)
    const [backActive, setBackActive] = useState(false) //activates change to animate back icon
    const [openClient, setOpenClient] = useState()
    // const [durationData, setDurationData] = useState([])
    const { clients } = useClientData()

    function showClientDatasheet() {
        setDatasheetOpen(!datasheetOpen)
    }

    console.log(showSessions)

    return (
        <>
            <HeaderContainer
                backIcon={datasheetOpen ? 'true' : 'false'}
                title={datasheetOpen ? data.clientName : 'Clients'}
                name={datasheetOpen ? 'behaviors' : 'clients'}
                addIcon={true}
                data={data}
                backFromDatasheet={() => {
                    setTimeout(() => {
                        setDatasheetOpen(false)
                    }, 400)
                }}
                openClient={openClient}
            />
            {datasheetOpen === true ? (

                <DataSheet data={data} openClient={openClient} />

            )
                : (
                    clients.map(client => {
                        const isOpen = showSessions
                        const clientName = `${client.first} ${client.last}`
                        return (
                            <ClientCard
                                key={client.docId}
                                open={isOpen}>

                                <ClientCard.Frame>

                                    <ClientCard.TitleContainer>
                                        <ClientCard.Title>
                                            {clientName}
                                        </ClientCard.Title>
                                    </ClientCard.TitleContainer>

                                    <p onClick={() => setShowSessions(!showSessions)}>
                                        History
                                        </p>
                                    <ClientCard.IconContainer>

                                        <ClientCard.OpenClientIcon onClick={() => {
                                            setDatasheetOpen(true)
                                            setOpenClient({
                                                id: client.docId
                                            })
                                            setData({
                                                id: client.docId,
                                                clientName: clientName,
                                                behaviors: client.durations
                                            })
                                        }} />

                                    </ClientCard.IconContainer>

                                </ClientCard.Frame>
                                <ClientCard.SessionsContainer open={showSessions}>
                                    <p>test</p>
                                </ClientCard.SessionsContainer>

                            </ClientCard>
                        )
                    })
                )
            }
            {/* {/* <ClientListContainer /> */}
            <ClientListContainer behaviorName='Elopement'/> 
        </>
    )
}