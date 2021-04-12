
import { useState, useEffect, useContext } from 'react'
import useGetDurationEvents from 'hooks/get-data-hooks/use-get-duration-events'
import { FirebaseContext } from 'context/firebase'
import { useAuthListener } from 'hooks'


export default function useBehaviorTimer(openClient, behaviorName) {
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0)
    const [history, setHistory] = useState([])
    const [date, setDate] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
    const [clientData, setClientData] = useState({})
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
    console.log(totalSeconds)

    const updateClientData = () => {
        const oldTime = totalTime
        setClientData({

        })
    }

    let displayTime = time < 3600 ? formatTime(time).toString().slice(3) : formatTime(time)

    const timePreview = function formatTotalTimePreview() {
        return (loading ? 'loading' : (!isOpen ? (durations.length === 0
            ? 'No Records'
            : durations.length === 1
                ? `1 Record - Total Time: ${formatTotalTime(totalSeconds)}`
                : durations.length > 1
                    ? `${durations.length} Records - Total Time: ${formatTotalTime(totalSeconds)} `
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
        } else {
            setIsActive(false)
            eventsRef.add({
                clientId: openClient.id,
                createdBy: user.email,
                eventType: 'duration',
                seconds: time,
                behaviorName: behaviorName,
                // timestamp: firebase.firestore.Timestamp.now()
            })
            
            setTime(0)
        }
    }

    function toggleOpen(name) {
        setOpenBehavior(name)
        setIsOpen(!isOpen)
    }

    return { toggleActive, displayTime, toggleOpen, isActive, setIsActive, time, setTime, history, setHistory, date, setDate, isOpen, setIsOpen, totalTime, setTotalTime, formatTotalTime, formatTime, timePreview, totalSeconds, durations, loading }
}

