import styled /* css */ from 'styled-components'
import colors from 'constants/colors'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: relative;
  background: ${colors.cardBackground};
  color: ${colors.darkText};
  display: flex;
  max-width: 95%;
  width: 800px;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto 1em auto;
  align-items: center;
  min-width: 300px;
  padding: 0.5em;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
`

export const Inner = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ blackout }) => (blackout ? '1' : '0')};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ bringForward }) => (bringForward ? '10' : '-1')};
`
export const ModalButton = styled.button`
  cursor: pointer;
  color: ${colors.lightText};
  border: none;
  padding: 1em;
  height: 3em;
  border-radius: 15px;
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
`

export const ModalTextContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
`

export const ModalText = styled.p`
  text-align: center;
  padding: 1em;
  max-width: 70%;
  height: 100%;
  width: 100%;
  color: ${colors.btnActive};
  flex: 2;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`

export const ModalButtonContainer = styled.div`
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
`

export const Header = styled.h1`
  color: ${colors.darkText};
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
  text-align: center;
  letter-spacing: 0.1px;
  justify-self: center;
  align-self: center;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 0.75rem);
  }
`

export const Timestamp = styled(motion.p)`
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`

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
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`

export const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  margin: 0;
`

export const ItemsContainer = styled.div`
  flex-direction: column;
  height: ${({ open }) => (open ? '100%' : '0')};
  width: 93%;
  box-sizing: border-box;
  max-width: 800px;
  opacity: ${({ open }) => (open ? '1' : '0')};
  display: flex;
  transition: all 0.35s ease-out;
`

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
`

export const Item = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-bottom: solid 1px;
  margin: 0 auto;
  padding: 0;

  &:first-of-type {
    margin-top: 1em;
  }
`

export const TimeStamp = styled(motion.p)`
  font-weight: bold;
  margin-left: ${({ moveRight }) => (moveRight ? '1em' : '0')};
`

export const TimeData = styled(motion.p)`
  font-weight: bold;
  text-align: center;
  flex: 1;
  font-size: 1rem;
  align-self: center;

  justify-self: center;

  &:last-of-type {
    text-align: right;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 800px;
`

export const TotalTimeContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 1em;

  @media (max-width: 600px) {
    padding: 1em 0;
  }
`

export const DeleteBehaviorIcon = styled(motion.span)`
  margin: 0 1em;
  color: ${colors.btnActive};
`

export const EditButton = styled.button`
  justify-self: flex-end;
  flex: 1;
  width: 100%;
  border: none;
  max-width: 150px;
  border-radius: 30px;
  font-size: 0.66rem;
  padding: 0.7em 1.5em;
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
`

export const IconContainer = styled.div`
  border: solid 1px;
  align-self: flex-end;
  padding: 1em;
  flex: 1;
  z-index: 15;

  ${({ iconType }) =>
    iconType === 'delete' &&
    `
    z-index: 155;
    position: absolute;
    top: -100%;
    // right: 0;
    padding: 1em;
    height: 20px;
    // border: solid;
    `}
  ${({ iconType }) =>
    iconType === 'more-info' &&
    `
      padding: 0 .58em;
    `}

  ${({ iconType }) =>
    iconType === 'add-session' &&
    `
    position: absolute;
    left: 71%;
    bottom: 100%;
      z-index: 160;
     
    `}
`
export const IconPositioner = styled.div`
  z-index: 999;
  padding: 0 0.25em;
  margin: 0;
  top: -1em;
`

export const Dropdown = styled.div`
  position: absolute;
  right: -0.3em;
  top: -1.5em;
  background: rgba(0, 0, 0, 0.85);
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  z-index: 151;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.btnActive};
  text-align: center;
  border-radius: 15px;
  transform: ${({ visible }) => (visible ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  padding: 0.5em;
`

export const DropdownItem = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
  margin: 0.5em;
`

export const DropdownContainer = styled(motion.div)`
  align-self: flex-end;
  position: relative;
`

export const ConfirmDelete = styled.div`
  align-self: flex-end;
  position: relative;
`
