import styled from 'styled-components'
import colors from 'constants/colors'

export const Container = styled.div`
  background-color: ${colors.cardBackground};
  color: ${colors.darkText};
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  width: 1000px;
  margin: 0 auto 1em auto;
  padding: 10px 25px;
  border-radius: 15px;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  text-align: center;
`

export const ItemList = styled.div``

export const Item = styled.h2`
  margin-bottom: 1em;
  &:last-of-type {
    margin-bottom: 0;
  }
`
export const Text = styled.p`
  font-size: 0.5rem;
  margin: 0;
`
