import React from 'react'
import { useBehaviorTimer } from 'hooks'
import { BehaviorTimer } from '../components'

export function BehaviorTimerContainer({ name, openClient, behaviorName }) {
  const { toggleActive,
     displayTime,
     toggleOpen,
     isActive,
     history,
     isOpen,
     formatTotalTime,
     timePreview,
     totalSeconds,
     durations,
     formatTime,
     totalTime,
     loading } = useBehaviorTimer(openClient, behaviorName)

  return (
    <BehaviorTimer>
      <BehaviorTimer.Frame>
        <BehaviorTimer.ButtonContainer>
          <BehaviorTimer.TimerButton onClick={toggleActive} active={isActive}>{isActive ? displayTime : 'Start'}</BehaviorTimer.TimerButton>
        </BehaviorTimer.ButtonContainer>
        <BehaviorTimer.TitleFrame>
          <BehaviorTimer.Header>{behaviorName}</BehaviorTimer.Header>
          {durations.length === 0 ? <BehaviorTimer.Text >No Records</BehaviorTimer.Text> :
            <BehaviorTimer.Text>{timePreview()}</BehaviorTimer.Text>}
        </BehaviorTimer.TitleFrame>
        <BehaviorTimer.MoreInfo onClick={() => {
          toggleOpen(name)
          
        }} open={isOpen} />
      </BehaviorTimer.Frame>
      <BehaviorTimer.ItemsContainer open={isOpen}>

        {durations.map((item) => {
          return (
            <BehaviorTimer.Item key={Math.floor(Math.random() * 9999999999999 + 1)} item={item}>
              <BehaviorTimer.TimeStamp>{item.timestamp}</BehaviorTimer.TimeStamp>
              <BehaviorTimer.TimeData>{formatTotalTime(item.seconds)}</BehaviorTimer.TimeData>
            </BehaviorTimer.Item>
          )
        })}
        <BehaviorTimer.TotalTimeContainer>
          <BehaviorTimer.TimeData>
            {durations.length === 0
              ? 'No Data'
              : `Records: ${durations.length} - Total Time: ${formatTotalTime(totalSeconds)}`
            }
          </BehaviorTimer.TimeData>
        </BehaviorTimer.TotalTimeContainer>
      </BehaviorTimer.ItemsContainer>
    </BehaviorTimer>
  )
}
