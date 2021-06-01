import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Title,
  Text,
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
  IconContainer
} from "./styles/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Card({ children, ...restProps }) {
  // const variants = {
  //     hidden: { opacity: 0, x:-100 },
  //     visible: { opacity: 1, x: 0},
  //     exit: { opacity: 0 },
  //   }

  return <Container {...restProps}>{children}</Container>;
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.IconContainer = function CardIconContainer({ children, ...restProps }) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};

Card.Top = function CardTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Card.Dropdown = function CardDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Card.ButtonText = function CardButtonText({ children, ...restProps }) {
  return <ButtonText {...restProps}>{children}</ButtonText>;
};

Card.ButtonContainer = function CardButtonContainer({ children, ...restProps }) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Card.StartButton = function CardStartButton({ children, ...restProps }) {
  return <StartButton {...restProps}>{children}</StartButton>;
};

Card.DownArrow = function ClientDownArrow({ children, ...restProps }) {
  return (
    <DownArrow {...restProps}>
      
      <FontAwesomeIcon icon={faAngleDown} />
    </DownArrow>
  );
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.IntervalResultItem = function CardIntervalResultItem({
  children,
  ...restProps
}) {
  return <IntervalResultItem {...restProps}>{children}</IntervalResultItem>;
};

Card.IntervalResultContainer = function CardIntervalResultContainer({
  children,
  ...restProps
}) {
  return (
    <IntervalResultContainer {...restProps}>{children}</IntervalResultContainer>
  );
};

Card.LeftContainer = function CardLeftContainer({ children, ...restProps }) {
  return <LeftContainer {...restProps}>{children}</LeftContainer>;
};

Card.CenterContainer = function CardCenterContainer({
  children,
  ...restProps
}) {
  return <CenterContainer {...restProps}>{children}</CenterContainer>;
};

Card.RightContainer = function CardRightContainer({ children, ...restProps }) {
  return <RightContainer {...restProps}>{children}</RightContainer>;
};

Card.ColumnsLabels = function CardColumnsLabels({ children, ...restProps }) {
  return <ColumnsLabels {...restProps}>{children}</ColumnsLabels>;
};

Card.SessionItem = function CardSessionItem({ children, ...restProps }) {
  return <SessionItem {...restProps}>{children}</SessionItem>;
};

Card.ListText = function CardListText({ children, ...restProps }) {
  return <ListText {...restProps}>{children}</ListText>;
};

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
