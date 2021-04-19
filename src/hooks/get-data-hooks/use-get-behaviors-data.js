import { FirebaseContext } from 'context/firebase'
import { useContext, useState, useEffect } from 'react'

export function useGetBehaviorsData(openClient) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [behaviorsList, setBehaviorsList] = useState([])
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
                        behaviorListData.push([doc.data().behaviorName, doc.id])
                    }) // returns [behavior name, behavior doc id]
                    setLoading(false)
                    setBehaviorsList(behaviorListData)

                }, err => setError(err)
            )
        return () => unsubscribe()
    }, []
    )
    return { error, loading, behaviorsList}
}
