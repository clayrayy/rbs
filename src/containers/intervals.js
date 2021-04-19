import React, { useState, useEffect } from 'react'
import { Intervals, BehaviorTimer } from '../components'


//Create Second hand that goes counter clockwise from 12 to 12
//based on the amount of seconds

//add interval time preset buttons and make a 'custom time' button that brings up add and subtract time buttons

export function IntervalsContainer() {
    const [seconds, setSeconds] = useState(0)
    const [displayTime, setDisplayTime] = useState(0)
    const [timerActive, setTimerActive] = useState(false)
    const [addSecondsActive, setAddSecondsActive] = useState(false) //used to animate add button
    const [subtractSecondsActive, setSubtractSecondsActive] = useState(false) //used to animate subtract button
    const [intervalResult, setIntervalResult] = useState('')
    const [clockSeconds, setClockSeconds] = useState(0)
    const [showResultModal, setShowResultModal] = useState(false)//tells modal component to set opacity from 0 to 1
    const [bringUpModal, setBringUpModal] = useState(false) // tells modal component to increase z-index from -1 to 10


    // converts seconds to hh:mm:ss format
    function formatTotalTime(t) {
        const h = (Math.floor(t / 3600)).toString().padStart(2, '0')
        t %= 3600
        const m = (Math.floor(t / 60)).toString().padStart(2, '0')
        const s = (t % 60).toString().padStart(2, '0')

        return `${h > 0 ? `${h.padStart()}:${m}:${s}` : `${m}:${s}`}`
    }

    //starts timer
    function startTimer() {
        setClockSeconds(seconds)
        setTimerActive(!timerActive)
    }

    /*  used to decrease seconds state variable by 1 every second 
        / resetting timer and ending interval when seconds is < 1
        to prevent timer from showing negative times  */

    useEffect(() => {
        let timerId = null
        if (timerActive) {
            timerId = setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000)
        }
        if (seconds < 1 && timerActive) {
            setSeconds(0)
            setTimerActive(false)
            setBringUpModal(true)
            
                setShowResultModal(true)
            
            
        }

        return () => clearInterval(timerId)

    }, [timerActive, seconds])

    // add 10 to seconds state variable
    function addTime() {
        setSeconds(seconds + 10)
        setAddSecondsActive(true)
        setTimeout(() => {
            setAddSecondsActive(false)
        }, 200)
    }

    //subtract 10 from seconds state variable
    function subtractTime() {
        setSubtractSecondsActive(true)
        setTimeout(() => {
            setSubtractSecondsActive(false)
        }, 200)
        if (seconds > 0 && seconds - 10 > 0) {
            setSeconds(seconds - 10)
        }
        else {
            setTimerActive(false)
            setSeconds(0)
        }
    }

    //used to handle the results of the interval test
    function handleResult() {
        setShowResultModal(false)
        setBringUpModal(false)
    }

    return (
        <Intervals>
            <Intervals.Inner blackout={showResultModal} bringForward={bringUpModal}><p style={{color: 'white'}}onClick={handleResult}>yes or no goes here (either button fires function to reset timer, submit db post, and close modal</p></Intervals.Inner>
            <Intervals.StartButtonContainer >
                <Intervals.Label>Interval</Intervals.Label>
                <Intervals.StartButton disabled={seconds === 0} active={timerActive} onClick={startTimer}>
                    {timerActive && <Intervals.Seconds time={clockSeconds}/>}
                    <Intervals.ButtonText>
                        Start
                <br />
                        {formatTotalTime(seconds)}
                    </Intervals.ButtonText>
                </Intervals.StartButton>
            </Intervals.StartButtonContainer>
            <Intervals.TitleFrame>
                <BehaviorTimer.Header>Behavior</BehaviorTimer.Header>
                <Intervals.ButtonContainer>
                    <Intervals.SelectorButton minusActive={subtractSecondsActive} onClick={subtractTime}>
                        <Intervals.MinusIcon reduce={subtractSecondsActive} />
                    </Intervals.SelectorButton>
                    <Intervals.Text>Seconds</Intervals.Text>
                    <Intervals.SelectorButton plusActive={addSecondsActive} onClick={addTime}>
                        <Intervals.PlusIcon enlarge={addSecondsActive} />
                    </Intervals.SelectorButton>
                </Intervals.ButtonContainer>
            </Intervals.TitleFrame>
            <Intervals.MoreInfo />
            
        </Intervals>

    )
}