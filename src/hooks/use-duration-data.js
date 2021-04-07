import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import { useEffect, useState, useContext } from 'react'

export default function useDurationData(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)
    const { user } = useAuthListener()
    const clientsRef = firebase.firestore().collection('clients').where("ownerUid", "==", user.email)

    useEffect(() => {
        clientsRef
            .doc(target)
            .collection("trackers")
            .where("type", "==", "duration")
            .onSnapshot((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => {
                    return {
                        ...contentObj.data(),
                        docId: contentObj.id
                    }
                })
                setContent(allContent)
            })
    }, [])
    return { [target]: content }
}