import React, { useContext, useState } from 'react'
import { useBehaviorTimer } from 'hooks'
import { BehaviorTimer } from '../components'
import { FirebaseContext } from 'context/firebase'

export function BehaviorTimerContainer({ name, openClient, behaviorName, behaviorsList }) {
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
  } = useBehaviorTimer(openClient, behaviorName)


  const { firebase } = useContext(FirebaseContext)


  return (

    <BehaviorTimer>
{/*_______ Behavior Dropdown Menu Start _______*/}
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
            onClick={() => deleteBehaviorEvents(behaviorName[0], behaviorName[1])}
          >
            Delete
          </BehaviorTimer.DropdownItem>
        </BehaviorTimer.Dropdown>
      </BehaviorTimer.DropdownContainer>

{/*_______ Behavior Dropdown Menu End _______*/}

      <BehaviorTimer.Frame>

        <BehaviorTimer.ButtonContainer>
          <BehaviorTimer.TimerButton onClick={() => (toggleActive())} active={isActive}>
            {isActive ? <BehaviorTimer.ButtonText>{displayTime}</BehaviorTimer.ButtonText> : <BehaviorTimer.ButtonText>Start</BehaviorTimer.ButtonText>}
            {isActive && <BehaviorTimer.Seconds />}
          </BehaviorTimer.TimerButton>
        </BehaviorTimer.ButtonContainer>

        <BehaviorTimer.TitleFrame>
          <BehaviorTimer.Header>{behaviorName[0]}</BehaviorTimer.Header>
          {durations.length === 0
            ? <BehaviorTimer.Text>No Records</BehaviorTimer.Text>
            : <BehaviorTimer.Text>{timePreview()}</BehaviorTimer.Text>
          }
        </BehaviorTimer.TitleFrame>

        {durations.length !== 0 ?
          <BehaviorTimer.MoreInfo onClick={() => { toggleOpen(name) }} moveToBack={deleteBehaviorDD} open={isOpen} />
          :
          <BehaviorTimer.MoreInfo />
        }

      </BehaviorTimer.Frame>

      <BehaviorTimer.ItemsContainer  open={isOpen} durations={durations}>

        {durations.sort((a, b) => a.serverTimestamp - b.serverTimestamp).map((item) => {
          return (
            <BehaviorTimer.Item key={Math.floor(Math.random() * 9999999999999 + 1)} item={item}>
              <BehaviorTimer.DeleteBehaviorIcon onClick={() => deleteEvent(item.docId)} active={editEventsActive}></BehaviorTimer.DeleteBehaviorIcon>

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
