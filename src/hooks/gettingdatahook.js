import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'

export function useGettingData() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useAuthListener()
  const [data, setData] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('clients')
      .doc('0qRm6iWl79Rlk6vtqryH')
      .onSnapshot((doc) => {
        const info = doc.data()
        console.log(info)
        for (let key in info.durations) {
          const value = info.durations[key]
          console.log(value)
        }
        const clientData = {
          firstName: info.first,
          lastName: info.last,
          durationInfo: Object.entries(info.durations)
        }
        setData(clientData)
      })
      
    
    }, [])


  return (
    data
)
}