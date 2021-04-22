import React, { useContext, useEffect, useState } from 'react'
import { useBehaviorTimer } from 'hooks'
import { BehaviorTimer } from 'components'
import { FirebaseContext } from 'context/firebase'
import { useGetSessionsData } from 'hooks/get-data-hooks/use-get-sessions'

export function BehaviorTimerContainer({ name, client, behaviorName, customItem }) {
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
  } = useBehaviorTimer(client.docId, behaviorName)

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
  const [bringUpModal, setBringUpModal] = useState(false)

  useEffect(() => {
    if(durations.length === 0) {
      setIsOpen(false)
    }
  }, [editEventsActive])

  return (

    <BehaviorTimer>

      {/*_______ Confirm Delete Duration Modal Start _______*/}
      <BehaviorTimer.Inner
        blackout={showConfirmDeleteModal}
        bringForward={bringUpModal}
      >
        <BehaviorTimer.ModalTextContainer>
          <BehaviorTimer.ModalText className='modal-text'>

            You are about to permanently delete behavior <strong>"{behaviorName[0]}"</strong> and all data associated with it.
          </BehaviorTimer.ModalText>
        </BehaviorTimer.ModalTextContainer>
        <BehaviorTimer.ModalButtonContainer>
          <BehaviorTimer.ModalButton className='delete' onClick={() => deleteBehaviorEvents(behaviorName[0], behaviorName[1])}>Confirm</BehaviorTimer.ModalButton>
          <BehaviorTimer.ModalButton className='cancel' onClick={() => {
            setShowConfirmDeleteModal(false)
            setDeleteBehaviorDD(false)
            setBringUpModal(false)
          }}>Cancel</BehaviorTimer.ModalButton>
        </BehaviorTimer.ModalButtonContainer>
      </BehaviorTimer.Inner>
      {/*_______ Confirm Delete Duration Modal End _______*/}


      {/*_______ Duration Dropdown Menu Start _______*/}
      {customItem &&
        <BehaviorTimer.DropdownContainer >
          <BehaviorTimer.IconContainer onClick={() => setDeleteBehaviorDD(!deleteBehaviorDD)}>
            <BehaviorTimer.DropdownIcon open={deleteBehaviorDD} />
          </BehaviorTimer.IconContainer>

          <BehaviorTimer.Dropdown visible={deleteBehaviorDD} editOpen={editOpen} altBorder={isOpen}>
            <BehaviorTimer.DropdownItem
              onClick={() => {
                setDeleteBehaviorDD(!deleteBehaviorDD)
                setIsOpen(true)
                setEditEventsActive(!editEventsActive)
              }}>
              {editEventsActive ? null : 'Edit Events'}
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
      }
      {/*_______ Duration Dropdown Menu End _______*/}

      <BehaviorTimer.Frame>

        <BehaviorTimer.ButtonContainer>
          <BehaviorTimer.TimerButton onClick={() => (toggleActive())} active={isActive}>
            {isActive ? <BehaviorTimer.ButtonText>{displayTime}</BehaviorTimer.ButtonText> : <BehaviorTimer.ButtonText>Start</BehaviorTimer.ButtonText>}
            {isActive && <BehaviorTimer.Seconds />}
          </BehaviorTimer.TimerButton>
        </BehaviorTimer.ButtonContainer>

        <BehaviorTimer.TitleFrame>
          <BehaviorTimer.Header>{behaviorName}</BehaviorTimer.Header>
          {durations.length === 0
            ? <BehaviorTimer.Text>No Records</BehaviorTimer.Text>
            : <BehaviorTimer.Text>{timePreview()}</BehaviorTimer.Text>
          }
        </BehaviorTimer.TitleFrame>

        
          <BehaviorTimer.MoreInfo onClick={() => { toggleOpen(name) }} moveToBack={deleteBehaviorDD} open={isOpen} />
          
        

      </BehaviorTimer.Frame>

      <BehaviorTimer.ItemsContainer open={isOpen} durations={durations}>

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
          <BehaviorTimer.TimeData>{/*spacer div*/}</BehaviorTimer.TimeData>
          <BehaviorTimer.TimeData>
            {durations.length === 0
              ? 'No Data'
              : `${durations.length} Event  ${formatTotalTime(totalSeconds)}`
            }
          </BehaviorTimer.TimeData>
          <BehaviorTimer.TimeData>
            {durations.length !== 0 && !isActive && <BehaviorTimer.EditButton active={editEventsActive} onClick={() => setEditEventsActive(!editEventsActive)}>{editEventsActive ? 'Done' : 'Edit Events'}</BehaviorTimer.EditButton>}
          </BehaviorTimer.TimeData>

        </BehaviorTimer.TotalTimeContainer>
      </BehaviorTimer.ItemsContainer>
    </BehaviorTimer>
  )
}
