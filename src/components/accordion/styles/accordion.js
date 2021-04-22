import styled from 'styled-components'
import colors from "constants/colors";

export const Container = styled.div`
    background: ${colors.headerBackground};
    /* background: linear-gradient(0deg, #ececec 0%, rgba(149,149,149,0.0760679271708683) 100%); */
    color: ${colors.darkText};
    position: relative;
    /* background: ${({ open }) => open ? 'linear-gradient(0deg, rgba(236,236,236,0.8155637254901961) 0%, rgba(255,255,255,0.42620798319327735) 100%)' : 'white'}; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    /* height: 150px; */
    /* border-radius: 15px; */
    flex-direction: column;
    width: 90%;
   
    grid-template-rows: 1fr 1fr 2fr;
    /* opacity: .1; */
    /* height: ${({ open }) => open ? '1000px' : '5em'}; */
    margin: 0 auto 1em auto;
    /* padding: 0em 0em; */
    transition: all .25s linear;
    /* border-radius: 15px; */
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
    opacity: ${({ blackout }) => blackout ? '1' : '0'};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 15px;
    background-color: rgba(0,0,0,.9);
    z-index: ${({ bringForward }) => bringForward ? '10' : '-1'};
`
export const Title = styled.h1`
transition: all .25s linear;
font-size: 1.5rem;
margin: 0;
font-weight: ${({ open }) => open ? '400' : '200'};
color: ${colors.lightText};
/* margin-right: .5em; */
/* font-size: ${({ open }) => open ? '1em' : '1.4em'}; */
/* letter-spacing: ${({ open }) => open ? '1px' : '5px'}; */
/* margin: ${({open}) => open ? '.4em' : '0'}; */
/* opacity: ${({ open }) => open ? '.7' : '1'}; */
/* transform: ${({ open }) => open ? `translateX(-45%)` : null}; */

`

export const TitleContainer = styled.h1`
display: flex;
width: 100%;
max-width: 90%;
flex: 1;
justify-content: space-between;
align-items: center;
text-align: center;
border-bottom: solid 1px ${colors.lightText};
/* border: solid 1px; */
/* border-radius: 26px; */
/* margin-bottom: 1em;; */
`

export const DownArrow = styled.span`

    font-size: 2rem;
    color: ${colors.lightText};
    text-align: right;
    flex: 1;
    /* padding-bottom: 1em; */
    z-index: ${({ moveToBack }) => moveToBack ? '0' : '1'};
    transition: all .25s ease-out;
    transform: ${({ open }) => open ? 'scaleY(-1)' : 'none'};
    /* padding-top: 10px; */
    /* padding-right: 8px; */
`


export const Text = styled.p`
    color: ${colors.lightText};
`
export const Frame = styled.div`
display: flex;
/* width: 100%; */
/* border: solid 1px; */
flex: 1;
/* justify-self: flex-end; */
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
/* width: 18%; */
`

export const IconContainer = styled.div`
    /* border: solid red; */
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    align-self: flex-start;
    margin: 0;
    flex: 1;
    /* padding-left: 1em; */
`

export const ItemsContainer = styled.div`
width: 100%;
overflow: hidden;
opacity: ${({ open }) => open ? '1' : '0'};
transition: all .25s linear;
height: ${({ open }) => open ? '100%' : '0'};
`

export const DropdownIcon = styled.span`
    z-index: 30;
    height: 5px;
    width: ${({ open }) => open ? '15px' : '5px'};
    display: inline-block;
    background-color: ${({ open }) => open ? `${colors.btnActive}` : `${colors.lightText}`};
    border-radius: ${({ open }) => open ? '10px' : '50%'};
    position: absolute;
    right: 15px;
    top: 5px;
    /* z-index:3; */
    transition: all .25s ease;

    &::before,
    &::after {
        content: '';
        background-color: ${({ open }) => open ? `${colors.btnActive}` : `${colors.lightText}`};
        border-radius: ${({ open }) => open ? '10px' : '50%'};
        height: 5px;
        width: ${({ open }) => open ? '8px' : '5px'};
        position: absolute;
        transition: all .25s ease;
    }

    &::after {
        transform: translateX(5px);
    }

    &::before {
        transform: translateX(-10px);
    }
`
export const DropdownContainer = styled.div`
    align-self: flex-end;
    position: relative;
    /* border: solid 1px magenta; */
    padding: 20px;


`

export const Dropdown = styled.div`
    position: absolute;
    right: -.5em;
    top: -.2em;
    /* width: 100%; */
    background: rgba(0, 0, 0, .55);
    overflow: hidden;
    opacity: ${({ visible }) => visible ? '1' : '0'};
    /* padding: 1.25em 1em; */
    min-width: 90%;
    max-width: 800px;
    z-index: 50;
    font-size: .5em;
    color: ${colors.btnActive};
    text-align: left;
    border-radius: 15px;
    padding: .2em 5em;
    /* max-height: ${({ visible }) => visible ? '3em' : '.5em'}; */
    transform: ${({ visible }) => visible ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top;
    transition: all  .25s ease-in;
`


