
import { useState, useEffect, useContext } from 'react'
import useGetDurationEvents from 'hooks/get-data-hooks/use-get-duration-events'
import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'


export default function useBehaviorTimer(openClient, behaviorName) {
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0)
    const [history, setHistory] = useState([])
    const [date, setDate] = useState('')
    const [formattedTime, setFormattedTime] = useState('')
    const [epochDate, setEpochDate] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [editEventsActive, setEditEventsActive] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
    const [editOpen, setEditOpen] = useState(false)
    const [deleteBehaviorDD, setDeleteBehaviorDD] = useState(false)
    const [openBehavior, setOpenBehavior] = useState('')
    const { durations, loading } = useGetDurationEvents(openClient, behaviorName)
    const { firebase } = useContext(FirebaseContext)
    const { user } = useAuthListener()

    let durationsTime = durations.map((duration) => duration.seconds)
    let totalSeconds = 0;
    let eventsRef = firebase
        .firestore()
        .collection('events')
    
    for (let i = 0; i < durationsTime.length; i++) {
        totalSeconds += durationsTime[i]
    }

    let displayTime = time < 3600 ? formatTime(time).toString().slice(3) : formatTime(time)

    const timePreview = function formatTotalTimePreview() {
        return (loading ? 'loading' : (!isOpen ? (durations.length === 0
            ? 'No Records'
            : durations.length === 1
                ? `1 Record ${formatTotalTime(totalSeconds)}`
                : durations.length > 1
                    ? `${durations.length} Records ${formatTotalTime(totalSeconds)} `
                    : null) : 'History'))
    }

    useEffect(() => {
        let timerId = null
        if (isActive) {
            timerId = setInterval(() => {
                setTime(time => time + 1)
                setTotalTime(prevTime => prevTime + 1)
            }, 1000)
        }
        return () => clearInterval(timerId)
    }, [isActive])

    function formatTime(t) {
        return new Date(t * 1000).toISOString().substr(11, 8)
    }

    function formatTotalTime(t) {
        const h = (Math.floor(t / 3600)).toString().padStart(2, '0')
        t %= 3600
        const m = (Math.floor(t / 60)).toString().padStart(2, '0')
        const s = (t % 60).toString().padStart(2, '0')

        return `${h > 0 ? `${h.padStart()}:${m}:${s}` : `${m}:${s}`}`
    }
    
    function toggleActive() {
        if (!isActive) {
            setIsActive(true)
            setDate(new Date().toLocaleString())
            setEpochDate(new Date())
            setEditEventsActive(false)
        } else {
            setIsActive(false)
            setEditEventsActive(false)
            eventsRef.add({
                clientId: openClient.id,
                createdBy: user.email,
                eventType: 'duration',
                seconds: time,
                name: behaviorName[0],
                behaviorName: behaviorName,
                timestamp:date,
                epochDate: epochDate,
                serverTimestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            
            setTime(0)
        }
    }

    function toggleOpen(name) {
        setOpenBehavior(name)
        if (isOpen) {
            setEditEventsActive(false)
        }
        setIsOpen(!isOpen)
    }

    const deleteEvent = (id) => {
        firebase
          .firestore()
          .collection('events')
          .doc(id)
          .delete()
      }
    
      const deleteBehaviorEvents = (behaviorName, id) => {
        let eventsRef = firebase
          .firestore()
          .collection('events')
          .where('name', '==', behaviorName)
    
        eventsRef
          .get()
          .then((querySnapshot) => {
            let batch = firebase.firestore().batch()
            querySnapshot.forEach((doc) => {
              batch.delete(doc.ref)
            })
            return batch.commit()
          })
          .then(firebase
            .firestore()
            .collection('behaviors')
            .doc(id)
            .delete()
          )
    
      }

    return { toggleActive, displayTime, toggleOpen, isActive, setIsActive, time, setTime, history, setHistory, date, setDate, isOpen, setIsOpen, totalTime, setTotalTime, deleteBehaviorEvents, deleteEvent, formatTotalTime, formatTime, timePreview, totalSeconds, durations, loading, editEventsActive, setEditEventsActive, deleteBehaviorDD, setDeleteBehaviorDD, editOpen, setEditOpen }
}

