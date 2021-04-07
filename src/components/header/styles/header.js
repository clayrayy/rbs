import styled, { css } from 'styled-components'
import { Link as ReachRouterLink} from 'react-router-dom'
import colors from "constants/colors";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: ${colors.headerBackground};
    margin-bottom: 2em;
    width: 100%;
    padding: 0 25px;
`

export const BackLink = styled(ReachRouterLink)`

`
export const Inner = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    height: 100px;
    background: ${colors.headerBackground};
`

export const Title = styled.h1`
    color: ${colors.lightText};
    letter-spacing: 1px;
    text-align: center;
    font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
`

export const BackIcon = styled.span`
    font-size: 30px;
    color: ${colors.lightText};
    flex: 1;
`

export const AddItemIcon = styled.span`
    z-index: ${({open}) => open ? '1000' : '1'};
    width: 1.5em;
    /* margin-left: 1em; */
    background-color: ${colors.lightText};
    height: .25em;
    /* margin-right: 1em; */
    position: relative;
    display: inline-block;
    border-radius: 1em;
    transition: all .3s ease-in-out;
    ${({ open }) => open && css`
        transform: rotate(.37turn);
        /* margin-left: 1em; */
    `}

    &::after {
        border-radius: 1em;
        position: absolute;
        display: inline-block;
        transition: all .3s ease-in-out;
        content: '';
        background-color: ${colors.lightText};
        height: .25em;
        width: 1.5em;
         transform: rotate(90deg)  
    }
    `


export const IconSpacer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;

`

export const IconContainer = styled.div`
padding: 12px 16px;
/* margin: 0; */
transition: all .1s ease-in-out;
z-index: ${({hideWhen}) => hideWhen ? '0' : '1000'}
`

export const Hamburger = styled.span`
    z-index: ${({open}) => open ? '1000' : '1'};
    background-color: ${colors.lightText};
    height: .25em;
    width: 1.5em;
    display: inline-block;
    border-radius: 1em;
    position: relative;
    transition: all .3s ease-in-out;
    ${({ open }) => open && css`transform: rotate(.37turn);`};

    &::before,
    &::after {
        content:'';
        background-color: ${colors.lightText};
        border-radius: 1em;
        height: .25em;
        width: 1.5em;
        position: absolute;
        transition: all .3s ease-in-out;
        display: inline-block;
    }

    &:after {
        bottom: .5em;
        ${({ open }) => open && css`transform: rotate(90deg) translateX(.5em);`}
    }
    &:before {
        top: .5em;
        ${({ open }) => open && css`
            opacity: 0;
            width: 0;
            height: 0;
        `}
    }
`

export const AddItemForm = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 8em;
    background-color: ${colors.dropdown};
    
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    transform: ${({ open }) => !open ? 'translateX(100%)' : 'none'};
    transition: transform 250ms cubic-bezier(.5, 0, .5, 1);

`



export const MenuDiv = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 6em;
    background-color: ${colors.dropdown};
    
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    transform: ${({ open }) => !open ? 'translateX(100%)' : 'none'};
    transition: transform 250ms cubic-bezier(.5, 0, .5, 1);

`

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
`

export const MenuItem = styled.li`
color: white;
cursor: pointer;
font-size: 4rem;

    &:hover {
        color: ${colors.pageBackground};
    }
`

export const MenuLink = styled(ReachRouterLink)`
    text-decoration: none;
    font-size: 4rem;
    color: ${colors.lightText};

    &:hover {
        color: ${colors.pageBackground}
    }
`