import styled from 'styled-components'
import colors from "constants/colors";

export const Container = styled.div`
    background: ${colors.cardBackground};
    color: ${colors.darkText};
    display: flex;
    max-width: 90%;
    width: 800px;
    /* opacity: 0; */
    /* flex-direction:column; */
    justify-content: space-between;
    margin: 0 auto 1em auto;
    padding: 1.5em;
    align-items: center;
    border-radius: 15px;
    min-width: 300px;
    /* padding: 10px 25px 0px 25px; */
    -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16); 
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16);
`

export const SelectorButton = styled.button`
    height: 30px;
    width: 30px;
    margin-bottom: 1em;
    /* max-width: 35px; */
    border: none;
    display: flex;
    align-items:center;
    border-radius: 50%;
    color: ${colors.lightText};
    justify-content: center;
    transition: all .25s ease;
    background-color: ${colors.btnPrimary};

    &:active {
        transform: scale(.95);
        /* outline: none; */
        border: none;
        background: ${colors.accent};
    }

    &:focus {
        outline: none;
        border: none;
    }
    

`

export const PlusIcon = styled.span`
    position: relative;
    height: 2px;
    width: 15px;
    border-radius: 1em;
    transition: all .25s ease;
    background-color: ${colors.lightText};
    

    

    &:before {
        content: '';
        position: absolute;
        background-color: ${colors.lightText};
        border-radius: 1em;
        height: 2px;
        width: 15px;
        transform: rotate(90deg) translateY(7.5px) ;

    }

`

    export const MinusIcon = styled.span`
position: relative;
    height: 2px;
    width: 15px;
    border-radius: 1em;
    background-color: ${colors.lightText};
    transition: all .15s ease-in-out;
    transform: ${({reduce}) => reduce ? 'scale(.75)' : 'none'};

`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: center;
`

export const StartButton = styled.button`

    border: none;
    color: ${colors.lightText};
    height: 70px;
    font-weight: 700;
    width: 70px;
    background: ${({ active }) => active ? `${colors.btnActive}` : `${colors.btnPrimary}`};
    border-radius: ${({ active }) => active ? '50%' : '15%'};
    display: flex;
    font-size: 1.2rem;
    font-weight: 200;
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    position: relative;
    
    
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

export const Header = styled.h1`
    
`

export const Input = styled.input`

`

export const Text = styled.p`
/* font-weight: bold; */
margin: 0 1em;
    @media (max-width: 600px) {
        font-size: .85rem;
    }
`

export const TitleFrame = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`

export const MoreInfo = styled.span`
    font-size: 2rem;
    color: ${colors.darkText};
    text-align: right;
    flex: 1;
    z-index: ${({moveToBack}) => moveToBack ? '0' : '1'};
    transition: all .3s ease-out;
    transform: ${({ open }) => open ? 'scaleY(-1)' : 'none'};
    /* padding-top: 10px; */
    /* padding-right: 8px; */
`

export const StartButtonContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
flex: 1;
`

export const ButtonText = styled.p`

    @media (max-width: 600px) {
        font-size: .85rem;
    }
`

export const Label = styled.p`
position: absolute;
/* top: 0; */
bottom: 6.2em;
left: 1.2em;
color: grey;
font-style: italic;
font-size: .75rem;
/* text-align: center; */

@media (max-width: 600px) {
    bottom: 5em;
}
`
