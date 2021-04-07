import React from 'react'
import { useBehaviorTimer } from 'hooks'
import { BehaviorTimer } from '../components'

export function BehaviorTimerContainer({ name }) {
    const { toggleActive, displayTime, toggleOpen, isActive, history, isOpen, totalTime, formatTotalTime, timePreview } = useBehaviorTimer()
//hello there
    return (
        <BehaviorTimer>
            <BehaviorTimer.Frame>
                <BehaviorTimer.ButtonContainer>
                    <BehaviorTimer.TimerButton onClick={toggleActive} active={isActive}>{isActive ? displayTime : 'Start'}</BehaviorTimer.TimerButton>
                </BehaviorTimer.ButtonContainer>
                <BehaviorTimer.TitleFrame>
                    <BehaviorTimer.Header>{name}</BehaviorTimer.Header>
                    {history.length === 0 ? <BehaviorTimer.Text >No Records</BehaviorTimer.Text> :
                        <BehaviorTimer.Text>{timePreview()}</BehaviorTimer.Text>}
                </BehaviorTimer.TitleFrame>
                <BehaviorTimer.MoreInfo onClick={toggleOpen} open={isOpen} />
            </BehaviorTimer.Frame>
            <BehaviorTimer.ItemsContainer open={isOpen}>
                
                {history.map((item) => {
                    return (
                        <BehaviorTimer.Item key={Math.floor(Math.random() * 99999999999 + 1)} item={item}>
                            <BehaviorTimer.TimeStamp>{item.date}</BehaviorTimer.TimeStamp>
                            <BehaviorTimer.TimeData>{item.time}</BehaviorTimer.TimeData>
                        </BehaviorTimer.Item>
                    )
                })}
                <BehaviorTimer.TotalTimeContainer>
                    <BehaviorTimer.TimeData>
                        {history.length === 0
                            ? 'No Data'
                            : `Records: ${history.length} - Total Time: ${formatTotalTime(totalTime)}`
                        }
                    </BehaviorTimer.TimeData>
                </BehaviorTimer.TotalTimeContainer>
            </BehaviorTimer.ItemsContainer>
        </BehaviorTimer>
    )
}

