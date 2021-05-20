import React, { Fragment } from "react";
import { deleteEventVariant, textDisappear } from "constants/motionVariants";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useIntervalLogic } from "hooks/logic-hooks/use-interval";
import { Intervals, Duration, Card, CardModal } from "../../components";
import { formatIntervalTime } from "utils/formatIntervalTime";

//add interval time preset buttons and make a 'custom time' button that brings up add and subtract time buttons

export function PartialIntervalCardContainer({
  behaviorName,
  client,
  sessionId,
}) {
  const {
    seconds,
    timerActive,
    isOpen,
    setIsOpen,
    lockInIntervalTime,
    addSecondsActive,
    subtractSecondsActive,
    clockSeconds,
    showResultModal,
    bringUpModal,
    editEventsActive,
    setEditEventsActive,
    isActive,
    intervals,
    loading,
    startTimer,
    addTime,
    subtractTime,
    handlePartialIntervalResult,
    resetTimer,
    deleteEvent,
  } = useIntervalLogic(behaviorName, client, sessionId, "partialInterval");

  return (
    <Card>
      <Card.Top>
        <AnimatePresence>
          {showResultModal && bringUpModal && (
            <CardModal
              as={motion.div}
              blackout={showResultModal}
              bringForward={bringUpModal}
              initial="hidden"
              exit="hidden"
              animate="show"
              variants={textDisappear}
            >
              <CardModal.LeftContainer>
                <CardModal.Text>
                  Did the behavior occur one or more time during the interval?
                </CardModal.Text>
              </CardModal.LeftContainer>
              <CardModal.RightContainer modalType="interval">
                <Intervals.ResultButton
                  onClick={() => {
                    handlePartialIntervalResult(true);
                  }}
                >
                  Yes
                </Intervals.ResultButton>
                <Intervals.ResultButton
                  onClick={() => {
                    handlePartialIntervalResult(false);
                  }}
                >
                  No
                </Intervals.ResultButton>
              </CardModal.RightContainer>
            </CardModal>
          )}
        </AnimatePresence>
        <Card.LeftContainer>
          <Intervals.StartButtonContainer>
            <Intervals.StartButton
              disabled={seconds === 0}
              active={timerActive}
              onClick={
                !timerActive
                  ? startTimer
                  : () => {
                      handlePartialIntervalResult(true);
                    }
              }
            >
              {timerActive && <Intervals.Seconds time={clockSeconds} />}
              {!timerActive ? (
                <Intervals.ButtonText>
                  Start
                  <br />
                  {formatIntervalTime(seconds)}
                </Intervals.ButtonText>
              ) : (
                <Intervals.ButtonText>
                  Stop<br/>
                  {formatIntervalTime(seconds)}
                </Intervals.ButtonText>
              )}
            </Intervals.StartButton>
          </Intervals.StartButtonContainer>
        </Card.LeftContainer>
        <Card.CenterContainer layout="position">
          <Duration.Header onClick={() => setIsOpen(!isOpen)}>
            {behaviorName}
          </Duration.Header>
          {!lockInIntervalTime ? (
            <Fragment>
              <Intervals.ButtonContainer>
                <Intervals.SelectorButton
                  minusActive={subtractSecondsActive}
                  onClick={subtractTime}
                  disabled={lockInIntervalTime}
                >
                  <Intervals.MinusIcon reduce={subtractSecondsActive} />
                </Intervals.SelectorButton>

                <Intervals.Text>Seconds</Intervals.Text>

                <Intervals.SelectorButton
                  plusActive={addSecondsActive}
                  onClick={addTime}
                  disabled={lockInIntervalTime}
                >
                  <Intervals.PlusIcon enlarge={addSecondsActive} />
                </Intervals.SelectorButton>
              </Intervals.ButtonContainer>

              <Intervals.ResetContainer layout>
                <AnimatePresence>
                  {!timerActive && seconds !== 0 && (
                    <Intervals.Text
                      as={motion.p}
                      variants={textDisappear}
                      className="reset"
                      initial="hidden"
                      exit="hidden"
                      key="reset-text"
                      animate="show"
                      onClick={resetTimer}
                    >
                      reset
                    </Intervals.Text>
                  )}
                </AnimatePresence>
              </Intervals.ResetContainer>
            </Fragment>
          ) : (
            <AnimatePresence exitBeforeEnter>
              
                <Card.ListText
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={textDisappear}
                  style={{ fontSize: ".85rem" }}
                >
                  Press Start to begin timer.<br />
                  Press Stop if behavior occurs.
                </Card.ListText>
              
              
            </AnimatePresence>
          )}
        </Card.CenterContainer>
        <Card.RightContainer>
          <Intervals.MoreInfo onClick={() => setIsOpen(!isOpen)} />
        </Card.RightContainer>
      </Card.Top>
      <AnimatePresence>
        {isOpen && (
          <Card.Dropdown
            key="sessions"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", y: 0, scale: 1 },
              collapsed: { opacity: 0, height: 0, y: 10, scale: 0.75 },
            }}
            transition={{ duration: 0.25 }}
            as={motion.div}
            open={isOpen}
            intervals={intervals}
          >
            <Card.SessionItem>
              {" "}
              <Card.ColumnsLabels>
                <Card.LeftContainer containerType="interval-dropdown">
                  <Card.ListText>Time</Card.ListText>
                </Card.LeftContainer>
                <Card.RightContainer containerType="interval-dropdown">
                  <Card.ListText>Did behavior occur?</Card.ListText>
                </Card.RightContainer>
              </Card.ColumnsLabels>
            </Card.SessionItem>
            {!loading &&
              intervals
                .sort((a, b) => a.epochDate - b.epochDate)
                .map((item) => {
                  return (
                    // <AnimateSharedLayout key={item.docId}>
                    <AnimatePresence key={`5${item.docId}`}>
                      <Card.SessionItem
                        animate="show"
                        initial="hidden"
                        exit="exit"
                        variants={deleteEventVariant}
                        key={item.docId}
                      >
                        <Card.ColumnsLabels>
                          <Card.LeftContainer
                            itemType="history"
                            containerType="interval-dropdown"
                          >
                            <AnimateSharedLayout>
                              <AnimatePresence>
                                {editEventsActive && (
                                  <Duration.DeleteBehaviorIcon
                                    key={item.docId}
                                    animate="show"
                                    initial="hidden"
                                    exit="exit"
                                    variants={deleteEventVariant}
                                    onClick={() => deleteEvent(item.docId)}
                                    active={editEventsActive}
                                  />
                                )}
                              </AnimatePresence>
                              <Card.ListText
                                as={motion.p}
                                key={`timestamp${item.docId}`}
                                initial="hidden"
                                animate="show"
                                variants={deleteEventVariant}
                                exit="exit"
                                // layout
                              >
                                {item.date.slice(-7)}
                              </Card.ListText>
                            </AnimateSharedLayout>
                          </Card.LeftContainer>
                          {/* <Card.CenterContainer>hi</Card.CenterContainer> */}
                          <Card.RightContainer
                            containerType="interval-dropdown"
                             layout
                          >
                            <Card.ListText
                              key={`event-time${item.docId}`}
                              as={motion.p}
                              animate="show"
                              // initial='hidden'
                              exit="exit"
                              variants={deleteEventVariant}
                            >
                              {item.result ? "Yes" : "No"}
                            </Card.ListText>
                          </Card.RightContainer>
                        </Card.ColumnsLabels>
                      </Card.SessionItem>
                    </AnimatePresence>
                    // </AnimateSharedLayout>
                  );
                })}
            <Card.SessionItem>
              <Card.LeftContainer />
              <Card.CenterContainer>
                <Card.ListText>
                  {intervals.length === 0
                    ? "No Data"
                    : `${intervals.length} ${
                        intervals.length > 1 ? "Trials" : "Trial"
                      } `}
                </Card.ListText>
              </Card.CenterContainer>

              <Card.RightContainer itemType="edit-container">
                {intervals.length !== 0 && !isActive && (
                  <Duration.EditButton
                    active={editEventsActive}
                    onClick={() => setEditEventsActive(!editEventsActive)}
                  >
                    {editEventsActive ? "Done" : "Edit Trials"}
                  </Duration.EditButton>
                )}
              </Card.RightContainer>
            </Card.SessionItem>
          </Card.Dropdown>
        )}
      </AnimatePresence>
    </Card>
  );
}
