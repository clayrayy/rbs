import styled from 'styled-components'
import colors from "constants/colors";

export const Container = styled.div`
position: fixed;
left: 0;
top: 15%;
display: flex;
flex-direction: column;
transform: ${({open}) => !open ? 'translateX(-100%)' : 'none'};
border-radius: 0 0 15px 0;
z-index: 15;
background-color: rgba(0,0,0,.85);
transition: transform .25s linear;
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
`
export const HeaderContainer = styled.div`
/* position: absolute; */
background: rgba(0,0,0,.55);
width: 110%;
border-radius: 0 15px 15px 0;
display: flex;
justify-content: space-between;
`

export const OpenButton = styled.p`
color: ${colors.lightText};
transform: rotate(90deg);
cursor: pointer;
`