import React from 'react'
import {
    Container,
    LeftContainer,
    RightContainer,
    CenterContainer
    
} from './styles/card-modal'

export default function CardModal({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

CardModal.LeftContainer = function CardModalLeftContainer({children, ...restProps}) {
    return <LeftContainer {...restProps}>{children}</LeftContainer>
}

CardModal.CenterContainer = function CardModalCenterContainer({children, ...restProps}) {
    return <CenterContainer {...restProps}>{children}</CenterContainer>
}

CardModal.RightContainer = function CardModalRightContainer({children, ...restProps}) {
    return <RightContainer {...restProps}>{children}</RightContainer>
}