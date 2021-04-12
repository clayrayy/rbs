import { useGetBehaviorsData } from 'hooks/get-data-hooks/use-get-behaviors-data'
// import useGetDurationEvents from 'hooks/get-data-hooks/use-get-duration-events'
import React, { useState } from 'react'
import { BehaviorTimerContainer } from '../containers/behaviortimer'
import { FrequencyCounterContainer } from '../containers/frequencycounter'

export default function DataSheet({ data, openClient }) {
    const { behaviorsList, loading, error } = useGetBehaviorsData(openClient.id)

    return (
        <>
            {!loading && behaviorsList.map((behavior => {
                return <BehaviorTimerContainer key={behavior.docId} openClient={openClient} behaviorName={behavior} />
            }))}

            <FrequencyCounterContainer />
        </>
    )
}


///make a hook that takes in behavior being passed to behaviortimercontainer and returns data associated with that behavior