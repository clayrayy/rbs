import React, { useContext, useState } from 'react'
import { Accordion, AddItemForm, BehaviorTimer, Form, Intervals } from 'components'
import { BehaviorTimerContainer } from 'containers/duration'
import { FirebaseContext } from 'context/firebase'
import { useGetBehaviorsData } from 'hooks/get-data-hooks/use-get-behaviors-data'


export default function DurationsAccordion({ client, sessionId }) {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [newBehaviorName, setNewBehaviorName] = useState('')
    const [addDurationFormOpen, setAddDurationFormOpen] = useState(false)
    const { firebase } = useContext(FirebaseContext)
    const { behaviorsList, loading } = useGetBehaviorsData(client.docId, sessionId)
    console.log(behaviorsList)

    console.log(client)

    const handleAddNewDuration = (e) => {
        e.preventDefault()

        setAddDurationFormOpen(false)
        firebase.firestore().collection('behaviors').doc().set({
            behaviorName: newBehaviorName,
            clientId: client.docId,
            sessionId: sessionId,
            type: 'duration'
        })
            .then(() => {
                setNewBehaviorName('')
                setDropdownOpen(false)
                setAddDurationFormOpen(false)
            })
    }
    console.log(behaviorsList)

    return (
        <Accordion open={isOpen}>

            <Accordion.TitleContainer>
                <Accordion.IconContainer />
                <Accordion.Frame>
                    <Accordion.Title
                        onClick={() => setIsOpen(!isOpen)}
                        open={isOpen}
                    >
                        Duration
                    </Accordion.Title>

                    <Intervals.MoreInfo
                        className='session'
                        open={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </Accordion.Frame>

                <Accordion.IconContainer onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                    setTimeout(() => { setAddDurationFormOpen(false) }, 250)
                }}>
                    <Accordion.IconPositioner>
                        <Accordion.DropdownIcon
                            open={dropdownOpen}
                        />
                    </Accordion.IconPositioner>
                </Accordion.IconContainer>

                <Accordion.DropdownContainer>
                    <Accordion.Dropdown
                        expand={addDurationFormOpen}
                        visible={dropdownOpen}
                    >
                        {!addDurationFormOpen ? (
                            <BehaviorTimer.DropdownItem

                            >
                                <p onClick={() => setAddDurationFormOpen(true)}>Add Custom Duration</p>
                            </BehaviorTimer.DropdownItem>
                        ) : (
                            <Form

                                shrink={!addDurationFormOpen}
                            >


                                <Form.Base formType='add-duration'>
                                    <Form.Input
                                        onChange={({ target }) => {
                                            setNewBehaviorName(target.value)
                                        }}
                                        value={newBehaviorName}
                                        placeholder='Enter Behavior'
                                    />
                                    <Form.Button onClick={handleAddNewDuration}>
                                        Add
                                        </Form.Button>
                                </Form.Base>
                            </Form>

                        )}
                    </Accordion.Dropdown>
                </Accordion.DropdownContainer>

            </Accordion.TitleContainer>
            <Accordion.ItemsContainer open={isOpen}>
                <BehaviorTimerContainer behaviorName='Tantrum' client={client} sessionId={sessionId} />
                <BehaviorTimerContainer behaviorName='Elopement' client={client} sessionId={sessionId} />
                <BehaviorTimerContainer behaviorName='Pooping' client={client} sessionId={sessionId} />
                {!loading && behaviorsList.filter(behavior => behavior.type === 'duration').map((behavior) => {
                    return (<BehaviorTimerContainer behaviorName={behavior.behaviorName} behaviorId={behavior.docId} isCustomDuration={true} client={client} sessionId={sessionId} />)
                })}
            </Accordion.ItemsContainer>

        </Accordion>
    )
}