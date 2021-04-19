import { FirebaseContext } from 'context/firebase'
import { useContext, useState } from 'react'

export default function useDeleteClient(clientId) {
    const { firebase } = useContext(FirebaseContext)
    const [behaviorsList, setBehaviorsList] = useState([])
    const [eventsList, setEventsList] = useState([])

    const behaviorsRef = firebase.firestore().collection('behaviors').where('clientId', '==', clientId)

    const eventsRef = firebase.firestore().collection('events').where('clientId', '==', clientId)

    
    
}