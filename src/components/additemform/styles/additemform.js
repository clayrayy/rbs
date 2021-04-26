import styled from 'styled-components'
import colors from "constants/colors";


export const Container = styled.div`
    max-width: 1000px;
    /* width: 90%; */
    margin: 0 auto;
    display: flex;
    align-items: space-between;
    flex-direction: column;
    justify-content: space-between;
    transition: all .25s ease;
    transform: ${({shrink}) => shrink ? 'scale(.5)' : 'none'};
`

export const Error = styled.div`
    color: red;
    text-align: center;
    margin: 1em;
`

export const Base = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
/* padding: 1em; */

`

export const Title = styled.p`
    text-align: center;
    color: ${colors.lightText};
    opacity: ${({shrink}) => shrink ? '0' : '1'};


`


export const Text = styled.p`

`

export const TextSmall = styled.p`

`

export const Input = styled.input`
    /* margin-bottom: 20px; */
    padding: 1em 20px;
    font-size: 1rem;
    border-radius: 15px;
    border: none;
    width: 300px;
    margin-right: 1em;
    justify-self: flex-start;
    /* width: 200px; */
    /* margin-bottom: 2em; */


    @media(max-width: 800px) {
    /* flex-direction: column; */
    /* justify-content: center; */
    /* font-size: 1.2em; */

};
`

export const Submit = styled.button`
    padding: 10px 25px;
    border: none;
    border-radius: 15px;
    background-color: ${colors.headerBackground};
    color: ${colors.lightText};
    font-size: 1rem;
    transition: all 150ms cubic-bezier(.5, 0, .5, 1) ;

    &:active {
        background-color: ${colors.accent};
        /* color: ${colors.darkText} */
    }


    @media(max-width: 800px) {
    /* font-size: 1.2em; */

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
export const TitleContainer = styled.div`

`





