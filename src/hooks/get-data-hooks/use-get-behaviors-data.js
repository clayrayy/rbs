import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import { useContext, useState, useEffect } from 'react'

export function useGetBehaviorsData(openClient) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [totalSeconds, setTotalSeconds] = useState(0)
    const [behaviorsList, setBehaviorsList] = useState([])
    const [behaviorsData, setBehaviorsData] = useState([])
    const { firebase } = useContext(FirebaseContext)
    
    const behaviorsRef = firebase
        .firestore()
        .collection('behaviors')
        .where('clientId', '==', openClient)

    useEffect(() => {
        const unsubscribe = behaviorsRef
            .onSnapshot(
                (snapshot) => {
                    let behaviorListData = []
                    snapshot.forEach((doc) => {
                        behaviorListData.push(doc.data().behaviorName)
                    })
                    setLoading(false)
                    setBehaviorsList(behaviorListData)                    
                }, err => setError(err)
            )
        return () => unsubscribe()
    }, []
    )
    return { error, loading, behaviorsList, behaviorsData, totalSeconds }
}
