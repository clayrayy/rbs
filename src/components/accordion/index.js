import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";

import {
  Container,
  ItemsContainer,
  Title,
  DownArrow,
  Text,
  TitleContainer,
  IconContainer,
  Frame,
  DropdownIcon,
  DropdownContainer,
  Dropdown,
  IconPositioner,
} from "./styles/accordion";

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Accordion.ItemsContainer = function AccordionItemsContainer({
  children,
  ...restProps
}) {
  return <ItemsContainer {...restProps}>{children}</ItemsContainer>;
};
Accordion.IconContainer = function AccordionIconContainer({
  children,
  ...restProps
}) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.TitleContainer = function AccordionTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};

Accordion.DownArrow = function AccordionDownArrow({ children, ...restProps }) {
  return <DownArrow {...restProps}>{children}</DownArrow>;
};

Accordion.Text = function AccordionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.DropdownContainer = function AccordionDropdownContainer({
  children,
  ...restProps
}) {
  return <DropdownContainer {...restProps}>{children}</DropdownContainer>;
};
Accordion.DropdownIcon = function AccordionDropdownIcon({
  children,
  ...restProps
}) {
  return <DropdownIcon {...restProps}>{children}</DropdownIcon>;
};
Accordion.Dropdown = function AccordionDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Accordion.IconPositioner = function AccordionIconPositioner({
  children,
  ...restProps
}) {
  return <IconPositioner {...restProps}>{children}</IconPositioner>;
};
