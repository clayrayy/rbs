import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'
import colors from 'constants/colors'

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`

export const Frame = styled.div`
  display: flex;
  width: 80%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  align-items: center;
  padding: 2em;
  flex-direction: column;
  justify-content: space-between;
`

export const Error = styled.div`
  color: red;
  justify-self: center;
  text-align: center;
  margin: 0em;
  padding: 0.5em;
  border-radius: 15px;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.65);
`

export const Base = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  flex-direction: ${({ formType }) =>
    formType === 'add-client' ? 'column' : 'row'};
  ${({ formType }) =>
    formType === 'add-session' &&
    `
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: .5em;
        grid-template-areas:
            'n n n n n t t t t t'
            '. . s s . . c c . .';
        justify-content: center;
        align-content: center;
    `}

  ${({ formType }) =>
    formType === 'add-client' &&
    `
        align-items: center;
        // border: solid 1px magenta;
    `}

    ${({ formType }) =>
    formType === 'add-duration' &&
    `
        display: flex;
        
        gap: 1em;
        
        margin-top: 2em;
    `}

    ${({ formType }) =>
    formType === 'sign-in' &&
    `
        display: grid;
        justify-content: center;
        grid-template-rows: 1fr 1fr;
        gap: 1em;
        // transform: scale(1.4);
        margin: 3em auto;
    `}

    ${({ expandForSmallScreen }) =>
    expandForSmallScreen &&
    `
        @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1em;
        grid-template-areas:
            'n n'
            't t'
            's c'
    }
    `}

    ${({ formType }) =>
    formType === 'sign-up' &&
    `
    flex-direction: column;
    max-width: 400px;
    `}
`

export const Title = styled.h1`
  text-align: center;
  color: ${colors.lightText};
  font-size: 1.2rem;
  margin-top: 0;

  ${({ formType }) =>
    formType === 'sign-up' &&
    `
    margin-bottom: 2em;
    color: ${colors.darkText}
    `}
`

export const Link = styled(ReachRouterLink)`
  text-decoration: none;
  text-align: center;
  font-size: .85rem;
color: ${colors.accent};
`

export const Text = styled.p`
text-align: center;
margin: 0;
margin-top: 1em;
font-size: .85rem;
`

export const TextSmall = styled.p``

export const Input = styled.input`
  padding: 5px 10px;
  background-color: ${colors.cardBackground};
  font-size: 1rem;
  border-radius: 15px;
  border: none;
  width: 100%;
  transition: all 0.25s ease;

  ${({ formType, gridArea }) =>
    formType === 'add-session' &&
    `
        grid-area: ${gridArea};
        padding: .5em;
    `}
  ${({ formType }) => formType === 'add-client' && ` margin-bottom: 3em`};
  ${({ pwError }) => (pwError ? 'border: solid 1px red;' : null)}

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }

  ${({ formType }) =>
    formType === 'add-client' &&
    `
        padding: .75em;
        width: 70%;
        max-width: 600px;
    `};

  ${({ formType }) =>
    formType === 'sign-up' &&
    `
        margin-bottom: 1em;
        `}
`

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  min-width: 100px;
  text-align: center;
  border-radius: 15px;
  background-color: ${({ buttonType }) =>
    buttonType === 'cancel' ? colors.btnPrimary : colors.btnActive};
  color: ${colors.lightText};
  font-size: 1rem;
  transition: all 150ms cubic-bezier(0.5, 0, 0.5, 1);
  ${({ formType, gridArea }) =>
    formType === 'add-session' &&
    `
        grid-area: ${gridArea};
        padding: .75em .75em;
        // width: 6em;
        // margin-top: .5em;
    `};
  &:active {
    background-color: ${colors.pageBackground};
    color: ${colors.darkText};
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }

  ${({ formType }) =>
    formType === 'add-client' &&
    `
        padding: 1em 1.75em;
    `};

  ${({ buttonType }) =>
    buttonType === 'end-session' &&
    `
    
    `};

  ${({ type }) =>
    type === 'form-submit' &&
    `
    margin-top: 1.5em;
    background-color: #042859;
    `}

  ${({ type }) =>
    type === 'submit' &&
    `
    color: green
    `}
`

export const TitleContainer = styled.div``
