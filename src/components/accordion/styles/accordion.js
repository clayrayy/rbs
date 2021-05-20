import styled from "styled-components";
import colors from "constants/colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background: rgba(0,0,0,.6);
  color: ${colors.darkText};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;

  border-radius: 5px;
  flex-direction: column;
  width: 90%;
  grid-template-rows: 1fr 1fr 2fr;
  margin: 0 auto 1em auto;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ blackout }) => (blackout ? "1" : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: ${({ bringForward }) => (bringForward ? "10" : "-1")};
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: .3em;
  font-weight: 200;
  color: ${colors.lightText};
`;

export const TitleContainer = styled.h1`
  display: flex;
  width: 100%;
  max-width: 90%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: solid 1px ${colors.lightText};
`;

export const DownArrow = styled.span`
  font-size: 2rem;
  color: ${colors.lightText};
  text-align: right;
  flex: 1;
  z-index: ${({ moveToBack }) => (moveToBack ? "0" : "1")};
  transition: all 0.25s ease-out;
  transform: ${({ open }) => (open ? "scaleY(-1)" : "none")};
`;

export const Text = styled.p`
  color: ${colors.lightText};
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const IconContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0;
  flex: 1;
  align-self: flex-start;
`;

export const ItemsContainer = styled(motion.div)`
  width: 100%;
`;

export const DropdownIcon = styled.span`
  z-index: 30;
  height: 5px;
  width: ${({ open }) => (open ? "15px" : "5px")};
  display: inline-block;
  background-color: ${({ open }) =>
    open ? `${colors.btnActive}` : `${colors.lightText}`};
  border-radius: ${({ open }) => (open ? "10px" : "50%")};
  right: 15px;
  top: 5px;
  font-size: 1.5em;
  z-index: 9999;
  transition: all 0.25s ease;

  &::before,
  &::after {
    content: "";
    background-color: ${({ open }) =>
      open ? `${colors.btnActive}` : `${colors.lightText}`};
    line-height: 20px;
    border-radius: ${({ open }) => (open ? "10px" : "50%")};
    height: 5px;
    width: ${({ open }) => (open ? "15px" : "5px")};
    position: absolute;
    transition: all 0.25s ease;
  }

  &::after {
    transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(5px)")};
  }

  &::before {
    transform: translateX(-10px);
  }
`;

export const IconPositioner = styled.div`
  z-index: 99;
  padding: 0 0.25em;
  margin: 0;
  position: absolute;
  top: -1em;
`;

export const DropdownContainer = styled(motion.div)`
  align-self: flex-end;
  position: relative;
  ${({visible}) => visible ? 'opacity: 1;' : 'opacity: 0;'}
`;

export const Dropdown = styled(motion.div)`
  position: absolute;
  right: -0.5em;
  top: -5.5em;
  display: flex;

  justify-content: center;
  width: ${({ expand }) => (expand ? "300px" : "200px")};
  background: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  min-width: 90%;
  max-width: 500px;
  z-index: ${({ visible }) => (visible ? "50" : "-1")};
  font-size: 0.5em;
  color: ${colors.lightText};
  text-align: left;
  border-radius: 15px;
  padding: 1em;
  transform-origin: top;
  margin-bottom: 1em;
`;
