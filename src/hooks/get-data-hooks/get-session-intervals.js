import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import { useContext, useEffect, useState } from 'react'


export default function useGetSessionIntervals(clientId, sessionId, behaviorName) {
    const [intervals, setIntervals] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuthListener()
    const { firebase } = useContext(FirebaseContext)

    const intervalRef = firebase
        .firestore()
        .collection('events')
        .where('clientId', '==', clientId)
        .where('eventType', '==', 'interval')
        .where('sessionId', '==', sessionId)
        .where('behaviorName', '==', behaviorName)

    useEffect(() => {
        const unsubscribe = intervalRef
            .onSnapshot((snapshot => {
                let intervalsData = []
                snapshot.forEach((doc) => {
                    intervalsData.push({
                        ...doc.data()
                    })
                })
                setIntervals(intervalsData)
                setLoading(false)
            }))
            return () => unsubscribe()
    }, [])
    return { intervals, loading }
}