import { EditButton, ModalButton } from "components/duration/styles/duration";
import { SessionButton } from "components/clientcard/styles/clientcard";
import Popout from "components/popout";
import { HeaderContainer } from "containers/header";
import { DurationsAccordion } from "pages";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, Prompt, useHistory } from "react-router";
import IntervalsAccordion from "./intervalsaccordion";
import { useInterval } from "hooks/use-interval";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FirebaseContext } from "context/firebase";
import * as ROUTES from "../constants/routes";
import { pageTransitions } from "constants/motionVariants";
// import { RateCardContainer } from "containers/card-components/ratecard";

export default function Session() {
  const location = useLocation();
  const client = location.state.client;
  const currentSessionId = location.state.currentSessionId;
  const sessionName = location.state.sessionName;
  const currentSessionName = location.state.sessionName;
  const [subtitle, setSubtite] = useState("");
  const [popoutOpen, setPopoutOpen] = useState(false);
  const [sessionLength, setSessionLength] = useState(0);
  const [sessionIsRunning, setSessionIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const currentSessionData = {
    sessionId: currentSessionId,
    sessionLength: sessionLength,
  };
  let [count, setCount] = useState(0);
  useInterval(() => {
    if (sessionIsRunning) {
      setSessionLength(sessionLength + 1);
    }
  }, 1000);

  const endSession = () => {
    firebase.firestore().collection("sessions").doc(currentSessionId).update({
      sessionId: currentSessionId, //adds sessionId to session document when session is completed so ID can be pushed via useHistory to session datasheet
      sessionLength: sessionLength, // sets session length upon session completion
    });
  };
  function formatTotalTime(t) {
    const h = Math.floor(t / 3600)
      .toString()
      .padStart(2, "0");
    t %= 3600;
    const m = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const s = (t % 60).toString().padStart(2, "0");

    return `${h > 0 ? `${h.padStart()}:${m}:${s}` : `${m}:${s}`}`;
  }

  return (
    <>
      <HeaderContainer
        title={sessionName}
        sessionActive={true}
        subtitle={
          isPaused
            ? `Paused: ${formatTotalTime(sessionLength)}`
            : `Elapsed Time: ${formatTotalTime(sessionLength)}`
        }
        backIcon={true}
        sessionData={currentSessionData}
        sessionFunctions={{sessionIsRunning, setSessionIsRunning, setIsPaused, isPaused}}
      />

      <motion.div
        variants={pageTransitions}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Prompt
          message={(location, action) => {
            endSession();
            return `Navigating away from this page will end current session - All running trials will be lost`;
          }}
        />
        <IntervalsAccordion
          key="wholeintervalsacc"
          intervalType='wholeInterval'
          isRunning={sessionIsRunning}
          client={client}
          sessionId={currentSessionId}
        />

        <IntervalsAccordion
          key="partialintervalsacc"
          intervalType='partialInterval'
          isRunning={sessionIsRunning}
          client={client}
          sessionId={currentSessionId}
        />
        <DurationsAccordion
          key="durationsacc"
          isRunning={sessionIsRunning}
          client={client}
          sessionId={currentSessionId}
        />
        
        {/* <RateCardContainer /> */}
      </motion.div>
    </>
  );
}
