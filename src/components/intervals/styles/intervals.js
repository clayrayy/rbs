import styled, { css } from 'styled-components'
import colors from 'constants/colors'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  background: ${colors.cardBackground};
  color: ${colors.darkText};
  display: flex;
  max-width: 95%;
  width: 800px;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto 1em auto;
  padding: 0.5em;
  align-items: center;
  min-width: 300px;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
`
export const Inner = styled.div`
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
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ bringForward }) => (bringForward ? '10' : '-1')};
`
export const ResultButton = styled.button`
  background-color: ${colors.btnActive};
  color: ${colors.lightText};
  padding: 1em 2.5em;
  border: none;
  transition: all 0.25s ease;
  border-radius: 15px;

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
`

export const SelectorButton = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 50%;
  color: ${colors.lightText};
  justify-content: center;
  transition: all 0.25s ease;
  background-color: ${({ minusActive, plusActive }) => {
    if (minusActive) {
      return `${colors.btnActive}`
    } else if (plusActive) {
      return `${colors.accent}`
    } else return `${colors.btnPrimary}`
  }};

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
  }
`

export const PlusIcon = styled.span`
  position: relative;
  height: 2px;
  max-width: 100%;
  width: 10px;
  border-radius: 1em;
  transition: all 0.25s ease;
  background-color: ${colors.lightText};
  transform: ${({ enlarge }) => (enlarge ? 'scale(1.3)' : 'none')};

  &:before {
    content: '';
    position: absolute;
    background-color: ${colors.lightText};
    border-radius: 1em;
    height: 2px;
    width: 10px;
    max-width: 100%;
    transform: rotate(90deg) translateY(5px);
  }
`

export const MinusIcon = styled.span`
  position: relative;
  height: 2px;
  width: 10px;
  border-radius: 1em;
  background-color: ${colors.lightText};
  transition: all 0.15s ease-in-out;
  transform: ${({ reduce }) => (reduce ? 'scale(.8)' : 'none')};
`

export const Header = styled.h1``

export const Input = styled.input``

export const ResetContainer = styled(motion.div)`
  position: relative;
  margin-top: 0.5em;
`

export const Text = styled.p`
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
    user-select: none;

    &:active {
    }
  }
`

export const TitleFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const MoreInfo = styled.span`
  font-size: 2rem;
  color: ${colors.darkText};
  text-align: right;
  flex: 1;
  z-index: ${({ moveToBack }) => (moveToBack ? '0' : '1')};
  transition: all 0.3s ease-out;
  transform: ${({ open }) => (open ? 'scaleY(-1)' : 'none')};

  &.session {
    text-align: center;
    color: ${colors.lightText};
  }
`

export const Label = styled.p`
  position: absolute;
  bottom: 6.2em;
  left: 1.2em;
  color: grey;
  font-style: italic;
  font-size: 0.75rem;

  @media (max-width: 600px) {
    bottom: 5em;
  }
`

export const ResultsContainer = styled.div`
  height: ${({ open }) => (open ? '100%' : '0')};
  width: 100%;
  overflow: hidden;
`
export const Frame = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  width: 100%;
`
