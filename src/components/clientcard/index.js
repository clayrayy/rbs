import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { 
    Container,
    Title,
    OpenClientIcon,
    IconContainer,
    TitleContainer,
    Link
 } from './styles/clientcard'
import { motion } from 'framer-motion'

export default function ClientCard({ children, ...restProps }) {
    return (
        <Container as={motion.section} drag animate={{ opacity: 1}} {...restProps}>
            {children}
        </Container>
    )
}

ClientCard.TitleContainer = function ClientCardTitleContainer({ children, ...restProps }) {
    return <TitleContainer {...restProps}>{children}</TitleContainer>
}
ClientCard.Title = function ClientCardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

ClientCard.OpenClientIcon = function ClientCardOpenClientkIcon({ ...restProps }) {
    return <OpenClientIcon {...restProps}><FontAwesomeIcon icon={faAngleRight} /></OpenClientIcon>
}

ClientCard.IconContainer = function ClientCardIconContainer({ children, ...restProps }) {
    return <IconContainer {...restProps}>{children}</IconContainer>
}