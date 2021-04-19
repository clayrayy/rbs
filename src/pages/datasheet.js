import { useGetBehaviorsData } from 'hooks/get-data-hooks/use-get-behaviors-data'
import React from 'react'
import { BehaviorTimerContainer } from '../containers/behaviortimer'
import { FrequencyCounterContainer } from '../containers/frequencycounter'
import { IntervalsContainer } from '../containers/intervals'

export default function DataSheet({ data, openClient }) {
    const { behaviorsList, loading, error, behaviorsIdList } = useGetBehaviorsData(openClient.id)
    
    return (
        <>
            {!loading && behaviorsList.map((behavior => {
                return <BehaviorTimerContainer ids={behaviorsIdList} key={Math.floor(Math.random() * 99999999999 + 1)} openClient={openClient} behaviorName={behavior} />
            }))}
    <IntervalsContainer />
    <IntervalsContainer />
    <IntervalsContainer />
            <FrequencyCounterContainer />
        </>
    )
}
