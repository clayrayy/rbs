import { FirebaseContext } from "context/firebase";
import dayjs from "dayjs";
import { useAuthListener } from "hooks";
import useGetSessionIntervals from "hooks/get-data-hooks/get-session-intervals";
import { useInterval } from "hooks/use-interval";
import { useContext, useState } from "react";

export function useIntervalLogic(behaviorName, client, sessionId, intervalType) {
  const { firebase } = useContext(FirebaseContext);
  const [seconds, setSeconds] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lockInIntervalTime, setLockInIntervalTime] = useState(false);
  // const [result, setResult] = useState(false)
  const [addSecondsActive, setAddSecondsActive] = useState(false); //used to animate add button
  const [subtractSecondsActive, setSubtractSecondsActive] = useState(false); //used to animate subtract button
  // const [intervalResult, setIntervalResult] = useState('')
  const [clockSeconds, setClockSeconds] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false); //tells modal component to set opacity from 0 to 1
  const [bringUpModal, setBringUpModal] = useState(false); // tells modal component to increase z-index from -1 to 10
  const [editEventsActive, setEditEventsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { user } = useAuthListener();

  let eventTime = dayjs().format(`ddd MMM D - h:mm a`);

  const { intervals, loading } = useGetSessionIntervals(
    client.docId,
    sessionId,
    behaviorName,
    intervalType
  );
  // console.log(intervals)
  // converts seconds to hh:mm:ss format

  //starts timer
  function startTimer() {
    setClockSeconds(seconds);
    setTimerActive(!timerActive);
    if (!lockInIntervalTime) {
      setLockInIntervalTime(true);
    }
  }

  useInterval(() => {
    if (timerActive) {
      setSeconds(seconds - 1);
    }
    if (seconds < 1 && timerActive) {
      setSeconds(0);
      setTimerActive(false);
      setBringUpModal(true);
      setShowResultModal(true);
    }
  }, 1000);

  // add 10 to seconds state variable
  function addTime() {
    setSeconds(seconds + 10);
    setInitialSeconds(seconds + 10);
    setAddSecondsActive(true);
    setTimeout(() => {
      setAddSecondsActive(false);
    }, 200);
  }

  //subtract 10 from seconds state variable
  function subtractTime() {
    setSubtractSecondsActive(true);
    setTimeout(() => {
      setSubtractSecondsActive(false);
    }, 200);
    if (seconds > 0 && seconds - 10 > 0) {
      setSeconds(seconds - 10);
      setInitialSeconds(seconds - 10);
    } else {
      setTimerActive(false);
      setSeconds(0);
    }
  }

  //used to handle the results of the interval test
  function handleWholeIntervalResult(result) {
    firebase.firestore().collection("events").doc().set({
      behaviorName: behaviorName,
      createdBy: user.email,
      sessionId: sessionId,
      clientId: client.docId,
      intervalLength: initialSeconds,
      eventType: "wholeInterval",
      serverTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
      date: eventTime,
      epochDate: new Date().getTime(),
      result: result,
    });
    setTimeout(() => {
      setShowResultModal(false);
      setBringUpModal(false);
      setSeconds(initialSeconds);
    }, 150);
  }

  function handlePartialIntervalResult(result) {
    firebase.firestore().collection("events").doc().set({
      behaviorName: behaviorName,
      createdBy: user.email,
      sessionId: sessionId,
      clientId: client.docId,
      intervalLength: initialSeconds,
      eventType: "partialInterval",
      serverTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
      date: eventTime,
      epochDate: new Date().getTime(),
      result: result,
    });
    setTimeout(() => {
      setTimerActive(false)
      setShowResultModal(false);
      setBringUpModal(false);
      setSeconds(initialSeconds);
    }, 150);
  }

  function resetTimer() {
    setSeconds(0);
  }

  const deleteEvent = (id) => {
    firebase.firestore().collection("events").doc(id).delete();
  };

  return {
    seconds,
    setSeconds,
    initialSeconds,
    setInitialSeconds,
    timerActive,
    setTimerActive,
    isOpen,
    setIsOpen,
    lockInIntervalTime,
    setLockInIntervalTime,
    addSecondsActive,
    setAddSecondsActive,
    subtractSecondsActive,
    setSubtractSecondsActive,
    clockSeconds,
    setClockSeconds,
    showResultModal,
    setShowResultModal,
    bringUpModal,
    setBringUpModal,
    editEventsActive,
    setEditEventsActive,
    isActive,
    setIsActive,
    intervals,
    loading,
    startTimer,
    addTime,
    subtractTime,
    handleWholeIntervalResult,
    resetTimer,
    deleteEvent,
    handlePartialIntervalResult
  };
}
