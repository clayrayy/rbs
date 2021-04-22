import React, { useState } from 'react'
import { Accordion, BehaviorTimer, Intervals } from 'components'
import { IntervalsContainer } from 'containers/intervals'
import { BehaviorTimerContainer } from 'containers/duration'


export default function IntervalsAccordion({ client, sessionId }) {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    // console.log(client)

    return (
        <Accordion open={isOpen}>

            <Accordion.TitleContainer>

                <Accordion.IconContainer />
                <Accordion.Frame>
                    <Accordion.Title onClick={() => setIsOpen(!isOpen)} open={isOpen}>Intervals</Accordion.Title>

                    <Intervals.MoreInfo className='session' open={isOpen} onClick={() => setIsOpen(!isOpen)} /></Accordion.Frame>

                <Accordion.IconContainer>
                    <Accordion.DropdownIcon open={dropdownOpen} />
                    <Accordion.DropdownContainer onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <Accordion.Dropdown visible={dropdownOpen}>
                            <Accordion.Text>hello</Accordion.Text>
                        </Accordion.Dropdown>

                    </Accordion.DropdownContainer>
                </Accordion.IconContainer>

            </Accordion.TitleContainer>
            <Accordion.ItemsContainer open={isOpen}>
                <IntervalsContainer behaviorName='Elopement' client={client} sessionId={sessionId} />
                <IntervalsContainer behaviorName='Tantrum' client={client} sessionId={sessionId} />
                <IntervalsContainer behaviorName='Pooping' client={client} sessionId={sessionId} />

            </Accordion.ItemsContainer>
            {/* map in custom containers  here*/}

        </Accordion>
    )
}