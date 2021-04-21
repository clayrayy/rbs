import { FirebaseContext } from 'context/firebase'
import { useEffect, useState, useContext } from 'react'

export function useGetSessionsData(id) {
    const [sessions, setSessions] = useState([])
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)

    const sessionRef = firebase
    .firestore()
    .collection('sessions')
    .where('clientId', '==', id)

    useEffect(() => {
       const unsubscribe =  sessionRef.onSnapshot((snapshot) => {
            let sessionsData = []
            snapshot.forEach((doc) => {
                sessionsData.push({
                    ...doc.data(),
                    clientId: doc.data().clientId
                })
                setSessions(sessionsData)
                setLoading(false)
            })
        })
    }, [])
    return { sessions, loading }
}