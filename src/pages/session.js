import { EditButton, ModalButton } from 'components/behaviortimer/styles/behaviortimer'
import { SessionButton } from 'components/clientcard/styles/clientcard'
import Popout from 'components/popout'
import { HeaderContainer } from 'containers/header'
import { DurationsAccordion } from 'pages'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import IntervalsAccordion from './intervalsaccordion'


export default function Session() {
    const location = useLocation()
    const client = (location.state.client)
    const currentSessionId = (location.state.currentSessionId)
    const currentSessionName = (location.state.sessionName)
    const [subtitle, setSubtite] = useState('')
    const [popoutOpen, setPopoutOpen] = useState(false)




    return (
        <>
            <HeaderContainer
                title='Session'
                subtitle={currentSessionName || null}
                backIcon={true}
            />
            <Popout open={popoutOpen}>
                <Popout.HeaderContainer onClick={()=>setPopoutOpen(!popoutOpen)}>
                    <Popout.Header>Session Menu</Popout.Header>
                    <Popout.OpenButton>{popoutOpen ? 'close' : 'open'}</Popout.OpenButton>
                </Popout.HeaderContainer>
                <Popout.List>
                    <Popout.ListItem>Pause Session</Popout.ListItem>
                    <Popout.ListItem>End Session</Popout.ListItem>
                </Popout.List>
            </Popout>
            <IntervalsAccordion client={client} sessionId={currentSessionId} />
            <DurationsAccordion client={client} sessionId={currentSessionId} />
        </>
    )
}