import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    Header,
    TimerButton,
    TimeStamp,
    TimeData,
    Item,
    ItemsContainer,
    Frame,
    MoreInfo,
    ButtonContainer,
    TitleFrame,
    TotalTimeContainer,
    Text
} from './styles/behaviortimer'

export default function BehaviorTimer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

BehaviorTimer.Header = function BehaviorTimerHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

BehaviorTimer.ButtonContainer = function BehaviorTimerButtonContainer({ children, ...restProps }) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

BehaviorTimer.TimerButton = function BehaviorTimerTimerButton({ children, ...restProps }) {
    return <TimerButton {...restProps}>{children}</TimerButton>
}

BehaviorTimer.TimeStamp = function BehaviorTimerTimeStamp({ children, ...restProps }) {
    return <TimeStamp {...restProps}>{children}</TimeStamp>
}

BehaviorTimer.TimeData = function BehaviorTimerTimeData({ children, ...restProps }) {
    return <TimeData {...restProps}>{children}</TimeData>
}

BehaviorTimer.Item = function BehaviorTimerItem({ item, children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

BehaviorTimer.Text = function BehaviorTimerText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

BehaviorTimer.TotalTimeContainer = function BehaviorTimerTotalTimeContainer({ children, ...restProps }) {
    return <TotalTimeContainer {...restProps}>{children}</TotalTimeContainer>
}

BehaviorTimer.TitleFrame = function BehaviorTimerTitleFrame({ children, ...restProps }) {
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

BehaviorTimer.Frame = function BehaviorTimerFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

BehaviorTimer.ItemsContainer = function BehaviorTimerItemsContainer({ children, ...restProps }) {
    return <ItemsContainer {...restProps}>{children}</ItemsContainer>
}

BehaviorTimer.MoreInfo = function BehaviorTimerMoreInfo({ children, ...restProps }) {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <MoreInfo {...restProps}>
            <FontAwesomeIcon
                onClick={handleClick}
                icon={faAngleDown} />
        </MoreInfo>)
}

