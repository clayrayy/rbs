import { FirebaseContext } from 'context/firebase'
import { useEffect, useState, useContext } from 'react'

export function useGetSessionsData() {
    const [sessions, setSessions] = useState([])
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)

    const sessionRef = firebase
    .firestore()
    .collection('sessions')
    .where('clientId', '==', 'test')

    useEffect(() => {
       const unsubscribe =  sessionRef.onSnapshot((snapshot) => {
            let sessionsData = []
            snapshot.forEach((doc) => {
                sessionsData.push({
                    clientId: doc.data().clientId
                })
                setSessions(sessionsData)
                setLoading(false)
            })
        })
    }, [])
    return { sessions, loading }
}