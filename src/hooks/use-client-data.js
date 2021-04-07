import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'
import { useEffect, useState, useContext } from 'react'

export default function useClientData(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)
    const { user } = useAuthListener()

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .where("ownerUid", "==", user.email)
            .onSnapshot((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => {
                    // console.log(contentObj.data())
                    return {
                    ...contentObj.data(),
                    docId: contentObj.id,
                    // behaviors: contentObj.doc('behavior')
                }})

                setContent(allContent)
            })
            
    }, [])
    return { [target]: content }
}