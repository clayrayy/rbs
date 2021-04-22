import React, { useState, useContext } from 'react'
import { ClientCard, Form } from '../components'
import { useGetSessionsData } from 'hooks/get-data-hooks/use-get-sessions'
import { ButtonSpacer } from 'components/clientcard/styles/clientcard'
import { useHistory } from 'react-router'
import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
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

    const clientName = `${client.first} ${client.last}`

    const toggleAddSession = () => {
        setShowAddSessionModal(!showAddSessionModal)
        setBringUpModal(!bringUpModal)
    }

    const handleStartNewSession = (e) => {
        e.preventDefault()
        sessionRef
            .add({
                sessionName: `${sessionName || new Date().toLocaleString()}`,
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
        <ClientCard open={showSessions}>

            <ClientCard.Frame>
                <ClientCard.Modal blackout={showAddSessionModal} bringForward={bringUpModal}>
                    <form onSubmit={handleStartNewSession}>
                        <input
                            placeholder='Session Name (optional)'
                            name='sessionName'
                            value={sessionName}
                            onChange={({ target }) => setSessionName(target.value)}
                        />
                        <input
                            placeholder='Taken By'
                            name='takenBy'
                            value={takenBy}
                            onChange={({ target }) => setTakenBy(target.value)}
                        />
                        <button type='submit'>Start Session</button>
                    </form>
                    <button onClick={toggleAddSession}>Cancel</button>
                </ClientCard.Modal>

                <ClientCard.IconContainer onClick={() => setShowSessions(!showSessions)}>
                    <ClientCard.Text>Past Sessions</ClientCard.Text>
                    <ClientCard.DownArrow />
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

            </ClientCard.Frame>
            <ClientCard.SessionsContainer open={showSessions}>

                {/* <p>{sessions.map((session, index) => {
                    return <p key={index}>session run by: {session.createdBy}<br />length: {session.sessionLength}<br />includes duration data: {session.dataTypes.duration.toString()}</p>
                })}</p> */}
                <p>populate using sessions data make a {`<Link to={ROUTES.DATASHEET} state={session} />`} passing state information to datasheet for each session</p>
            </ClientCard.SessionsContainer>
        </ClientCard>


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