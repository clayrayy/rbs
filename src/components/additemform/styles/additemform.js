import styled from 'styled-components'
import colors from "constants/colors";


export const Container = styled.div`
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
    color: ${colors.lightText};


    @media(max-width: 800px) {
    margin-top: 0;
    font-size: 1.7em;

}
`


export const Text = styled.p`

`

export const TextSmall = styled.p`

`

export const Input = styled.input`
    margin-bottom: 20px;
    padding: 1em 20px;
    font-size: 1.4rem;
    border-radius: 15px;
    border: none;
    width: 100%;
    margin-bottom: 2em;


    @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    font-size: 1.2em;

}
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
        background-color: ${colors.accent};
        /* color: ${colors.darkText} */
    }


    @media(max-width: 800px) {
    font-size: 1.2em;

    }
`

export const TypeButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-size: 1.4em;
    
    @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    font-size: 1em;

}

`

export const TypeSelector = styled.input`

`

export const TypeSelectorFrame = styled.div`
@media(max-width: 800px) {
    margin-bottom: 2em;
}
`





