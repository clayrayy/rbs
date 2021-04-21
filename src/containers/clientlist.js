import React, { useState, useContext } from 'react'
import { ClientCard } from '../components'
import { useGetSessionsData } from 'hooks/get-data-hooks/use-get-sessions'

export function ClientListContainer({ client }) {
    const [showSessions, setShowSessions] = useState(false)
    const [showAddSessionForm, setShowAddSessionForm] = useState(false)
    // const { sessions } = useGetSessionsData(client.docId)
    // const clientName = `${client.first} ${client.last}`

    return (
        <ClientCard open={showSessions}>
            <ClientCard.Frame>
                <ClientCard.TitleContainer >
        <button onClick={()=> setShowAddSessionForm(!showAddSessionForm)}>{showAddSessionForm ? 'cancel' : 'Start new session'}</button>
                    {/* <ClientCard.Title>{clientName}</ClientCard.Title> */}
                </ClientCard.TitleContainer>
                <p onClick={() => setShowSessions(!showSessions)}>
                    Open sessions
                </p>
                <ClientCard.IconContainer>
                    <ClientCard.DownArrow />
                </ClientCard.IconContainer>
            </ClientCard.Frame>
            <ClientCard.SessionsContainer >
                {showAddSessionForm && (
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input placeholder='session'/>
                        <button type='submit'>Submit</button>
                    </form>
                )}
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