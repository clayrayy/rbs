import { FirebaseContext } from 'context/firebase'
import { useContext, useState, useEffect } from 'react'
import useAuthListener from './use-auth-listener'


export default function useClientDurations(behavior) {
    const [content, setContent] = useState([])
    const { user } = useAuthListener()
    const { firebase } = useContext(FirebaseContext)


    useEffect(() => {
        firebase
            .firestore()
            .collection('clients')
            .onSnapshot
            .then((querySnapshot) => {
                console.log(querySnapshot)})
            .catch((error) => console.log(error))
    }, [])
    // return { 'clients': content }
}
