import React, { useState } from "react";
import { useDuration } from "hooks";
import { Duration, Card, CardModal } from "components";
import { AnimatePresence, motion } from "framer-motion";
import { MotionVariants } from "constants/motionVariants";
import { DeleteIcon, DownArrowIcon } from "components/icons";

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
    loading,
  } = useDuration(client, behaviorName, sessionId, behaviorId);

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [bringUpModal, setBringUpModal] = useState(false);
  const { accordionVariants, deleteEventVariant } = MotionVariants();

  return (
    <Card>
      {/*_______ Confirm Delete Duration Modal Start _______*/}
      <CardModal
        modalType='card-modal'
        blackout={showConfirmDeleteModal}
        bringForward={bringUpModal}
      >
        {showConfirmDeleteModal && (
          <>
            <CardModal.LeftContainer>
              <CardModal.Text textType='duration'>
                Delete duration <strong>"{behaviorName}"</strong>?
              </CardModal.Text>
            </CardModal.LeftContainer>
            <CardModal.RightContainer modalType='delete-duration'>
              <Duration.ModalButton
                className='delete'
                onClick={() => deleteBehaviorEvents(behaviorName)}
              >
                Confirm
              </Duration.ModalButton>
              <Duration.ModalButton
                className='cancel'
                onClick={() => {
                  setShowConfirmDeleteModal(false)
                  setDeleteBehaviorDD(false)
                  setBringUpModal(false)
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
          <Card.ButtonContainer>
            <Card.StartButton onClick={() => toggleActive()} active={isActive}>
              {isActive ? (
                <Card.ButtonText altColor={isActive}>
                  {displayTime}
                </Card.ButtonText>
              ) : (
                <Card.ButtonText>Start</Card.ButtonText>
              )}
              {isActive && <Duration.Seconds secondHandType='clockwise' />}
            </Card.StartButton>
          </Card.ButtonContainer>
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
              <Card.IconContainer
                iconType='delete'
                onClick={() => setDeleteBehaviorDD(!deleteBehaviorDD)}
              >
                <Card.DropdownIcon open={deleteBehaviorDD} />
              </Card.IconContainer>
              <Duration.DropdownContainer>
                <Duration.Dropdown
                  visible={deleteBehaviorDD}
                  editOpen={editOpen}
                  altBorder={isOpen}
                >
                  <Duration.DropdownItem
                    hide={durations.length === 0}
                    onClick={() => {
                      setDeleteBehaviorDD(!deleteBehaviorDD)
                      setIsOpen(true)
                      setEditEventsActive(!editEventsActive)
                    }}
                  >
                    {editEventsActive || durations.length === 0 ? null : (
                      <p>Edit Events</p>
                    )}
                  </Duration.DropdownItem>
                  <Duration.DropdownItem
                    onClick={() => {
                      setShowConfirmDeleteModal(true)
                      setDeleteBehaviorDD(false)
                      setBringUpModal(true)
                      setIsOpen(false)
                    }}
                  >
                    Delete Behavior
                  </Duration.DropdownItem>
                </Duration.Dropdown>
              </Duration.DropdownContainer>
            </>
          )}
          <Card.IconContainer
            iconType='more-info'
            onClick={() => {
              toggleOpen(name)
            }}
            moveToBack={deleteBehaviorDD}
          >
            <DownArrowIcon isOpen={isOpen} />
          </Card.IconContainer>
        </Card.RightContainer>
      </Card.Top>
      <AnimatePresence>
        {isOpen && (
          <Card.Dropdown
            key='durations-events'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={accordionVariants}
            transition={{ duration: 0.35 }}
            open={isOpen}
            durations={durations}
          >
            <Card.SessionItem>
              <Card.ColumnsLabels>
                <Card.LeftContainer containerType='interval-dropdown'>
                  <Card.ListText>
                    <strong>Time</strong>
                  </Card.ListText>
                </Card.LeftContainer>
                <Card.RightContainer>
                  <Card.ListText>
                    <strong>Duration</strong>
                  </Card.ListText>
                </Card.RightContainer>
              </Card.ColumnsLabels>
            </Card.SessionItem>
            {!loading &&
              durations
                .sort((a, b) => a.epochDate - b.epochDate)
                .map((item) => {
                  return (
                    <AnimatePresence key={item.docId} layout>
                      <Card.SessionItem
                        animate='show'
                        initial='hidden'
                        exit='exit'
                        variants={deleteEventVariant}
                        key={item.docId}
                        layout
                      >
                        <Card.LeftContainer containerType='interval-dropdown'>
                          {editEventsActive && (
                            <DeleteIcon
                              key={`delete-icon${item.docId}`}
                              animate='show'
                              initial='hidden'
                              exit='exit'
                              variants={deleteEventVariant}
                              onClick={() => deleteEvent(item.docId)}
                              active={editEventsActive}
                              layout
                            />
                          )}

                          <Card.ListText
                            as={motion.p}
                            key={`timestamp${item.docId}`}
                            initial={editEventsActive ? 'hidden' : 'show'}
                            animate='show'
                            variants={deleteEventVariant}
                            layout
                          >
                            {item.timestamp.slice(-8)}
                          </Card.ListText>
                        </Card.LeftContainer>

                        <Card.RightContainer>
                          <Card.ListText
                            key={`event-time${item.docId}`}
                            as={motion.p}
                            animate='show'
                            initial='hidden'
                            exit='exit'
                            layout
                            variants={deleteEventVariant}
                          >
                            {formatTotalTime(item.seconds)}
                          </Card.ListText>
                        </Card.RightContainer>
                      </Card.SessionItem>
                    </AnimatePresence>
                  )
                })}
            <Card.SessionItem>
              <Card.LeftContainer />
              <Card.CenterContainer>
                <Card.ListText>
                  {durations.length === 0
                    ? 'No Data'
                    : `${durations.length} ${
                        durations.length > 1 ? 'Trials' : 'Trial'
                      } - ${formatTotalTime(totalSeconds)}`}
                </Card.ListText>
              </Card.CenterContainer>

              <Card.RightContainer itemType='edit-container'>
                {durations.length !== 0 && !isActive && (
                  <Duration.EditButton
                    active={editEventsActive}
                    onClick={() => setEditEventsActive(!editEventsActive)}
                  >
                    {editEventsActive ? 'Done' : 'Edit Trials'}
                  </Duration.EditButton>
                )}
              </Card.RightContainer>
            </Card.SessionItem>
          </Card.Dropdown>
        )}
      </AnimatePresence>
    </Card>
  )
}
