import styled, { css } from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";
import colors from "constants/colors";
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.headerBackground};
  margin-bottom: 2em;
  width: 100%;
  /* padding: 0 25px; */
`;

export const BackLink = styled(ReachRouterLink)``;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  /* min-width: 100%; */
  max-width: 800px;
  height: 100px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${colors.lightText};
  letter-spacing: 1px;
  text-align: center;
  /* max-width: 33%; */
  /* min-width: 100%; */
  margin: 0;
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.5rem);

  @media (max-width: 600px) {
    /* max-width: 33%; */
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${colors.lightText};
  font-size: clamp(0.5rem, -0.875rem + 8.333vw, 1rem);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* border: solid 1px magenta; */
`;

export const BackIcon = styled.span`
  font-size: 30px;
  color: ${colors.lightText};
  flex: 1;
  transform: ${({ active }) => (active ? "translateX(-5em)" : "none")};
  opacity: ${({ active }) => (active ? "0" : "1")};
  transition: all 0.2s ease-in-out;
`;

export const AddItemIcon = styled.span`
  z-index: ${({ open }) => (open ? "1000" : "1")};
  width: 1.5em;
  /* padding-left: 1em; */
  background-color: ${colors.lightText};
  height: 0.25em;
  /* margin-right: 1em; */
  position: relative;
  display: inline-block;
  border-radius: 1em;
  transition: all 0.3s ease-in-out;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(0.37turn);
      /* margin-left: 1em; */
    `}
  ${({ iconType }) =>
    iconType === "example" &&
    `
        background-color: black;
        border-radius: 1em;
        width: .75em;
        height: .075em;
        transform: translateY(-.3em);
        margin: 0 .25em;
    `}

    &::after {
    border-radius: 1em;
    position: absolute;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    content: "";
    background-color: ${colors.lightText};
    height: 0.25em;
    width: 1.5em;
    transform: rotate(90deg);
    ${({ iconType }) =>
      iconType === "example" &&
      `
        background-color: black;
        width: .75em;
        height: .075em;
        transform: rotate(90deg) translateY(.35em)
    `}
  }
`;

export const IconSpacer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  /* border: solid 1px magenta; */
`;

export const IconContainer = styled.div`
  padding: 12px 16px;
  /* margin: 0; */
  /* transition: all 0.1s ease-in-out; */

  z-index: ${({ hideWhen }) => (hideWhen ? "0" : "1000")};
`;

export const Hamburger = styled.span`
  z-index: ${({ open }) => (open ? "1000" : "1")};
  background-color: ${colors.lightText};
  height: 0.25em;
  width: 1.5em;
  display: inline-block;
  border-radius: 1em;
  position: relative;
  transition: all 0.3s ease-in-out;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(0.37turn);
    `};

  &::before,
  &::after {
    content: "";
    background-color: ${colors.lightText};
    border-radius: 1em;
    height: 0.25em;
    width: 1.5em;
    position: absolute;
    transition: all 0.3s ease-in-out;
    display: inline-block;
  }

  &:after {
    bottom: 0.5em;
    ${({ open }) =>
      open &&
      css`
        transform: rotate(90deg) translateX(0.5em);
      `}
  }
  &:before {
    top: 0.5em;
    ${({ open }) =>
      open &&
      css`
        opacity: 0;
        width: 0;
        height: 0;
      `}
  }
`;

export const AddItemForm = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8em;
  background-color: ${colors.dropdown};

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  transform: ${({ open }) => (!open ? "translateX(100%)" : "none")};
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
`;

export const MenuDiv = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 6em; */
  background-color: ${colors.dropdown};

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  /* transform: ${({ open }) => (!open ? "translateX(100%)" : "none")}; */
  /* transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1); */
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* transform: translateY(.5vh); */
/* border: solid 1px; */
  margin: 0;
  /* position: fixed; */
  padding: 0;
`;

export const MenuItem = styled.li`
  color: white;
  cursor: pointer;
  font-size: 4rem;
  font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);

  &:hover {
    color: ${colors.pageBackground};
  }
`;

export const MenuLink = styled(ReachRouterLink)`
  text-decoration: none;
  font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
  color: ${colors.lightText};

  &:hover {
    color: ${colors.pageBackground};
  }
`;
