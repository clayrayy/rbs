import React, { useState } from 'react'
import { useBehaviorTimer } from 'hooks'
import { BehaviorTimer } from '../components'
// import useGetDurationEvents from 'hooks/get-data-hooks/use-get-duration-events'

export function BehaviorTimerContainer({ name, openClient, behaviorName }) {
  const { toggleActive, displayTime, toggleOpen, isActive, history, isOpen, formatTime,  totalTime, formatTotalTime, timePreview, totalSeconds, durations, loading } = useBehaviorTimer(openClient, behaviorName)
  // const { totalSeconds, loading } = useGetDurationEvents(openClient.id)
  const [openBehavior, setOpenBehavior] = useState('')
  // const { , loading } = useGetDurationEvents(openClient, behaviorName)



  return ( !loading &&(
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
            <BehaviorTimer.Item key={Math.floor(Math.random() * 99999999999 + 1)} item={item}>
              <BehaviorTimer.TimeStamp>{item.date}</BehaviorTimer.TimeStamp>
              <BehaviorTimer.TimeData>{formatTotalTime(item.seconds)}</BehaviorTimer.TimeData>
            </BehaviorTimer.Item>
          )
        })}
        <BehaviorTimer.TotalTimeContainer>
          <BehaviorTimer.TimeData>
            {history.length === 0
              ? 'No Data'
              : `Records: ${durations.length} - Total Time: ${formatTotalTime(totalSeconds)}`
            }
          </BehaviorTimer.TimeData>
        </BehaviorTimer.TotalTimeContainer>
      </BehaviorTimer.ItemsContainer>
    </BehaviorTimer>
  ))
}
