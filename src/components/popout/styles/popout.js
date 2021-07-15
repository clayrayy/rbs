import styled from 'styled-components'
import colors from 'constants/colors'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 15%;
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => (!open ? 'translateX(-100%)' : 'none')};
  border-radius: 0 0 15px 0;
  z-index: 15;
  background-color: rgba(35, 31, 32, 1);
  transition: transform 0.25s linear;

  @media (min-width: 1400px) {
    transform: none;
    height: 100vh;
    position: fixed;
    top: 0;
  }
`

export const Header = styled.h2`
  color: ${colors.lightText};
  background-color: initial;
  padding-left: 1em;
`

export const List = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
  color: ${colors.lightText};
  margin-bottom: 1em;
  cursor: pointer;
`
export const HeaderContainer = styled.div`
  background: rgba(35, 31, 32, 0.7);
  width: 110%;
  border-radius: 0 15px 15px 0;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1400px) {
    width: 100%;
    padding-right: 1.5em;
  }
`

export const OpenButton = styled.p`
  color: ${colors.lightText};
  transform: rotate(90deg);
  cursor: pointer;

  @media (min-width: 1400px) {
    display: none;
  }
`
