import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'
import colors from "constants/colors";

export const Container = styled.section`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const Error = styled.div`
    color: red;
    text-align: center;
    margin: 1em;
`

export const Base = styled.form`
display: flex;
flex-direction: column;
width: 70%;
max-width: 450px;
`

export const Title = styled.h1`
    text-align: center;
`

export const Link = styled(ReachRouterLink)`

`

export const Text = styled.p`

`

export const TextSmall = styled.p`

`

export const Input = styled.input`
        margin-bottom: 20px;
    padding: 1em 20px;
    background-color: ${colors.cardBackground};
    font-size: 1.4rem;
    border-radius: 15px;
    border: none;
    width: 100%;
    ${({pwError}) => pwError ? 'border: solid 1px red;' : null}
`

export const Submit = styled.button`
    padding: 1em 20px;
    border: none;
    border-radius: 15px;
    background-color: ${colors.headerBackground};
    color: ${colors.lightText};
    font-size: 1.4rem;
    transition: all 150ms cubic-bezier(.5, 0, .5, 1) ;

    &:active {
        background-color: ${colors.pageBackground};
        color: ${colors.darkText}
    }
`

