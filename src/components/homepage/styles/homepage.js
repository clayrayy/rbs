import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'
import colors from 'constants/colors'

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

`

export const Text = styled.p``

export const Title = styled.h1``

export const ButtonLink = styled(ReachRouterLink)`
  color: ${colors.darkText};
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: ${colors.accent};
  }
`
