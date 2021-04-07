import React from 'react'
import { BehaviorTimerContainer } from '../containers/behaviortimer'
import { FrequencyCounterContainer } from '../containers/frequencycounter'

export default function DataSheet({data}) {
    const durations = data.behaviors
    // console.log(data)
    console.log(durations)
    
    const behaviorsArray = Object.values(durations)

    console.log(behaviorsArray)
    return (
        <>
        {behaviorsArray.map((behavior, index) => {
            return (
                <BehaviorTimerContainer key={index} name='hello' />
            )
        })}
            
        


            <FrequencyCounterContainer />
        </>
    )
}
