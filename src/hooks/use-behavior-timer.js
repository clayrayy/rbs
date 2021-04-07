
import { useState, useEffect } from 'react'


export default function useBehaviorTimer() {
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0)
    const [history, setHistory] = useState([])
    const [date, setDate] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
    const [clientData, setClientData] = useState({})
    console.log(history)
    /*
    timeStamp: displayTime,
    seconds: time
    */

    /* 
    
    */

    const updateClientData = () => {
        const oldTime = totalTime
        setClientData({

        })
    }

    let displayTime = time < 3600 ? formatTime(time).toString().slice(3) : formatTime(time)

    const timePreview = function formatTotalTimePreview() {
        return (!isOpen ? (history.length === 0
            ? 'No Records'
            : history.length === 1
                ? `1 Record - Total Time: ${formatTotalTime(totalTime)}`
                : history.length > 1
                    ? `${history.length} Records - Total Time: ${formatTotalTime(totalTime)} `
                    : null) : 'History')
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

            setHistory([...history, {
                date: date,
                time: displayTime
            }])
            setTime(0)
        }
    }
console.log(history)
    function toggleOpen() {
        setIsOpen(!isOpen)
    }

    return { toggleActive, displayTime, toggleOpen, isActive, setIsActive, time, setTime, history, setHistory, date, setDate, isOpen, setIsOpen, totalTime, setTotalTime, formatTotalTime, formatTime, timePreview }
}

