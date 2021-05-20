import styled /* css */ from "styled-components";
import colors from "constants/colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  background: ${colors.cardBackground};
  color: ${colors.darkText};
  display: flex;
  max-width: 95%;
  width: 800px;
  /* opacity: 0; */
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto 1em auto;
  align-items: center;
  /* border-radius: 15px; */
  min-width: 300px;
  padding: 0.5em;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
`;

export const Inner = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* transition: all .35s ease-in-out; */
  opacity: ${({ blackout }) => (blackout ? "1" : "0")};
  width: 100%;
  height: 100%;
  /* padding: 1em; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  /* border-radius: 15px; */
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ bringForward }) => (bringForward ? "10" : "-1")};
`;
export const ModalButton = styled.button`
  cursor: pointer;
  color: ${colors.lightText};
  border: none;
  padding: 1em;
  height: 3em;
  border-radius: 15px;
  /* margin-left: 1em; */
  &.delete {
    background-color: ${colors.btnActive};
  }

  &.cancel {
    background-color: ${colors.headerBackground};
    margin-left: 3em;
  }

  @media (max-width: 600px) {
    padding: 0.75em;
    font-size: 0.75rem;
  }
`;

export const ModalTextContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
`;

export const ModalText = styled.p`
  text-align: center;
  padding: 1em;
  /* padding-top: 2em; */
  /* border: solid 1px; */
  max-width: 70%;
  height: 100%;
  width: 100%;
  color: ${colors.btnActive};
  flex: 2;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const ModalButtonContainer = styled.div`
  /* padding-top: 1em; */
  /* padding-right: 2em; */
  /* width: 80%; */
  /* border: solid 1px magenta; */
  max-width: 70%;
  text-align: center;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 3em;
  padding: 1em;
  flex: 1;
  border-left: solid 1px white;
`;

export const Header = styled.h1`
  /* font-size: 24px; */
  color: ${colors.darkText};
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  /* max-width: 400px; */
  /* min-width: 30%; */
  font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
  text-align: center;
  letter-spacing: 0.1px;
  justify-self: center;
  align-self: center;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 0.75rem);
    /* max-width: 50%; */
  }
`;

export const Timestamp = styled(motion.p)`
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const Text = styled.h2`
  margin: 0;
  color: ${colors.darkText};
  letter-spacing: 0.1px;
  font-weight: 400;
  font-size: 1rem;
  flex: 1;
  min-height: 40px;
  padding: 0;
  text-align: center;
  z-index: 0;
  /* border: solid 1px; */
  /* max-width: 100px; */
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  /* padding-right: 15px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: 1em; */
  margin: 0;
`;

export const TimerButton = styled.button`
  border: none;
  height: 70px;
  width: 70px;
  background: ${({ active }) =>
    active ? `${colors.btnActive}` : `${colors.startButton}`};
  border-radius: ${({ active }) => (active ? "50%" : "15%")};
  display: flex;
  font-size: 1.2rem;
  font-weight: 200;
  font-family: inherit;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  transition: all 0.3s linear;
  position: relative;

  -webkit-box-shadow: inset 0px 5px 17px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 5px 17px 0px rgba(0, 0, 0, 0.3);

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

export const MoreInfo = styled.div`
  font-size: 32px;
  color: ${colors.darkText};
  text-align: right;
  /* flex: 1; */
  margin: 0;
  padding: 0;
  /* border: 1px solid magenta; */
  z-index: ${({ moveToBack }) => (moveToBack ? "0" : "1")};
  transition: all 0.3s ease-out;
  transform: ${({ open }) => (open ? "scaleY(-1)" : "none")};
  /* padding-top: 10px; */
  /* padding-right: 8px; */
`;

export const ItemsContainer = styled.div`
  flex-direction: column;
  height: ${({ open }) => (open ? "100%" : "0")};
  /* max-height: ${({ open, durations }) =>
    open
      ? `${
          durations.length <= 3 ? durations.length * 180 : durations.length * 80
        }px`
      : "0"}; */
  width: 93%;
  box-sizing: border-box;
  max-width: 800px;
  /* padding-top: 1.5em; */
  /* margin-left: ${({ moveOver }) => (moveOver ? "1em" : "0")}; */
  opacity: ${({ open }) => (open ? "1" : "0")};
  display: flex;
  /* overflow: hidden; */
  /* border: 1px solid magenta; */

  transition: all 0.35s ease-out;
  /* border: solid 1px magenta; */

  /* @keyframes hide-scroll {
    from {
         overflow: scroll; 
    }
    to { overflow: hidden; } 
  } */
`;

export const Seconds = styled.div`
  background: #eab3bb;
  height: 45%;
  left: 49.5%;
  position: absolute;
  top: 14%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 0;
  animation: clockwise 60s infinite linear;

  @keyframes clockwise {
    100% {
      transform: rotateZ(360deg);
    }
  }
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

export const Item = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-bottom: solid 1px;
  /* border-bottom-width: 60%; */
  margin: 0 auto;
  padding: 0;
  /* transition: all .25s ease; */

  &:first-of-type {
    margin-top: 1em;
  }
`;

