import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {
    Container,
    Title,
    Text,
    LeftContainer,
    CenterContainer,
    RightContainer,
    Top,
    Dropdown
} from './styles/card'

export default function Card({ isVisible, children, ...restProps }) {
    const variants = {
        hidden: { opacity: 0, x:-100 },
        visible: { opacity: 1, x: 0},
        exit: { opacity: 0 }
      }
        
      
    return (
        
    <Container as={motion.div} initial="hidden" variants={variants} animate="visible"  {...restProps}>{children}</Container>
    )
}

Card.Title = function CardContainer({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Card.Top = function CardTop({children, ...restProps}) {
    return <Top {...restProps}>{children}</Top>
}

Card.Dropdown = function CardDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Card.LeftContainer = function CardLeftContainer({children, ...restProps}) {
    return <LeftContainer {...restProps}>{children}</LeftContainer>
}

Card.CenterContainer = function CardCenterContainer({children, ...restProps}) {
    return <CenterContainer {...restProps}>{children}</CenterContainer>
}

Card.RightContainer = function CardRightContainer({children, ...restProps}) {
    return <RightContainer {...restProps}>{children}</RightContainer>
}


// export const Container = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `
// export const Title = styled.h1`

// `

// export const SmallText = styled.p`

// `
// export const LeftContainer = styled.div`

// `
// export const CenterContainer = styled.div`

// `
// export const RightContainer = styled.div`

// `