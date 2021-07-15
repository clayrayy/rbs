import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  SelectorButton,
  Header,
  Text,
  TitleFrame,
  MoreInfo,
  ResultsContainer,
  Label,
  PlusIcon,
  MinusIcon,
  Inner,
  ResetContainer,
  ResultButton,
  Frame,
} from './styles/intervals'

export default function Intervals({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Intervals.Inner = function IntervalsInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

Intervals.ResultButton = function IntervalsResultButton({
  children,
  ...restProps
}) {
  return <ResultButton {...restProps}>{children}</ResultButton>
}

Intervals.SelectorButton = function IntervalsSelectorButton({
  children,
  ...restProps
}) {
  return <SelectorButton {...restProps}>{children}</SelectorButton>
}

Intervals.Header = function IntervalsHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Intervals.Frame = function IntervalsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Intervals.ResultsContainer = function IntervalsResultsContainer({
  children,
  ...restProps
}) {
  return <ResultsContainer {...restProps}>{children}</ResultsContainer>
}

Intervals.Text = function IntervalsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Intervals.TitleFrame = function IntervalsTitleFrame({
  children,
  ...restProps
}) {
  return <TitleFrame {...restProps}>{children}</TitleFrame>
}

Intervals.Label = function IntervalsLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}

Intervals.ResetContainer = function IntervalsResetContainer({
  children,
  ...restProps
}) {
  return <ResetContainer {...restProps}>{children}</ResetContainer>
}

Intervals.PlusIcon = function IntervalsPlusIcon({ children, ...restProps }) {
  return <PlusIcon {...restProps}>{children}</PlusIcon>
}

Intervals.MinusIcon = function IntervalsMinusIcon({ children, ...restProps }) {
  return <MinusIcon {...restProps}>{children}</MinusIcon>
}

Intervals.MoreInfo = function IntervalsMoreInfo({ children, ...restProps }) {
  return (
    <MoreInfo {...restProps}>
      <FontAwesomeIcon icon={faAngleDown} />
    </MoreInfo>
  )
}
