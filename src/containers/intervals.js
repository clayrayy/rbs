import React, { useState, useEffect } from 'react'
import { Intervals, BehaviorTimer } from '../components'


//Create Second hand that goes counter clockwise from 12 to 12
//based on the amount of seconds

export function IntervalsContainer() {
    const [seconds, setSeconds] = useState(0)
    const [displayTime, setDisplayTime] = useState(0)
    const [timerActive, setTimerActive] = useState(false)
    const [addSecondsActive, setAddSecondsActive] = useState(false)
    const [subtractSecondsActive, setSubtractSecondsActive] = useState(false)

    function formatTotalTime(t) {
        const h = (Math.floor(t / 3600)).toString().padStart(2, '0')
        t %= 3600
        const m = (Math.floor(t / 60)).toString().padStart(2, '0')
        const s = (t % 60).toString().padStart(2, '0')

        return `${h > 0 ? `${h.padStart()}:${m}:${s}` : `${m}:${s}`}`
    }

    function startTimer() {
        setTimerActive(!timerActive)
    }

    useEffect(() => {
        let timerId = null
        if (timerActive) {
            timerId = setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000)
        }
        if (seconds < 1) {
            setSeconds(0)
            setTimerActive(false)
        }

        return () => clearInterval(timerId)

    }, [timerActive, seconds])

    function addTime() {
        setSeconds(seconds + 15)
        setAddSecondsActive(true)
        setTimeout(() => {
            setAddSecondsActive(false)
        }, 200)
    }
    function subtractTime() {
        setSubtractSecondsActive(true)
        setTimeout(() => {
            setSubtractSecondsActive(false)
        }, 200)
        if (seconds > 0 && seconds - 15 > 0) {
            setSeconds(seconds - 15)
        }
        else {
            setTimerActive(false)
            setSeconds(0)
        }
    }
    return (
        <Intervals>

            <Intervals.StartButtonContainer>
                <Intervals.Label>Interval</Intervals.Label>
                <Intervals.StartButton active={timerActive} onClick={startTimer}>
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
                    <Intervals.SelectorButton onClick={subtractTime}>
                        <Intervals.MinusIcon reduce={subtractSecondsActive} />
                    </Intervals.SelectorButton>
                    <Intervals.Text>Seconds</Intervals.Text>
                    <Intervals.SelectorButton onClick={addTime}>
                        <Intervals.PlusIcon enlarge={addSecondsActive} />
                    </Intervals.SelectorButton>
                </Intervals.ButtonContainer>
            </Intervals.TitleFrame>
            <Intervals.MoreInfo />
        </Intervals>

    )
}