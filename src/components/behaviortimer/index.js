import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    Frame,
    Item,
    Header,
    TimerButton,
    TimeStamp,
    TimeData,
    ItemsContainer,
    MoreInfo,
    ButtonContainer,
    TitleFrame,
    TotalTimeContainer,
    Text,
    DeleteBehaviorIcon,
    EditButton,
    Seconds,
    ButtonText,
    DropdownContainer,
    DropdownIcon,
    Dropdown,
    DropdownItem,
    ConfirmDelete,
    Timestamp,
    IconContainer,
    Inner,
    ModalButton,
    ModalButtonContainer,
    ModalText,
    ModalTextContainer,
    IconPositioner
} from './styles/behaviortimer'
import { motion } from 'framer-motion'

export default function BehaviorTimer({ children, ...restProps }) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: -30 },
        visible: { opacity: 1, x: 0, y: 0 },
    }
    return (
        <Container as={motion.div} animate='visible' initial='hidden' variants={variants}  {...restProps}>
            {children}
        </Container>
    )
}

BehaviorTimer.Inner = function BehaviorTimerInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}
BehaviorTimer.IconPositioner = function BehaviorTimerIconPositioner({ children, ...restProps }) {
    return <IconPositioner {...restProps}>{children}</IconPositioner>
}

BehaviorTimer.ModalTextContainer = function BehaviorTimerModalTextContainer({ children, ...restProps }) {
    return <ModalTextContainer {...restProps}>{children}</ModalTextContainer>
}

BehaviorTimer.ModalText = function BehaviorTimerModalText({ children, ...restProps }) {
    return <ModalText {...restProps}>{children}</ModalText>
}

BehaviorTimer.ModalButton = function BehaviorTimerModalButton({ children, ...restProps }) {
    return <ModalButton {...restProps}>{children}</ModalButton>
}
BehaviorTimer.ModalButtonContainer = function BehaviorTimerModalButtonContainer({ children, ...restProps }) {
    return <ModalButtonContainer {...restProps}>{children}</ModalButtonContainer>
}

BehaviorTimer.Header = function BehaviorTimerHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

BehaviorTimer.Timestamp = function BehaviorTimerTimestamp({ children, ...restProps }) {
    return <Timestamp {...restProps}>{children}</Timestamp>
}

BehaviorTimer.ConfirmDelete = function BehaviorTimerConfirmDelete({ children, ...restProps }) {
    return <ConfirmDelete {...restProps}>{children}</ConfirmDelete>
}

BehaviorTimer.ButtonText = function BehaviorTimerButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>
}

BehaviorTimer.ButtonContainer = function BehaviorTimerButtonContainer({ children, ...restProps }) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}
BehaviorTimer.IconContainer = function BehaviorTimerIconContainer({ children, ...restProps }) {
    return <IconContainer {...restProps}>{children}</IconContainer>
}

BehaviorTimer.TimerButton = function BehaviorTimerTimerButton({ children, ...restProps }) {
    return <TimerButton as={motion.button} animate={{ opacity: 1 }}{...restProps}>{children}</TimerButton>
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

BehaviorTimer.Seconds = function BehaviorTimerSeconds({ children, ...restProps }) {
    return <Seconds {...restProps}>{children}</Seconds>
}

BehaviorTimer.DropdownIcon = function BehaviorTimerOptionsDropdown({ children, ...restProps }) {
    return <DropdownIcon {...restProps}>{children}</DropdownIcon>
}

BehaviorTimer.EditButton = function BehaviorTimerEditButton({ children, ...restProps }) {
    return <EditButton {...restProps}>{children}</EditButton>
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

BehaviorTimer.DeleteBehaviorIcon = function BehaviorDeleteBehaviorIcon({ children, ...restProps }) {
    
    return (
    <DeleteBehaviorIcon  {...restProps}>
        <FontAwesomeIcon icon={faMinusCircle} />
    </DeleteBehaviorIcon>
    )
}

BehaviorTimer.ItemsContainer = function BehaviorTimerItemsContainer({ children, ...restProps }) {
    return <ItemsContainer {...restProps}>{children}</ItemsContainer>
}
BehaviorTimer.Dropdown = function BehaviorTimerDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}
BehaviorTimer.DropdownItem = function BehaviorTimerDropdownItem({ children, ...restProps }) {
    return <DropdownItem {...restProps}>{children}</DropdownItem>
}
BehaviorTimer.DropdownContainer = function BehaviorTimerDropdownContainer({ children, ...restProps }) {
    return <DropdownContainer {...restProps}>{children}</DropdownContainer>
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

