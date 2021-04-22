import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { 
    Container,
    SelectorButton,
    Header,
    StartButton,
    ButtonContainer,
    Text,
    TitleFrame,
    MoreInfo,
    ResultsContainer,
    StartButtonContainer,
    Label,
    ButtonText,
    PlusIcon,
    MinusIcon,
    Inner,
    Seconds,
    ResetContainer,
    ResultButton,
    Frame
 } from './styles/intervals'

export default function Intervals({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

//Template: 
/*
Intervals. = function Intervals({ children, ...restProps }) {
    return < {...restProps}>{children}</>
}


*/

Intervals.Inner = function IntervalsInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Intervals.Seconds = function IntervalsSeconds({ children, ...restProps }) {
    return <Seconds {...restProps}>{children}</Seconds>
}

Intervals.ResultButton = function IntervalsResultButton({ children, ...restProps }) {
    return <ResultButton {...restProps}>{children}</ResultButton>
}

Intervals.SelectorButton = function IntervalsSelectorButton({ children, ...restProps }) {
    return <SelectorButton {...restProps}>{children}</SelectorButton>
}

Intervals.Header = function IntervalsHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Intervals.Frame = function IntervalsFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Intervals.ResultsContainer = function IntervalsResultsContainer({ children, ...restProps }) {
    return <ResultsContainer {...restProps}>{children}</ResultsContainer>
}

Intervals.StartButton = function IntervalsStartButton({ children, ...restProps }) {
    return <StartButton {...restProps}>{children}</StartButton>
}

Intervals.ButtonContainer = function IntervalsButtonContainer({ children, ...restProps }) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Intervals.Text = function IntervalsText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Intervals.TitleFrame = function IntervalsTitleFrame({ children, ...restProps }) {
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

Intervals.Label = function IntervalsLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}


Intervals.ResetContainer = function IntervalsResetContainer({ children, ...restProps }) {
    return <ResetContainer {...restProps}>{children}</ResetContainer>
}

Intervals.PlusIcon = function IntervalsPlusIcon({ children, ...restProps }) {
    return <PlusIcon {...restProps}>{children}</PlusIcon>
}

Intervals.MinusIcon = function IntervalsMinusIcon({ children, ...restProps }) {
    return <MinusIcon {...restProps}>{children}
    
    </MinusIcon>
}

Intervals.ButtonText = function IntervalsButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>
}

Intervals.StartButtonContainer = function IntervalsStartButtonContainer({ children, ...restProps }) {
    return <StartButtonContainer {...restProps}>{children}</StartButtonContainer>
}

Intervals.MoreInfo = function IntervalsMoreInfo({ children, ...restProps }) {
    return (<MoreInfo {...restProps}>
        <FontAwesomeIcon
            icon={faAngleDown} />
    </MoreInfo>)
}