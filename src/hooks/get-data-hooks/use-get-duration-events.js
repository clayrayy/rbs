import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import { useContext, useState, useEffect } from 'react'

export default function useGetDurationEvents(openClient, behaviorName) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [durations, setDurations] = useState([])
    const [behaviorId, setBehaviorId] = useState('')
    // const [timestamp, setTimeStamp] = useState('')
    // const [totalSeconds, setTotalSeconds] = useState([])
    const { firebase } = useContext(FirebaseContext)
    const { user } = useAuthListener()

    const durationEventRef = firebase
        .firestore()
        .collection('events')
        .where('eventType', '==', 'duration')
        .where('createdBy', '==', user.email)
        .where('clientId', '==', openClient.id)
        .where('behaviorName', '==', behaviorName)
        

    useEffect(() => {
        const unsubscribe = durationEventRef
            .onSnapshot(
                (snapshot) => {
                    let allData = []
                    snapshot.forEach((doc) => {
                        allData.push({
                            ...doc.data(),
                            docId: doc.id
                        })
                    })
                    setLoading(false)
                    setDurations(allData)
                }, err => setError(err)
            )
        return () => unsubscribe()
    }, []
    )

    return { durations: durations, loading, error }

}
