import React from "react";
import {
  Container,
  Title,
  BackIcon,
  AddItemIcon,
  Inner,
  IconContainer,
  Hamburger,
  MenuDiv,
  AddItemForm,
  Menu,
  TitleContainer,
  MenuItem,
  MenuLink,
  IconSpacer,
  Subtitle,
} from "./styles/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Header.Subtitle = function HeaderSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Header.TitleContainer = function HeaderTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};

Header.BackIcon = function HeaderBackIcon({
  backType,
  backIcon,
  ...restProps
}) {
  return (
    <BackIcon {...restProps}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </BackIcon>
  );
};

Header.AddItemIcon = function HeaderAddItemIcon({ ...restProps }) {
  return <AddItemIcon {...restProps} />;
};

Header.IconContainer = function HeaderIconContainer({
  children,
  ...restProps
}) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};
Header.IconSpacer = function HeaderIconSpacer({ children, ...restProps }) {
  return <IconSpacer {...restProps}>{children}</IconSpacer>;
};

Header.MenuDiv = function HeaderMenuDiv({ children, ...restProps }) {
  return <MenuDiv {...restProps}>{children}</MenuDiv>;
};

Header.Hamburger = function HeaderHamburger({ children, ...restProps }) {
  return <Hamburger {...restProps} />;
};

Header.AddItemForm = function HeaderAddItemForm({ children, ...restProps }) {
  return <AddItemForm {...restProps}>{children}</AddItemForm>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuItem = function HeaderMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

Header.MenuLink = function HeaderMenuLink({ children, ...restProps }) {
  return <MenuLink {...restProps}>{children}</MenuLink>;
};

// refactor with context i.e. create context and move props from containers/pages to state variables in compound components and pass through with the context on: menu, back icon, add item icon
