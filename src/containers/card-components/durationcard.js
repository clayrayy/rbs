import React, { useContext, useEffect, useState } from "react";
import { useDuration } from "hooks";
import { Duration, Card, CardModal } from "components";
import { FirebaseContext } from "context/firebase";
import { useGetSessionsData } from "hooks/get-data-hooks/use-get-sessions";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import {
  deleteDisappear,
  textDisappear,
  deleteEventVariant,
  accordionVariants,
} from "constants/motionVariants";

export function DurationCardContainer({
  name,
  client,
  behaviorName,
  behaviorId,
  isCustomDuration,
  sessionId,
}) {
  const {
    toggleActive,
    displayTime,
    toggleOpen,
    isActive,
    isOpen,
    setIsOpen,
    formatTotalTime,
    timePreview,
    totalSeconds,
    durations,
    deleteBehaviorEvents,
    deleteEvent,
    editEventsActive,
    setEditEventsActive,
    deleteBehaviorDD,
    setDeleteBehaviorDD,
    editOpen,
    setEditOpen,
    loading,
  } = useDuration(client, behaviorName, sessionId, behaviorId);

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [bringUpModal, setBringUpModal] = useState(false);

  // useEffect(() => {
  //   if (durations.length === 0) {
  //     setIsOpen(false)
  //   }
  // }, [editEventsActive, durations.length, setIsOpen])

  // console.log(durations)
  // console.log(new Date().getTime().toString())
  return (
    <Card>
      {/*_______ Confirm Delete Duration Modal Start _______*/}
      <CardModal blackout={showConfirmDeleteModal} bringForward={bringUpModal}>
        {showConfirmDeleteModal && (
          <>
            <CardModal.LeftContainer>
              <CardModal.Text textType="duration">
                Delete duration <strong>"{behaviorName}"</strong>?
              </CardModal.Text>
            </CardModal.LeftContainer>
            <CardModal.RightContainer modalType="delete-duration">
              <Duration.ModalButton
                className="delete"
                onClick={() => deleteBehaviorEvents(behaviorName)}
              >
                Confirm
              </Duration.ModalButton>
              <Duration.ModalButton
                className="cancel"
                onClick={() => {
                  setShowConfirmDeleteModal(false);
                  setDeleteBehaviorDD(false);
                  setBringUpModal(false);
                }}
              >
                Cancel
              </Duration.ModalButton>
            </CardModal.RightContainer>
          </>
        )}
      </CardModal>

      <Card.Top>
        <Card.LeftContainer>
          <Duration.ButtonContainer>
            <Duration.TimerButton
              onClick={() => toggleActive()}
              active={isActive}
            >
              {isActive ? (
                <Duration.ButtonText altColor={isActive}>
                  {displayTime}
                </Duration.ButtonText>
              ) : (
                <Duration.ButtonText>Start</Duration.ButtonText>
              )}
              {isActive && <Duration.Seconds secondHandType="clockwise" />}
            </Duration.TimerButton>
          </Duration.ButtonContainer>
        </Card.LeftContainer>
        <Card.CenterContainer>
          <Duration.Header>{behaviorName}</Duration.Header>
          {durations.length === 0 ? (
            <Duration.Text>No Records</Duration.Text>
          ) : (
            <Duration.Text>{timePreview()}</Duration.Text>
          )}
        </Card.CenterContainer>

        <Card.RightContainer>
          {isCustomDuration && (
            <>
              <Duration.IconContainer
                iconType="delete"
                onClick={() => setDeleteBehaviorDD(!deleteBehaviorDD)}
              >
                <Duration.DropdownIcon open={deleteBehaviorDD} />
              </Duration.IconContainer>
              <Duration.DropdownContainer>
                <Duration.Dropdown
                  visible={deleteBehaviorDD}
                  editOpen={editOpen}
                  altBorder={isOpen}
                >
                  <Duration.DropdownItem
                    hide={durations.length === 0}
                    onClick={() => {
                      setDeleteBehaviorDD(!deleteBehaviorDD);
                      setIsOpen(true);
                      setEditEventsActive(!editEventsActive);
                    }}
                  >
                    {editEventsActive || durations.length === 0 ? null : (
                      <p>Edit Events</p>
                    )}
                  </Duration.DropdownItem>
                  <Duration.DropdownItem
                    onClick={() => {
                      setShowConfirmDeleteModal(true);
                      setDeleteBehaviorDD(false);
                      setBringUpModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Delete Behavior
                  </Duration.DropdownItem>
                </Duration.Dropdown>
              </Duration.DropdownContainer>
            </>
          )}
          <Duration.IconContainer
            iconType="more-info"
            onClick={() => {
              toggleOpen(name);
            }}
            moveToBack={deleteBehaviorDD}
          >
            <Duration.MoreInfo open={isOpen} />
          </Duration.IconContainer>
        </Card.RightContainer>
      </Card.Top>
      <AnimatePresence>
        {isOpen && (
          <Card.Dropdown
            key="durations-events"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            transition={{ duration: 0.35 }}
            as={motion.div}
            open={isOpen}
            durations={durations}
          >
            {!loading &&
              durations
                .sort((a, b) => a.epochDate - b.epochDate)
                .map((item) => {
                  return (
                    // <AnimateSharedLayout key={item.docId}>
                    <AnimatePresence key={item.docId} layout>
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
                              key={`delete-icon${item.docId}`}
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
                            initial={editEventsActive ? "hidden" : "show"}
                            animate="show"
                            variants={deleteEventVariant}
                            // exit='exit'
                            layout
                          >
                            {item.timestamp}
                          </Card.ListText>
                        </Card.LeftContainer>

                        <Card.RightContainer>
                          <Card.ListText
                            key={`event-time${item.docId}`}
                            as={motion.p}
                            animate="show"
                            initial="hidden"
                            exit="exit"
                            layout
                            variants={deleteEventVariant}
                          >
                            {formatTotalTime(item.seconds)}
                          </Card.ListText>
                        </Card.RightContainer>
                      </Card.SessionItem>
                    </AnimatePresence>
                  );
                })}
            <Card.SessionItem>
              <Card.LeftContainer />
              <Card.CenterContainer>
                <Card.ListText>
                  {durations.length === 0
                    ? "No Data"
                    : `${durations.length} ${
                        durations.length > 1 ? "Trials" : "Trial"
                      } - ${formatTotalTime(totalSeconds)}`}
                </Card.ListText>
              </Card.CenterContainer>

              <Card.RightContainer itemType="edit-container">
                {durations.length !== 0 && !isActive && (
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
