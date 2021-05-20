import styled, { css } from "styled-components";
import colors from "constants/colors";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  background: ${colors.cardBackground};
  color: ${colors.darkText};
  display: flex;
  max-width: 95%;
  width: 800px;
  flex-direction: column;
  /* opacity: 0; */
  /* border-right: solid 3px ${colors.darkText};
    border-top: solid 2px ${colors.darkText}; */
  /* flex-direction:column; */
  justify-content: space-between;
  margin: 0 auto 1em auto;
  padding: 0.5em;
  align-items: center;
  /* border-radius: 15px; */
  min-width: 300px;
  /* padding: 10px 25px 0px 25px; */
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
`;
export const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* transition: all .35s ease-in-out; */
  opacity: ${({ blackout }) => (blackout ? "1" : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border-radius: 15px; */
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ bringForward }) => (bringForward ? "10" : "-1")};
`;
export const ResultButton = styled.button`
  background-color: ${colors.btnActive};
  color: ${colors.lightText};
  padding: 1em 2.5em;
  border: none;
  transition: all 0.25s ease;
  border-radius: 15px;
  /* border: solid .01em white; */

  &:active {
    background-color: ${colors.headerBackground};
  }

  &:focus {
    outline: none;
  }

  &.yes {
  }

  &.no {
  }

  &.submit {
  }
  @media (max-width: 600px) {
    padding: 0.65em 1.4em;
  }
`;

export const SelectorButton = styled.button`
  height: 32px;
  width: 32px;
  /* margin-bottom: 1em; */
  /* max-width: 35px; */
  border: none;
  display: flex;
  align-items: center;
  border-radius: 50%;
  color: ${colors.lightText};
  justify-content: center;
  transition: all 0.25s ease;
  background-color: ${({ minusActive, plusActive }) => {
    if (minusActive) {
      return `${colors.btnActive}`;
    } else if (plusActive) {
      return `${colors.accent}`;
    } else return `${colors.btnPrimary}`;
  }};

  &:active {
    /* transform: scale(.95); */
    /* outline: none; */
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
  }

  /* @media (max-width: 600px) {
        height: 24px;
        width: 24px;
    } */
`;

export const PlusIcon = styled.span`
  position: relative;
  height: 2px;
  max-width: 100%;
  width: 10px;
  border-radius: 1em;
  transition: all 0.25s ease;
  background-color: ${colors.lightText};
  transform: ${({ enlarge }) => (enlarge ? "scale(1.3)" : "none")};

  &:before {
    content: "";
    position: absolute;
    background-color: ${colors.lightText};
    border-radius: 1em;
    height: 2px;
    width: 10px;
    max-width: 100%;
    transform: rotate(90deg) translateY(5px);
  }
`;

export const MinusIcon = styled.span`
  position: relative;
  height: 2px;
  width: 10px;
  border-radius: 1em;
  background-color: ${colors.lightText};
  transition: all 0.15s ease-in-out;
  transform: ${({ reduce }) => (reduce ? "scale(.8)" : "none")};
`;

export const StartButtonContainer = styled.div`
  display: flex;
  position: relative;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: center; */
  flex: 1;
`;

export const ButtonText = styled.p`
  font-family: inherit;
  font-weight: 400;
  z-index: 5;
  color: ${colors.lightText};

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const StartButton = styled.button`
  font-family: inherit;
  border: none;
  color: ${colors.lightText};
  height: 70px;
  width: 70px;
  border-radius: ${({ active }) => (active ? "50%" : "15%")};
  display: flex;
  font-size: 1.2rem;
  font-weight: 200;
  /* justify-self: flex-start; */
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  position: relative;
  background: ${({ disabled, active }) => {
    if (disabled) {
      return "#a0a0a0;";
    }
    if (active) {
      return `${colors.btnActive};`;
    } else return `${colors.startButton}`;
  }};

  -webkit-box-shadow: inset 0px 5px 17px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 5px 17px 0px rgba(0, 0, 0, 0.3);

  transition: all 0.3s ease-in-out;

  &:hover {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    outline: none;
    background: ${colors.accent};
    box-shadow: 26px 23px 37px -18px rgba(0, 0, 0, 0.46) inset;
    -webkit-box-shadow: 26px 23px 37px -18px rgba(0, 0, 0, 0.46) inset;
    -moz-box-shadow: 26px 23px 37px -18px rgba(0, 0, 0, 0.46) inset;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`;
export const Seconds = styled.div`
  display: none;
  background: #eab3bb;
  height: 45%;
  left: 49.5%;
  position: absolute;
  top: 14%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 0;
  animation: rotate ${({ time }) => time + 0.5}s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotateZ(-360deg);
    }
  }
`;

export const Header = styled.h1``;

export const Input = styled.input``;

export const ResetContainer = styled(motion.div)`
  /* border: solid 1px red; */
  /* height: 1em; */
  /* width: 33%; */
  /* display: flex; */
  /* transition: none; */
  /* justify-content: center;
align-items: center; */
  position: relative;
  margin-top: 0.5em;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  /* margin: 0; */
  user-select: none;
  /* margin-bottom: 1em; */
`;

export const Text = styled.p`
  /* font-weight: bold; */
  text-align: center;
  margin: 0 1em;
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }

  &.reset {
    position: absolute;
    color: ${colors.btnActive};
    border: solid 1px red;
    left: -2.6em;
    bottom: -0.75em;
    border-radius: 15px;
    padding: 0 0.3em;
    cursor: pointer;
    /* text-align: center; */
    /* transition: all .2s ease; */
    user-select: none;

    &:active {
      /* transform: scale(.9); */
    }
  }
`;

export const TitleFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* margin: 0; */
`;

export const MoreInfo = styled.span`
  font-size: 2rem;
  color: ${colors.darkText};
  text-align: right;
  flex: 1;
  z-index: ${({ moveToBack }) => (moveToBack ? "0" : "1")};
  transition: all 0.3s ease-out;
  transform: ${({ open }) => (open ? "scaleY(-1)" : "none")};
  /* padding-top: 10px; */
  /* padding-right: 8px; */

  &.session {
    text-align: center;
    color: ${colors.lightText};
  }
`;

export const Label = styled.p`
  position: absolute;
  /* top: 0; */
  bottom: 6.2em;
  left: 1.2em;
  color: grey;
  font-style: italic;
  font-size: 0.75rem;
  /* text-align: center; */

  @media (max-width: 600px) {
    bottom: 5em;
  }
`;

export const ResultsContainer = styled.div`
  /* border: solid 1px magenta; */
  height: ${({ open }) => (open ? "100%" : "0")};
  width: 100%;
  /* transition: all .25s linear; */
  overflow: hidden;
`;
export const Frame = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  width: 100%;
`;
