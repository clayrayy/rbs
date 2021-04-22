import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'
import colors from "constants/colors";
import motion from 'framer-motion'

export const Container = styled.section`

    background: ${colors.cardBackground};
    color: ${colors.darkText};
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    /* height: 150px; */
    flex-direction: column;
    width: 800px;
    /* opacity: .1; */
    /* height: ${({open}) => open ? '15em' : '5em'}; */
    margin: 0 auto 1em auto;
    padding: 1em;
    transition: all .25s linear;
    border-radius: 15px;
    /* border: solid 1px magenta; */
    -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16); 
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16);
`
export const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .35s ease-in-out;
    opacity: ${({blackout}) => blackout ? '1' : '0'};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 15px;
    background-color: rgba(0,0,0,.9);
    /* border: solid 1px green; */
    z-index: ${({bringForward}) => bringForward ? '10' : '-1'};
    
`

export const TitleContainer = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    flex-direction: row;
    /* border: solid 1px magenta; */
    
    
`

export const Title = styled.h1`
    margin: 0;
    padding: 0;
    /* font-size: 24px; */
    color: ${colors.darkText};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    /* max-width: 400px; */
    /* min-width: 30%; */
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
    text-align: center;
    letter-spacing: .1px;
    justify-self: center;
    align-self: center;
    font-weight: 700;

    @media(max-width: 600px) {
        font-size: clamp(1rem, -0.875rem + 8.333vw, .75rem);
        /* max-width: 50%; */
    }
`

export const Frame = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0;
padding: 0;
/* border: solid 1px; */
`

export const OpenClientIcon = styled.span`
    font-size: 30px;
    /* flex: 1; */
    /* padding-left: 1em; */
`

export const IconContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* border: solid 1px green; */
`

export const Link = styled(ReachRouterLink)`

`

export const SessionsContainer = styled.div`
    overflow: hidden;
    height: ${({open}) => open ? '15em' : '0'};
    opacity: ${({open}) => open ? '1' : '0'};
    transition: all .25s linear;

`
export const DownArrow = styled.span`
    font-size: 30px;
    text-align: center;
    margin-left: 1.4em;
    /* padding-left: 1em; */
`

export const SessionButton = styled.button`
    margin: 0;
    border: none;
    color: ${colors.lightText};
    height: 70px;
    width: 70px;
    font-weight: 200;
    background: ${colors.btnPrimary};
    border-radius: 15%;
    display: flex;
    font-family: inherit;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    position: relative;
    font-weight: 400;
    
    
    -webkit-box-shadow: 5px 5px 46px -13px rgba(0,0,0,0.65); 
    transition: all .2s ease-in-out;
    box-shadow: 5px 5px 46px -13px rgba(0,0,0,0.65);

    &:hover {
        outline: none;
    }

    &:active {
        transform: scale(.95);
        outline: none;
        background: ${colors.accent};
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 600px) {
        height: 60px;
        width: 60px;
    }
`

export const ButtonContainer = styled.div`
    flex: 1;
    justify-self: flex-end;
    /* border: solid 1px; */
    text-align: left;
`
export const ButtonText = styled.p`

`
export const Text = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    text-align: center;

    @media (max-width: 600px) {
        font-size: .75rem;
    }
`

export const ButtonSpacer = styled.div`
display: flex;
justify-content: flex-end;
`