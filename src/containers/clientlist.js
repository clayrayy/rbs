import React, { useState, useContext } from 'react'
import { Card, ClientCard, Form } from '../components'
import { useGetSessionsData } from 'hooks/get-data-hooks/use-get-sessions'
import { ButtonSpacer } from 'components/clientcard/styles/clientcard'
import { useHistory } from 'react-router'
import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import AnimateHeight from 'react-animate-height'
import * as ROUTES from '../constants/routes'


export function ClientListContainer({ client }) {
    const history = useHistory()
    const [showSessions, setShowSessions] = useState(false)
    const [sessionName, setSessionName] = useState('')
    const [takenBy, setTakenBy] = useState('')
    const { firebase } = useContext(FirebaseContext)
    const sessionRef = firebase.firestore().collection('sessions')
    const [showAddSessionModal, setShowAddSessionModal] = useState(false)
    const [bringUpModal, setBringUpModal] = useState(false)
    const { user } = useAuthListener()
    const { sessions, loading } = useGetSessionsData(client.docId)

    const clientName = `${client.first} ${client.last}`

    const toggleAddSession = () => {
        setShowAddSessionModal(!showAddSessionModal)
        setBringUpModal(!bringUpModal)
        setShowSessions(false)
    }

    const handleStartNewSession = (e) => {
        e.preventDefault()
        sessionRef
            .add({
                sessionName: `${sessionName || null}`,
                takenBy: takenBy,
                clientId: client.docId,
                clientName: clientName,
                createdBy: user.email,
                serverTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                epochDate: new Date(),
                date: new Date().toLocaleString(),
            })
            .then((docRef) => {
                history.push({
                    pathname: ROUTES.SESSION,
                    state: {
                        client: client,
                        currentSessionId: docRef.id,
                        takenBy: takenBy,
                        sessionName: `${sessionName || new Date().toLocaleString()}`
                    }
                })
            })
    }


    return (
        <Card open={showSessions} expandForSmallScreen={showAddSessionModal}>
            <Card.Top>

                <ClientCard.Modal blackout={showAddSessionModal} bringForward={bringUpModal}>

                    <Form formType="add-session" >
                        <Form.Title>New Session for {clientName}</Form.Title>
                        <Form.Base formType="add-session" expandForSmallScreen={showAddSessionModal}>

                            <Form.Input
                                formType="add-session"
                                placeholder='Session Name (optional)'
                                name='sessionName'
                                gridArea='n'
                                // style={{ gridRow: 1 / 1 }}
                                value={sessionName}
                                onChange={({ target }) => setSessionName(target.value)}
                            />
                            <Form.Input
                                formType="add-session"
                                placeholder='Taken By (optional)'
                                name='takenBy'
                                gridArea='t'
                                value={takenBy}
                                addMarginLeft={true}
                                onChange={({ target }) => setTakenBy(target.value)}
                            />


                            <Form.Button
                                type='submit'
                                gridArea='s'
                                buttonType='confirm'
                                formType='add-session'
                                onClick={handleStartNewSession}
                            >
                                Start Session
                            </Form.Button>
                            <Form.Button
                                buttonType='cancel'
                                gridArea='c'
                                formType='add-session'
                                onClick={(e) => {
                                    e.preventDefault()
                                    toggleAddSession()
                                }}
                            >
                                Cancel
                            </Form.Button>
                        </Form.Base>
                    </Form>
                    {/* <br />
                         */}
                </ClientCard.Modal>

                <ClientCard.IconContainer containerType='past-sessions-icon' onClick={() => setShowSessions(!showSessions)}>
                    <ClientCard.IconContainer><ClientCard.Text>Previous<br />Sessions</ClientCard.Text>
                        <ClientCard.DownArrow open={showSessions} /></ClientCard.IconContainer>

                </ClientCard.IconContainer>

                <ClientCard.TitleContainer >
                    <ClientCard.Title>{clientName}</ClientCard.Title>
                </ClientCard.TitleContainer>

                <ClientCard.ButtonContainer>
                    <ClientCard.ButtonSpacer>
                        <ClientCard.SessionButton onClick={toggleAddSession}>
                            <ClientCard.ButtonText>New Session</ClientCard.ButtonText>
                        </ClientCard.SessionButton>
                    </ClientCard.ButtonSpacer>
                </ClientCard.ButtonContainer>
            </Card.Top>


            <ClientCard.SessionsContainer sessions={sessions} open={showSessions}>
                <AnimateHeight
                    duration={500}
                    height={'auto'}
                >{loading ? <p>Loading</p> : sessions.map((session, index) => {
                    return <p key={index}>session run by: {session.createdBy}<br />length: {session.sessionLength}<br />{session.date}<br /></p>
                })}</AnimateHeight>
                <p>{ }</p>
                <p>populate using sessions data make a {`<Link to={ROUTES.DATASHEET} state={session} />`} passing state information to datasheet for each session</p>
            </ClientCard.SessionsContainer>

        </Card>


    )
}
// <form onSubmit={handleSubmit}>
//     <input type='text' value={firstName} onChange={({target}) => setFirstName(target.value)} placeholder='First'/>
//     <input type='text' value={lastName} onChange={({target}) => setLastName(target.value)} placeholder='Last'/>
//     <button type='submit'>submit</button>
// </form>
// const [firstName, setFirstName] = useState('')
// const [lastName, setLastName] = useState('')

// function handleChange({target}) {
    //     setFirstName(target.value)
    // }

    // function handleSubmit(e) {
        //     e.preventDefault()

        //     db.collection("clients").add({
            //         first: firstName,
            //         last: lastName
            //     })
            //     .then((docRef) => {
                //         console.log("Document written with ID: ", docRef.id);
                //     })
                //     .catch((error) => {
                    //         console.error("Error adding document: ", error);
                    //     });
                    // }