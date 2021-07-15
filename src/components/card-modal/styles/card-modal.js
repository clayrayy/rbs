import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2em;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.25s ease;

  ${({ modalType, blackout }) =>
    modalType === 'card-modal' &&
    `
    opacity: ${blackout ? '1' : '0'};
    z-index: ${blackout ? '999' : '-1'};
  `}

  ${({ modalType, bringForward }) => {
    if (modalType === 'add-tracker' && !bringForward) {
      return `
  opacity: 0;
  z-index: -1;
  `
    }
    if (modalType === 'add-tracker' && bringForward) {
      return `
        opacity: 1;
        z-index: 1
      `
    }
  }}


  ${({ containerType }) =>
    containerType === 'add-session-modal' &&
    `
    align-items: center;
    padding: 0;
  `}
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${({ containerType }) => containerType === 'past-sessions'}
`
export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ modalType }) =>
    (modalType === 'delete-duration') | (modalType === 'interval') &&
    `
        border-left: solid 1px white;
        justify-content: space-evenly;
    `}
`
export const Text = styled.p`
  color: white;
  max-width: 80%;
  width: 80%;
  font-size: 0.75rem;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`
