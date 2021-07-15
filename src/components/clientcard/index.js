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
  Frame,
  DownArrow,
  SessionButton,
  ButtonContainer,
  ButtonText,
  Text,
} from './styles/clientcard'

export default function ClientCard({ children, ...restProps }) {
  return <Container>{children}</Container>
}

ClientCard.TitleContainer = function ClientCardTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>
}
ClientCard.DownArrow = function ClientDownArrow({ children, ...restProps }) {
  return (
    <DownArrow {...restProps}>
      <FontAwesomeIcon icon={faAngleDown} />
    </DownArrow>
  )
}
ClientCard.Title = function ClientCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

ClientCard.SessionButton = function ClientCardSessionButton({
  children,
  ...restProps
}) {
  return <SessionButton {...restProps}>{children}</SessionButton>
}

ClientCard.ButtonText = function ClientCardButtonText({
  children,
  ...restProps
}) {
  return <ButtonText {...restProps}>{children}</ButtonText>
}

ClientCard.ButtonContainer = function ClientCardButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

ClientCard.OpenClientIcon = function ClientCardOpenClientkIcon({
  ...restProps
}) {
  return (
    <OpenClientIcon {...restProps}>
      <FontAwesomeIcon icon={faAngleRight} />
    </OpenClientIcon>
  )
}

ClientCard.IconContainer = function ClientCardIconContainer({
  children,
  ...restProps
}) {
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
