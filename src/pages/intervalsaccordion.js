import React, { useContext, useState } from 'react'
import { Accordion, BehaviorTimer, Form, Intervals } from 'components'
import { IntervalsContainer } from 'containers/intervals'
import { BehaviorTimerContainer } from 'containers/duration'
import { TestCardContainer } from 'containers/testcard'
import { FirebaseContext } from 'context/firebase'
import { useGetBehaviorsData } from 'hooks/get-data-hooks/use-get-behaviors-data'



export default function IntervalsAccordion({ client, sessionId, isRunning }) {
    const [isOpen, setIsOpen] = useState(false)
    const [newBehaviorName, setNewBehaviorName] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [addIntervalFormOpen, setAddIntervalFormOpen] = useState(false)
    const { behaviorsList, loading } = useGetBehaviorsData(client.docId, sessionId)
    
    const { firebase } = useContext(FirebaseContext)
    const handleAddNewInterval = (e) => {
        e.preventDefault()

        setAddIntervalFormOpen(false)
        firebase.firestore().collection('behaviors').doc().set({
            behaviorName: newBehaviorName,
            clientId: client.docId,
            sessionId: sessionId,
            type: 'interval'
        })
            .then(() => {
                setNewBehaviorName('')
                setDropdownOpen(false)
                setAddIntervalFormOpen(false)
            })
    }

    return (
        <Accordion open={isOpen}>

            <Accordion.TitleContainer>

                <Accordion.IconContainer />
                <Accordion.Frame>
                    <Accordion.Title
                        onClick={() => setIsOpen(!isOpen)}
                        open={isOpen}
                    >
                        Interval
                    </Accordion.Title>

                    <Intervals.MoreInfo
                        className='session'
                        open={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </Accordion.Frame>

                <Accordion.IconContainer onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                    setTimeout(() => { setAddIntervalFormOpen(false) }, 250)
                }}>
                    <Accordion.IconPositioner>
                        <Accordion.DropdownIcon
                            open={dropdownOpen}
                        />
                    </Accordion.IconPositioner>
                </Accordion.IconContainer>

                <Accordion.DropdownContainer>
                    <Accordion.Dropdown
                        expand={addIntervalFormOpen}
                        visible={dropdownOpen}
                    >
                        {!addIntervalFormOpen ? (
                            <BehaviorTimer.DropdownItem

                            >
                                <p onClick={() => setAddIntervalFormOpen(true)}>Add Custom Interval</p>
                            </BehaviorTimer.DropdownItem>
                        ) : (
                            <Form

                                shrink={!addIntervalFormOpen}
                            >


                                <Form.Base formType='add-duration'>
                                    <Form.Input
                                        onChange={({ target }) => {
                                            setNewBehaviorName(target.value)
                                        }}
                                        value={newBehaviorName}
                                        placeholder='Enter Behavior'
                                    />
                                    <Form.Button onClick={handleAddNewInterval}>
                                        Add
                                        </Form.Button>
                                </Form.Base>
                            </Form> 
                        )}
                    </Accordion.Dropdown>
                </Accordion.DropdownContainer>


            </Accordion.TitleContainer>
            <Accordion.ItemsContainer open={isOpen}>
                <IntervalsContainer
                    behaviorName='Elopement'
                    client={client}
                    sessionId={sessionId}
                    isRunning={isRunning}
                />
                <IntervalsContainer
                    behaviorName='Tantrum'
                    client={client}
                    sessionId={sessionId}
                    isRunning={isRunning}
                />
                <IntervalsContainer
                    behaviorName='Pooping'
                    client={client}
                    sessionId={sessionId}
                    isRunning={isRunning}
                />
                {!loading && behaviorsList.filter(behavior => behavior.type === 'interval').map((behavior) => {
                    return (<IntervalsContainer 
                        behaviorName={behavior.behaviorName} 
                        behaviorId={behavior.docId} 
                        isCustomInterval={true} 
                        client={client} 
                        sessionId={sessionId} 
                        isRunning={isRunning}
                        />)
                })}
            </Accordion.ItemsContainer>
            {/* map in custom containers  here*/}

        </Accordion>
    )
}