import React from 'react'
import {
  Container,
  Title,
  Text,
  Image,
  LeftContainer,
  CenterContainer,
  RightContainer,
  Top,
  Dropdown,
  DownArrow,
  SessionItem,
  ButtonText,
  ColumnsLabels,
  ListText,
  IntervalResultContainer,
  IntervalResultItem,
  StartButton,
  ButtonContainer,
  IconContainer,
  DropdownIcon,
  Row,
} from './styles/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}

Card.IconContainer = function CardIconContainer({ children, ...restProps }) {
  return <IconContainer {...restProps}>{children}</IconContainer>
}

Card.DropdownIcon = function CardDropdownIcon({ children, ...restProps }) {
  return <DropdownIcon {...restProps}>{children}</DropdownIcon>
}

Card.Top = function CardTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>
}

Card.Dropdown = function CardDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Card.ButtonText = function CardButtonText({ children, ...restProps }) {
  return <ButtonText {...restProps}>{children}</ButtonText>
}

Card.ButtonContainer = function CardButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Card.StartButton = function CardStartButton({ children, ...restProps }) {
  return <StartButton {...restProps}>{children}</StartButton>
}

Card.DownArrow = function ClientDownArrow({ children, ...restProps }) {
  return (
    <DownArrow {...restProps}>
      <FontAwesomeIcon icon={faAngleDown} />
    </DownArrow>
  )
}

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Card.IntervalResultItem = function CardIntervalResultItem({
  children,
  ...restProps
}) {
  return <IntervalResultItem {...restProps}>{children}</IntervalResultItem>
}

Card.IntervalResultContainer = function CardIntervalResultContainer({
  children,
  ...restProps
}) {
  return (
    <IntervalResultContainer {...restProps}>{children}</IntervalResultContainer>
  )
}

Card.LeftContainer = function CardLeftContainer({ children, ...restProps }) {
  return <LeftContainer {...restProps}>{children}</LeftContainer>
}

Card.CenterContainer = function CardCenterContainer({
  children,
  ...restProps
}) {
  return <CenterContainer {...restProps}>{children}</CenterContainer>
}

Card.RightContainer = function CardRightContainer({ children, ...restProps }) {
  return <RightContainer {...restProps}>{children}</RightContainer>
}

Card.ColumnsLabels = function CardColumnsLabels({ children, ...restProps }) {
  return <ColumnsLabels {...restProps}>{children}</ColumnsLabels>
}

Card.SessionItem = function CardSessionItem({ children, ...restProps }) {
  return <SessionItem {...restProps}>{children}</SessionItem>
}

Card.ListText = function CardListText({ children, ...restProps }) {
  return <ListText {...restProps}>{children}</ListText>
}

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
