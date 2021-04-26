import React, { useContext, useEffect, useState } from 'react'
import { useBehaviorTimer } from 'hooks'
import { BehaviorTimer, Card, CardModal } from 'components'
import { FirebaseContext } from 'context/firebase'
import { useGetSessionsData } from 'hooks/get-data-hooks/use-get-sessions'

export function BehaviorTimerContainer({ name, client, behaviorName, behaviorId, isCustomDuration, sessionId }) {
  const { toggleActive,
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
    setEditOpen
  } = useBehaviorTimer(client, behaviorName, sessionId, behaviorId)

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
  const [bringUpModal, setBringUpModal] = useState(false)

  useEffect(() => {
    if (durations.length === 0) {
      setIsOpen(false)
    }
  }, [editEventsActive])



  return (


    <Card>
      {/*_______ Confirm Delete Duration Modal Start _______*/}
      <CardModal
        blackout={showConfirmDeleteModal}
        bringForward={bringUpModal}
      >
        {showConfirmDeleteModal &&
          <>
            <CardModal.LeftContainer>
              <Card.Text >

                Delete duration <strong>"{behaviorName}"</strong>?
          </Card.Text>
            </CardModal.LeftContainer>
            <CardModal.RightContainer modalType='delete-duration'>
              <BehaviorTimer.ModalButton className='delete' onClick={() => deleteBehaviorEvents(behaviorName)}>Confirm</BehaviorTimer.ModalButton>
              <BehaviorTimer.ModalButton className='cancel' onClick={() => {
                setShowConfirmDeleteModal(false)
                setDeleteBehaviorDD(false)
                setBringUpModal(false)
              }}>Cancel</BehaviorTimer.ModalButton>
            </CardModal.RightContainer>

          </>}
      </CardModal>

      {/*_______ Confirm Delete Duration Modal End _______*/}


      {/*_______ Duration Dropdown Menu Start _______*/}


      {/*_______ Duration Dropdown Menu End _______*/}

      <Card.Top>
        <Card.LeftContainer>
          <BehaviorTimer.ButtonContainer>
            <BehaviorTimer.TimerButton
              onClick={() => (toggleActive())}
              active={isActive}
            >
              {isActive ? (
                <BehaviorTimer.ButtonText>
                  {displayTime}
                </BehaviorTimer.ButtonText>
              ) : (
                <BehaviorTimer.ButtonText>
                  Start
                </BehaviorTimer.ButtonText>
              )
              }
              {isActive && <BehaviorTimer.Seconds secondHandType='clockwise'/>}
            </BehaviorTimer.TimerButton>
          </BehaviorTimer.ButtonContainer>
        </Card.LeftContainer>
        <Card.CenterContainer>

          <BehaviorTimer.Header>{behaviorName}</BehaviorTimer.Header>
          {durations.length === 0
            ? <BehaviorTimer.Text>No Records</BehaviorTimer.Text>
            : <BehaviorTimer.Text>{timePreview()}</BehaviorTimer.Text>
          }


        </Card.CenterContainer>

        <Card.RightContainer>
          {isCustomDuration &&
            <>
              <BehaviorTimer.IconContainer iconType='delete'
                onClick={() => setDeleteBehaviorDD(!deleteBehaviorDD)}
              >

                <BehaviorTimer.DropdownIcon open={deleteBehaviorDD} />
              </BehaviorTimer.IconContainer>
              <BehaviorTimer.DropdownContainer >

                <BehaviorTimer.Dropdown visible={deleteBehaviorDD} editOpen={editOpen} altBorder={isOpen}>
                  <BehaviorTimer.DropdownItem
                    hide={durations.length === 0}
                    onClick={() => {
                      setDeleteBehaviorDD(!deleteBehaviorDD)
                      setIsOpen(true)
                      setEditEventsActive(!editEventsActive)
                    }}>
                    {editEventsActive || durations.length === 0 ? null : <p>Edit Events</p>}
                  </BehaviorTimer.DropdownItem>
                  <BehaviorTimer.DropdownItem
                    onClick={() => {
                      setShowConfirmDeleteModal(true)
                      setDeleteBehaviorDD(false)
                      setBringUpModal(true)
                      setIsOpen(false)
                    }}
                  >
                    Delete Behavior
            </BehaviorTimer.DropdownItem>
                </BehaviorTimer.Dropdown>
              </BehaviorTimer.DropdownContainer>
            </>
          }
          <BehaviorTimer.IconContainer iconType='more-info' onClick={() => { toggleOpen(name) }} moveToBack={deleteBehaviorDD} >
            <BehaviorTimer.MoreInfo open={isOpen} /></BehaviorTimer.IconContainer>
        </Card.RightContainer>


      </Card.Top>

      <Card.Dropdown open={isOpen} durations={durations}>

        {durations.sort((a, b) => a.serverTimestamp - b.serverTimestamp).map((item) => {
          return (
            <BehaviorTimer.Item key={Math.floor(Math.random() * 9999999999999 + 1)} item={item}>
              <BehaviorTimer.DeleteBehaviorIcon onClick={() => deleteEvent(item.docId)} active={editEventsActive} />

              <BehaviorTimer.Timestamp>{item.timestamp}</BehaviorTimer.Timestamp>


              <BehaviorTimer.TimeData>{formatTotalTime(item.seconds)}</BehaviorTimer.TimeData>
            </BehaviorTimer.Item>
          )
        })}

        <BehaviorTimer.TotalTimeContainer>
          <BehaviorTimer.TimeData></BehaviorTimer.TimeData>{/*spacer div*/}
          <BehaviorTimer.TimeData>
            {durations.length === 0
              ? 'No Data'
              : `${durations.length} ${durations.length > 1 ? 'Trial' : 'Trials'} - ${formatTotalTime(totalSeconds)}`
            }
          </BehaviorTimer.TimeData>
          <BehaviorTimer.TimeData>
            {durations.length !== 0 && !isActive && <BehaviorTimer.EditButton active={editEventsActive} onClick={() => setEditEventsActive(!editEventsActive)}>{editEventsActive ? 'Done' : 'Edit Trials'}</BehaviorTimer.EditButton>}
          </BehaviorTimer.TimeData>

        </BehaviorTimer.TotalTimeContainer>
      </Card.Dropdown>
    </Card>
  )
}
