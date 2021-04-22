import React, { useState } from 'react'
import { Accordion, BehaviorTimer, Intervals } from 'components'
import { BehaviorTimerContainer } from 'containers/duration'


export default function DurationsAccordion({client, sessionId}) {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    console.log(client)

    return (
        <Accordion open={isOpen}>

<Accordion.TitleContainer>

<Accordion.IconContainer />
<Accordion.Frame>
<Accordion.Title onClick={()=>setIsOpen(!isOpen)} open={isOpen}>Durations</Accordion.Title>
    
    <Intervals.MoreInfo className='session' open={isOpen} onClick={() => setIsOpen(!isOpen)} /></Accordion.Frame>

<Accordion.IconContainer>
        <Accordion.DropdownIcon open={dropdownOpen}/>
    <Accordion.DropdownContainer onClick={() => setDropdownOpen(!dropdownOpen)}>
        <Accordion.Dropdown visible={dropdownOpen}>
            <Accordion.Text>Add New Timer</Accordion.Text>
        </Accordion.Dropdown>

    </Accordion.DropdownContainer>
</Accordion.IconContainer>

</Accordion.TitleContainer>
            <Accordion.ItemsContainer open={isOpen}>
                <BehaviorTimerContainer behaviorName='Tantrum' client={client} sessionId={sessionId} />
                <BehaviorTimerContainer behaviorName='Elopement' client={client} sessionId={sessionId} />
                <BehaviorTimerContainer behaviorName='Pooping' client={client} sessionId={sessionId} />
            </Accordion.ItemsContainer>
            {/* map in custom containers  here*/}

        </Accordion>
    )
}