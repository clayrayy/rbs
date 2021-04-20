import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import { useEffect, useState, useContext } from 'react'

export default function useClientData() {
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const { user } = useAuthListener()
    const clientsRef = firebase
        .firestore()
        .collection('clients')
        .where("ownerUid", "==", user.email)

    useEffect(() => {
        const unsubscribe = clientsRef
            .onSnapshot((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => {
                    return {
                        ...contentObj.data(),
                        docId: contentObj.id,
                    }
                })
                setContent(allContent)
                setLoading(false)
            })
            return () => unsubscribe()
    }, [])

    return { clients: content, loading }
}