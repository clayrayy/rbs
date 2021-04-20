import React from 'react'
import {ClientCard} from '../components'

export function ClientListContainer(first, last) {

    return (
        
            <ClientCard >
                <ClientCard.TitleContainer>
                    <ClientCard.Title>{`${first}poop ${last}`}</ClientCard.Title>
                </ClientCard.TitleContainer>
                <ClientCard.IconContainer>
                    <ClientCard.OpenClientIcon />
                </ClientCard.IconContainer>
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