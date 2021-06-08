import React, { Fragment } from "react";
import { MotionVariants } from "constants/motionVariants";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useIntervalLogic } from "hooks/logic-hooks/use-interval";
import { Intervals, Duration, Card, CardModal } from "../../components";
import { formatIntervalTime } from "utils/formatIntervalTime";
import { DeleteIcon, DownArrowIcon } from "components/icons";

//add interval time preset buttons and make a 'custom time' button that brings up add and subtract time buttons

export function IntervalCardContainer({
  behaviorName,
  client,
  sessionId,
  intervalType,
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
    handleWholeIntervalResult,
    handlePartialIntervalResult,
    resetTimer,
    deleteEvent,
  } = useIntervalLogic(behaviorName, client, sessionId, intervalType);
  const { accordionVariants, textDisappear, deleteEventVariant, list } =
    MotionVariants();

  return (
    <Card>
      <Card.Top>
        <AnimatePresence>
          {/* ----Interval Result Modal---- */}
          {showResultModal && bringUpModal && (
            <CardModal
              modalType="card-modal"
              blackout={showResultModal}
              bringForward={bringUpModal}
              initial="hidden"
              exit="hidden"
              animate="show"
              variants={textDisappear}
            >
              <CardModal.LeftContainer>
                <CardModal.Text>
                  {`Did the behavior occur ${
                    intervalType === "wholeInterval"
                      ? "for the entire interval"
                      : "one or more time during the interval"
                  }?`}
                </CardModal.Text>
              </CardModal.LeftContainer>
              <CardModal.RightContainer modalType="interval">
                <Intervals.ResultButton
                  onClick={() => {
                    intervalType === "wholeInterval"
                      ? handleWholeIntervalResult(true)
                      : handlePartialIntervalResult(true);
                  }}
                >
                  Yes
                </Intervals.ResultButton>
                <Intervals.ResultButton
                  onClick={() => {
                    intervalType === "wholeInterval"
                      ? handleWholeIntervalResult(false)
                      : handlePartialIntervalResult(false);
                  }}
                >
                  No
                </Intervals.ResultButton>
              </CardModal.RightContainer>
            </CardModal>
          )}
        </AnimatePresence>
        <Card.LeftContainer>
          {/*-Conditionally rendered start button based on interval type-*/}

          {intervalType === "wholeInterval" ? (
            <Card.ButtonContainer>
              <Card.StartButton
                disabled={seconds === 0}
                active={timerActive}
                onClick={startTimer}
              >
                <AnimatePresence exitBeforeEnter>
                  {!timerActive ? (
                    <Card.ButtonText
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      Start
                      <br />
                      {formatIntervalTime(seconds)}
                    </Card.ButtonText>
                  ) : (
                    <Card.ButtonText
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      {formatIntervalTime(seconds)}
                    </Card.ButtonText>
                  )}
                </AnimatePresence>
              </Card.StartButton>
            </Card.ButtonContainer>
          ) : (
            <Card.ButtonContainer>
              <Card.StartButton
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
                {!timerActive ? (
                  <Card.ButtonText>
                    Start
                    <br />
                    {formatIntervalTime(seconds)}
                  </Card.ButtonText>
                ) : (
                  <Card.ButtonText>
                    Stop
                    <br />
                    {formatIntervalTime(seconds)}
                  </Card.ButtonText>
                )}
              </Card.StartButton>
            </Card.ButtonContainer>
          )}
        </Card.LeftContainer>

        {/* ----Interval Title / Time Add Buttons / Reset Button ---- */}

        <Card.CenterContainer layout="position">
          <Duration.Header onClick={() => setIsOpen(!isOpen)}>
            {behaviorName}
          </Duration.Header>
          {!lockInIntervalTime && (
            <>
              <Card.ButtonContainer>
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
              </Card.ButtonContainer>

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
            </>
          )}
          <AnimatePresence exitBeforeEnter>
            {intervalType === "partialInterval" && lockInIntervalTime && (
              <Card.ListText
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={textDisappear}
                style={{ fontSize: ".85rem" }}
              >
                Press Start to begin timer.
                <br />
                Press Stop if behavior occurs.
              </Card.ListText>
            )}
          </AnimatePresence>
        </Card.CenterContainer>

        {/* ----Results Dropdown Arrow---- */}

        <Card.RightContainer>
          <Card.IconContainer>
            <DownArrowIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </Card.IconContainer>
        </Card.RightContainer>
      </Card.Top>

      {/* ----Interval Results Dropdown---- */}

      <AnimatePresence>
        {isOpen && (
          <Card.Dropdown
            key="sessions"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            open={isOpen}
            intervals={intervals}
          >
            {/* <Card.SessionItem>
              {" "}
              <Card.ColumnsLabels>
                <Card.LeftContainer containerType="interval-dropdown">
                  <Card.ListText>Time</Card.ListText>
                </Card.LeftContainer>
                <Card.RightContainer containerType="interval-dropdown">
                  <Card.ListText>Did behavior occur?</Card.ListText>
                </Card.RightContainer>
              </Card.ColumnsLabels>
            </Card.SessionItem> */}
            <Card.SessionItem>
              <Card.ColumnsLabels>
                <Card.LeftContainer containerType="interval-dropdown">
                  <Card.ListText>
                    <strong>Time</strong>
                  </Card.ListText>
                </Card.LeftContainer>
                <Card.RightContainer>
                  <Card.ListText>
                    <strong>Result</strong>
                  </Card.ListText>
                </Card.RightContainer>
              </Card.ColumnsLabels>
            </Card.SessionItem>
            {!loading &&
              intervals
                .sort((a, b) => a.epochDate - b.epochDate)
                .map((item) => {
                  return (
                    // <AnimateSharedLayout key={item.docId}>
                    <AnimatePresence key={`${item.docId}`}>
                      <Card.SessionItem
                        animate="show"
                        initial="hidden"
                        exit="hidden"
                        variants={list}
                        key={item.docId}
                        layout
                      >
                        <Card.ColumnsLabels>
                          <Card.LeftContainer
                            containerType="interval-dropdown"
                            // style={{ border: "solid 1px magenta" }}
                          >
                            <AnimateSharedLayout>
                              <AnimatePresence exitBeforeEnter>
                                {editEventsActive && (
                                  <DeleteIcon
                                    key={item.docId}
                                    animate="show"
                                    initial="hidden"
                                    exit="exit"
                                    variants={deleteEventVariant}
                                    onClick={() => deleteEvent(item.docId)}
                                    active={editEventsActive}
                                    layoutId="interval-history-item"
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
                                layout
                              >
                                {item.date.slice(-8)}
                              </Card.ListText>
                            </AnimateSharedLayout>
                          </Card.LeftContainer>
                          <Card.RightContainer
                            containerType="interval-dropdown"
                            layout
                          >
                            <Card.ListText
                              key={`event-time${item.docId}`}
                              as={motion.p}
                              animate="show"
                              initial="hidden"
                              exit="exit"
                              variants={deleteEventVariant}
                              layout
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
