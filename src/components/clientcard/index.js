import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { 
    Container,
    Title,
    OpenClientIcon,
    IconContainer,
    TitleContainer,
    Link,
    SessionsContainer,
    Frame,
    DownArrow,
    SessionButton,
    ButtonContainer,
    ButtonText,
    ButtonSpacer,
    Text,
    Modal
 } from './styles/clientcard'
import { motion } from 'framer-motion'

export default function ClientCard({ children, ...restProps }) {
    // const variants = {
    //     hidden: { opacity: 0, x:0, y:-30 },
    //     visible: { opacity: 1, x:0, y: 0 },
    //   }
    return (
        <Container /*as={motion.section} drag animate='visible' initial='hidden' variants={variants}*/ {...restProps}>
            {children}
        </Container>
    )
}

ClientCard.TitleContainer = function ClientCardTitleContainer({ children, ...restProps }) {
    return <TitleContainer {...restProps}>{children}</TitleContainer>
}
ClientCard.DownArrow = function ClientDownArrow({ children, ...restProps }) {
    return <DownArrow {...restProps}><FontAwesomeIcon icon={faAngleDown} /></DownArrow>
}
ClientCard.Title = function ClientCardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
ClientCard.Modal = function ClientCardModal({ children, ...restProps }) {
    return <Modal {...restProps}>{children}</Modal>
}

ClientCard.SessionButton = function ClientCardSessionButton({ children, ...restProps }) {
    return <SessionButton {...restProps}>{children}</SessionButton>
}
ClientCard.ButtonText = function ClientCardButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>
}

ClientCard.ButtonContainer = function ClientCardButtonContainer({ children, ...restProps }) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}
ClientCard.ButtonSpacer = function ClientCardButtonSpacer({ children, ...restProps }) {
    return <ButtonSpacer {...restProps}>{children}</ButtonSpacer>
}

ClientCard.OpenClientIcon = function ClientCardOpenClientkIcon({ ...restProps }) {
    return <OpenClientIcon {...restProps}><FontAwesomeIcon icon={faAngleRight} /></OpenClientIcon>
}

ClientCard.IconContainer = function ClientCardIconContainer({ children, ...restProps }) {
    return <IconContainer {...restProps}>{children}</IconContainer>
}

ClientCard.Link = function ClientCardLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

ClientCard.Frame = function ClientCardFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}
ClientCard.Text = function ClientCardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

ClientCard.SessionsContainer = function ClientCardSessionsContainer({ children, ...restProps }) {
    return <SessionsContainer {...restProps}>{children}</SessionsContainer>
}