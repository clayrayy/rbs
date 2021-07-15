import React from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  CenterContainer,
  Text,
} from './styles/card-modal'

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Modal.LeftContainer = function ModalLeftContainer({ children, ...restProps }) {
  return <LeftContainer {...restProps}>{children}</LeftContainer>
}

Modal.CenterContainer = function ModalCenterContainer({
  children,
  ...restProps
}) {
  return <CenterContainer {...restProps}>{children}</CenterContainer>
}

Modal.RightContainer = function ModalRightContainer({
  children,
  ...restProps
}) {
  return <RightContainer {...restProps}>{children}</RightContainer>
}
Modal.Text = function ModalText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
