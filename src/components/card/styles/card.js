import styled from 'styled-components'
import colors from "constants/colors";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    position: relative;
    max-width: 800px;
    flex-direction: column;
    color: ${colors.darkText};
    /* max-width: 95%; */
    /* bordeR: solid; */
    padding: 0 .5em;
    margin: 0 auto 1em auto;
    -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16); 
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16);
    background: ${colors.cardBackground};

    ${({expandForSmallScreen}) => expandForSmallScreen && `
        height: 175px;

        @media (max-width: 700px) {
            height: 250px
        }
        
    `}

`
export const Title = styled.h1`

`


export const Text = styled.p`
    color: white;
    max-width: 80%;
    width: 80%;
    font-size: .75rem;

    @media (min-width: 600px) {
        font-size: 1rem;
    }
`
export const LeftContainer = styled.div`
flex: 1;
/* border: solid 1px magenta; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
export const CenterContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
/* border: solid 1px orange; */
align-items: center;
justify-content: center;

`
export const RightContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
/* border: solid 1px green; */
align-items: flex-end;
`

export const Top = styled.div`
display: flex;
width: 100%;
padding: .5em;
align-items: center;
justify-content: space-between;
/* bordeR: solid 1px pink; */
`
export const Dropdown = styled.div`
width: 100%;
transition: all .25s linear;
overflow: hidden;
height: ${({open}) => open ? '100%' : '0'};
`