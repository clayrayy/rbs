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
    const variants = {
        hidden: { opacity: 0, x:0, y:-30 },
        visible: { opacity: 1, x:0, y: 0 },
      }
    return (
        <Container as={motion.section} drag animate='visible' initial='hidden' variants={variants} {...restProps}>
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