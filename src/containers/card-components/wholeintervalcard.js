import React from "react";
import { deleteEventVariant, textDisappear } from "constants/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import { useIntervalLogic } from "hooks/logic-hooks/use-interval";
import { formatTotalTime } from "utils/formatTime";
import { Intervals, Duration, Card, CardModal } from "../../components";

//add interval time preset buttons and make a 'custom time' button that brings up add and subtract time buttons

export function WholeIntervalCardContainer({
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
    handleResult,
    resetTimer,
    deleteEvent,
  } = useIntervalLogic(behaviorName, client, sessionId);
  console.log(intervals)

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
                  Did the behavior occur for the entire interval?
                </CardModal.Text>
              </CardModal.LeftContainer>
              <CardModal.RightContainer modalType="interval">
                <Intervals.ResultButton
                  onClick={() => {
                    handleResult(true);
                  }}
                >
                  Yes
                </Intervals.ResultButton>
                <Intervals.ResultButton
                  onClick={() => {
                    handleResult(false);
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
              onClick={startTimer}
            >
              {timerActive && <Intervals.Seconds time={clockSeconds} />}
              {!timerActive ? (
                <Intervals.ButtonText>
                  Start
                  <br />
                  {formatTotalTime(seconds)}
                </Intervals.ButtonText>
              ) : (
                <Intervals.ButtonText>
                  {formatTotalTime(seconds)}
                </Intervals.ButtonText>
              )}
            </Intervals.StartButton>
          </Intervals.StartButtonContainer>
        </Card.LeftContainer>
        <Card.CenterContainer>
          <Duration.Header onClick={() => setIsOpen(!isOpen)}>
            {behaviorName}
          </Duration.Header>
          {!lockInIntervalTime && (
            <>
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

              <Intervals.ResetContainer key="reset-text">
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
            {!loading &&
              intervals
                .sort((a, b) => a.epochDate - b.epochDate)
                .map((item) => {
                  return (
                    // <AnimateSharedLayout key={item.docId}>
                    <AnimatePresence>
                      <Card.SessionItem
                        animate="show"
                        initial="hidden"
                        exit="exit"
                        variants={deleteEventVariant}
                        key={item.docId}
                        layout
                      >
                        <Card.LeftContainer itemType="history">
                          {editEventsActive && (
                            <Duration.DeleteBehaviorIcon
                              key={`delete-ichon${item.docId}`}
                              animate="show"
                              initial="hidden"
                              exit="exit"
                              variants={deleteEventVariant}
                              onClick={() => deleteEvent(item.docId)}
                              active={editEventsActive}
                              layout
                            />
                          )}
                          <Card.ListText
                            as={motion.p}
                            key={`timestamp${item.docId}`}
                            initial="hidden"
                            animate="show"
                            variants={deleteEventVariant}
                            exit="exit"
                            layout
                          >
                            {item.date}
                          </Card.ListText>
                        </Card.LeftContainer>

                        <Card.RightContainer layout>
                          <Card.ListText
                            key={`event-time${item.docId}`}
                            as={motion.p}
                            animate="show"
                            // initial='hidden'
                            exit="exit"
                            variants={deleteEventVariant}
                            layout
                          >
                            {item.result ? "True" : "False"}
                          </Card.ListText>
                        </Card.RightContainer>
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
