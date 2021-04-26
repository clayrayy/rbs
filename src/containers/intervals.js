import { FirebaseContext } from 'context/firebase'
import { useAuthListener, useGetSessionIntervals } from 'hooks'
import React, { useState, useEffect, useContext } from 'react'
import { Intervals, BehaviorTimer, Card, CardModal } from '../components'


//Create Second hand that goes counter clockwise from 12 to 12
//based on the amount of seconds

//add interval time preset buttons and make a 'custom time' button that brings up add and subtract time buttons

export function IntervalsContainer({ behaviorName, client, sessionId }) {
    const { firebase } = useContext(FirebaseContext)
    const [seconds, setSeconds] = useState(0)
    const [displayTime, setDisplayTime] = useState(0)
    const [timerActive, setTimerActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // const [result, setResult] = useState(false)
    const [addSecondsActive, setAddSecondsActive] = useState(false) //used to animate add button
    const [subtractSecondsActive, setSubtractSecondsActive] = useState(false) //used to animate subtract button
    // const [intervalResult, setIntervalResult] = useState('')
    const [clockSeconds, setClockSeconds] = useState(0)
    const [showResultModal, setShowResultModal] = useState(false)//tells modal component to set opacity from 0 to 1
    const [bringUpModal, setBringUpModal] = useState(false) // tells modal component to increase z-index from -1 to 10
    const { user } = useAuthListener()

    const { intervals, loading } = useGetSessionIntervals(client.docId, sessionId, behaviorName)
    // console.log(intervals)
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
    function handleResult(result) {
        setShowResultModal(false)
        setBringUpModal(false)

        firebase
            .firestore()
            .collection('events')
            .doc()
            .set({
                behaviorName: behaviorName,
                createdBy: user.email,
                sessionId: sessionId,
                clientId: client.docId,
                eventType: 'interval',
                serverTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toLocaleString(),
                epochDate: new Date(),
                result: result

            })


    }

    function resetTimer() {
        setSeconds(0)
    }
    //CHANGE VALUES HERE ***************************
    return (
        <Card>
            <Card.Top>
                <CardModal blackout={showResultModal} bringForward={bringUpModal}>
                    <CardModal.LeftContainer>
                        <Card.Text>
                            Did the behavior occur for the entire interval?
                    </Card.Text>
                    </CardModal.LeftContainer>
                    <CardModal.RightContainer modalType='interval'>
                        <Intervals.ResultButton
                            onClick={() => {
                                handleResult(true)
                            }}>
                            Yes
                    </Intervals.ResultButton>
                        <Intervals.ResultButton
                            onClick={() => {
                                handleResult(false)
                            }}>
                            No
                    </Intervals.ResultButton>
                    </CardModal.RightContainer>

                </CardModal>

                <Card.LeftContainer>
                    <Intervals.StartButtonContainer >
                        <Intervals.StartButton disabled={seconds === 0} active={timerActive} onClick={startTimer}>
                            {timerActive && <Intervals.Seconds time={clockSeconds} />}
                            {!timerActive
                                ? (
                                    <Intervals.ButtonText>
                                        Start
                                        <br />
                                        {formatTotalTime(seconds)}
                                    </Intervals.ButtonText>
                                )
                                : (
                                    <Intervals.ButtonText>
                                        {formatTotalTime(seconds)}
                                    </Intervals.ButtonText>
                                )

                            }

                        </Intervals.StartButton>
                    </Intervals.StartButtonContainer>
                </Card.LeftContainer>
                <Card.CenterContainer>
                    <BehaviorTimer.Header onClick={() => setIsOpen(!isOpen)}>{behaviorName}</BehaviorTimer.Header>
                    <Intervals.ButtonContainer>
                        <Intervals.SelectorButton minusActive={subtractSecondsActive} onClick={subtractTime}>
                            <Intervals.MinusIcon reduce={subtractSecondsActive} />
                        </Intervals.SelectorButton>
                        <Intervals.Text>Seconds</Intervals.Text>
                        <Intervals.SelectorButton plusActive={addSecondsActive} onClick={addTime}>
                            <Intervals.PlusIcon enlarge={addSecondsActive} />
                        </Intervals.SelectorButton>
                    </Intervals.ButtonContainer>
                    <Intervals.ResetContainer>
                        {!timerActive
                            ? (seconds !== 0 &&
                                <Intervals.Text className='reset' onClick={resetTimer}>reset</Intervals.Text>
                            )
                            : <Intervals.Text className='running'>trial running</Intervals.Text>
                        }
                    </Intervals.ResetContainer>
                </Card.CenterContainer>
                <Card.RightContainer>
                    <Intervals.MoreInfo onClick={() => setIsOpen(!isOpen)} />
                </Card.RightContainer>
            </Card.Top>
            <Card.Dropdown open={isOpen}>
                {
                    intervals.map((interval, index) => {
                        return (<>
                            <p>{interval.date}
                                {interval.result ? 'true' : 'false'}</p>
                        </>
                        )
                    })
                }
            </Card.Dropdown>
        </Card>


    )
}