export const TimeStamp = styled(motion.p)`
  font-weight: bold;
  /* transition: all .25s linear; */
  margin-left: ${({ moveRight }) => (moveRight ? "1em" : "0")};
  /* transition: all .5s ease; */
  /* transform: translateX(10em); */
  /* border: solid 1px black; */
`;

export const TimeData = styled(motion.p)`
  font-weight: bold;
  text-align: center;

  /* justify-self: center; */
  flex: 1;
  /* transition: all .25 ease-in-out; */
  font-size: 1rem;
  align-self: center;

  justify-self: center;

  &:last-of-type {
    text-align: right;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const Frame = styled.div`
  display: flex;
  /* padding: 0; */
  /* margin: 1em; */
  /* margin-bottom: 1em; */
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 800px;
  /* border: solid 1px magenta; */
`;

export const TotalTimeContainer = styled(motion.div)`
  /* text-align: right; */
  display: flex;
  align-items: center;
  /* border: solid 1px magenta; */
  justify-content: space-between;
  padding: 1.5em 1em;

  @media (max-width: 600px) {
    padding: 1em 0;
  }
`;

export const DeleteBehaviorIcon = styled(motion.span)`
  margin: 0 1em;
  color: ${colors.btnActive};
  /* border: solid 1px; */
`;

export const EditButton = styled.button`
  justify-self: flex-end;
  flex: 1;
  width: 100%;
  border: none;
  max-width: 150px;
  border-radius: 30px;
  font-size: 0.66rem;
  padding: 0.7em 1.5em;
  /* margin-bottom: 1em; */
  outline: none;
  color: ${colors.lightText};
  font-weight: bold;
  background-color: ${({ active }) =>
    active ? `${colors.btnActive}` : `${colors.btnPrimary}`};
  transition: all 0.35s ease;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${colors.accent};
    transform: scale(0.97);
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    max-width: 8em;
  }
`;

export const DropdownIcon = styled.span`
  height: 5px;
  /* justify-self: flex-end; */
  position: relative;
  width: ${({ open }) => (open ? "15px" : "5px")};
  display: block;
  background-color: ${({ open }) =>
    open ? `${colors.btnActive}` : `${colors.headerBackground}`};
  border-radius: ${({ open }) => (open ? "10px" : "50%")};
  transform: translateY(-0.55em);
  transition: all 0.25s ease;

  &::before,
  &::after {
    content: "";
    background-color: ${({ open }) =>
      open ? `${colors.btnActive}` : `${colors.headerBackground}`};
    border-radius: ${({ open }) => (open ? "10px" : "50%")};
    height: 5px;
    width: ${({ open }) => (open ? "10px" : "5px")};
    position: absolute;
    /* z-index: 999; */
    transition: all 0.25s ease;
  }

  &::after {
    /* background-color: green; */
    transform: ${({ open }) => (open ? "translateX(4px)" : "translateX(5px)")};
  }

  &::before {
    transform: translateX(-11px);
  }
`;
export const IconContainer = styled.div`
  /* border: solid 1px; */
  align-self: flex-end;
  padding: 1em;
  flex: 1;
  z-index: 150;

  ${({ iconType }) =>
    iconType === "delete" &&
    `
        padding: 1em;
        height: 20px;
    `}
  ${({ iconType }) =>
    iconType === "more-info" &&
    `
        padding: 0 .58em;
    `}
`;
export const IconPositioner = styled.div`
  z-index: 999;
  padding: 0 0.25em;
  margin: 0;
  /* position: absolute; */
  top: -1em;
  /* border: solid 1px green; */
`;

export const Dropdown = styled.div`
  position: absolute;
  right: -0.2em;
  top: -0.6em;
  /* width: 100%; */
  background: rgba(0, 0, 0, 0.85);
  /* overflow: hidden; */
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  /* padding: 1.25em 1em; */
  /* min-width: 90%; */
  /* max-width: 800px; */
  z-index: 2;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.btnActive};
  text-align: center;
  border-radius: 15px;
  /* padding: .2em 5em; */
  /* max-height: ${({ visible }) => (visible ? "3em" : ".5em")}; */
  transform: ${({ visible }) => (visible ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  /* transition: all  .25s ease-in; */
`;

export const DropdownItem = styled.div`
  /* min-width: 200px; */
  cursor: pointer;
  /* border: solid 1px; */
  text-align: center;
  font-size: 0.9rem;
  margin: 0.5em;
  /* display: ${({ hide }) => (!hide ? "none" : "inline-block")}; */
`;

export const DropdownContainer = styled.div`
  align-self: flex-end;
  position: relative;
`;
export const ConfirmDelete = styled.div`
  align-self: flex-end;
  position: relative;
`;
//UNUSED

// export const Inner = styled.div`
//     width: 100%;
//     max-width: 800px;
//     display: flex;
//     border: solid 10px green;
//     align-items: center;
//     flex-direction: column;
//     justify-content: space-between;
// `

// export const TimerDisplay = styled.h2`

// `