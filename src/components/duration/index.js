import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Frame,
  Item,
  Header,
  TimeStamp,
  TimeData,
  ItemsContainer,
  TitleFrame,
  TotalTimeContainer,
  Text,
  DeleteBehaviorIcon,
  EditButton,
  Seconds,
  DropdownContainer,
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
  IconPositioner,
} from './styles/duration'

export default function Duration({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Duration.Inner = function DurationInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}
Duration.IconPositioner = function DurationIconPositioner({
  children,
  ...restProps
}) {
  return <IconPositioner {...restProps}>{children}</IconPositioner>
}

Duration.ModalTextContainer = function DurationModalTextContainer({
  children,
  ...restProps
}) {
  return <ModalTextContainer {...restProps}>{children}</ModalTextContainer>
}

Duration.ModalText = function DurationModalText({ children, ...restProps }) {
  return <ModalText {...restProps}>{children}</ModalText>
}

Duration.ModalButton = function DurationModalButton({
  children,
  ...restProps
}) {
  return <ModalButton {...restProps}>{children}</ModalButton>
}
Duration.ModalButtonContainer = function DurationModalButtonContainer({
  children,
  ...restProps
}) {
  return <ModalButtonContainer {...restProps}>{children}</ModalButtonContainer>
}

Duration.Header = function DurationHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Duration.Timestamp = function DurationTimestamp({ children, ...restProps }) {
  return <Timestamp {...restProps}>{children}</Timestamp>
}

Duration.ConfirmDelete = function DurationConfirmDelete({
  children,
  ...restProps
}) {
  return <ConfirmDelete {...restProps}>{children}</ConfirmDelete>
}

Duration.IconContainer = function DurationIconContainer({
  children,
  ...restProps
}) {
  return <IconContainer {...restProps}>{children}</IconContainer>
}

Duration.TimeStamp = function DurationTimeStamp({ children, ...restProps }) {
  return <TimeStamp {...restProps}>{children}</TimeStamp>
}

Duration.TimeData = function DurationTimeData({ children, ...restProps }) {
  return <TimeData {...restProps}>{children}</TimeData>
}

Duration.Item = function DurationItem({ item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Duration.Text = function DurationText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Duration.Seconds = function DurationSeconds({ children, ...restProps }) {
  return <Seconds {...restProps}>{children}</Seconds>
}

Duration.EditButton = function DurationEditButton({ children, ...restProps }) {
  return <EditButton {...restProps}>{children}</EditButton>
}

Duration.TotalTimeContainer = function DurationTotalTimeContainer({
  children,
  ...restProps
}) {
  return <TotalTimeContainer {...restProps}>{children}</TotalTimeContainer>
}

Duration.TitleFrame = function DurationTitleFrame({ children, ...restProps }) {
  return <TitleFrame {...restProps}>{children}</TitleFrame>
}

Duration.Frame = function DurationFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Duration.DeleteBehaviorIcon = function BehaviorDeleteBehaviorIcon({
  children,
  ...restProps
}) {
  return (
    <DeleteBehaviorIcon {...restProps}>
      <FontAwesomeIcon icon={faMinusCircle} />
    </DeleteBehaviorIcon>
  )
}

Duration.ItemsContainer = function DurationItemsContainer({
  children,
  ...restProps
}) {
  return <ItemsContainer {...restProps}>{children}</ItemsContainer>
}

Duration.Dropdown = function DurationDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Duration.DropdownItem = function DurationDropdownItem({
  children,
  ...restProps
}) {
  return <DropdownItem {...restProps}>{children}</DropdownItem>
}

Duration.DropdownContainer = function DurationDropdownContainer({
  children,
  ...restProps
}) {
  return <DropdownContainer {...restProps}>{children}</DropdownContainer>
}
