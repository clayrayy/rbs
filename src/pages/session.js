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
    const [sessionsLength, setSessionLength] = useState(0)
    const [sessionsIsRunning, setSessionIsRunning] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        let timerId = null
        if (sessionsIsRunning) {
            timerId = setInterval(() => {
                setSessionLength(sessionLength => sessionLength + 1)
            }, 1000)
        } return () => clearInterval(timerId)
    }, [sessionsIsRunning])

    function formatTotalTime(t) {
        const h = (Math.floor(t / 3600)).toString().padStart(2, '0')
        t %= 3600
        const m = (Math.floor(t / 60)).toString().padStart(2, '0')
        const s = (t % 60).toString().padStart(2, '0')

        return `${h > 0 ? `${h.padStart()}:${m}:${s}` : `${m}:${s}`}`
    }

    return (
        <>
            <HeaderContainer
                title='Session'
                sessionActive={true}
                subtitle={isPaused ? `Paused: ${formatTotalTime(sessionsLength)}`: `Elapsed Time: ${formatTotalTime(sessionsLength)}`}
                backIcon={true}
            />
            <Popout open={popoutOpen}>
                <Popout.HeaderContainer onClick={() => setPopoutOpen(!popoutOpen)}>
                    <Popout.Header>Session Menu</Popout.Header>
                    <Popout.OpenButton>{popoutOpen ? 'close' : 'open'}</Popout.OpenButton>
                </Popout.HeaderContainer>
                <Popout.List>
                    <Popout.ListItem onClick={() => {
                        setSessionIsRunning(!sessionsIsRunning)
                        setIsPaused(!isPaused)
                        }}>{sessionsIsRunning ? 'Pause' : 'Resume'} Session</Popout.ListItem>
                    <Popout.ListItem>End Session</Popout.ListItem>
                </Popout.List>
            </Popout>
            <IntervalsAccordion isRunning={sessionsIsRunning} client={client} sessionId={currentSessionId} />
            <DurationsAccordion isRunning={sessionsIsRunning} client={client} sessionId={currentSessionId} />
        </>
    )
}