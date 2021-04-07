import styled, {/* css */} from 'styled-components'
import colors from "constants/colors";


/*  
                        ----TODO-----
    find a way to calculate the height of the itemscontainer div to 
    make accordion animation smoother and not clip off items

*/


export const Container = styled.div`
    background: ${colors.cardBackground};
    color: ${colors.darkText};
    display: flex;
    max-width: 90%;
    width: 800px;
    flex-direction:column;
    justify-content: space-between;
    margin: 0 auto 1em auto;
    align-items: center;
    border-radius: 15px;
    padding: 10px 25px 0px 25px;
    -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16); 
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16);
`

export const Header = styled.h1`
    font-size: 24px;
    color: ${colors.darkText};
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 0;
    letter-spacing: .1px;
    align-self: center;
    font-weight: 700;

    @media(min-width: 800px) {
        font-size: 2rem;
    }
`

export const BackIcon = styled.span`
    font-size: 30px;
    color: ${colors.lightText};
    flex: 1;
`

export const Text = styled.h2`
    margin: 0;
    color: ${colors.darkText};
    letter-spacing: .1px;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    
    @media(min-width: 800px) {
        font-size: 1.2rem;
    }
`

export const TitleFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
`


export const ButtonContainer = styled.div`
    flex: 1;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1em;
    margin: 0;
`

export const TimerButton = styled.button`
    border: none;
    color: ${colors.lightText};
    height: 70px;
    font-weight: 700;
    width: 70px;
    background: ${({ active }) => active ? `${colors.btnActive}` : `${colors.btnPrimary}`};
    border-radius: 50%;
    display: flex;
    font-size: 1.2rem;
    font-weight: 200;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
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
`

export const MoreInfo = styled.span`
    font-size: 32px;
    color: ${colors.darkText};
    text-align: right;
    flex: 1;
    transition: all .3s ease-out;
    transform: ${({ open }) => open ? 'scaleY(-1)' : 'none'};
    /* padding-top: 10px; */
    /* padding-right: 8px; */
`

export const ItemsContainer = styled.div`
    flex-direction: column;
    
    max-height: ${({ open }) => open ? '1000px' : '0'};
    width: 90%;
    box-sizing: border-box;
    max-width: 800px;
    padding-top: 1.5em;
    opacity: ${({ open }) => open ? '1' : '0'};
    display: 'flex';
    overflow: hidden;
    transition: all .3s ease-out;
    /* border: solid 1px magenta; */

    @keyframes hide-scroll {
    from, to { overflow: hidden; } 
  }
    

`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px;

    &:first-of-type {
        border-top: 0;
    }
`

export const TimeStamp = styled.p`
    font-weight: bold;

`

export const TimeData = styled.p`
    font-weight: bold;
    text-align: center;
    
`

export const Frame = styled.div`
    display: flex;
    /* padding: 0; */
    margin: 1em;
    margin-bottom: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    
`

export const TotalTimeContainer = styled.div`
    text-align: right;
`

//UNUSED

// export const Inner = styled.div`
//     width: 100%;
//     max-width: 800px;
//     display: flex;
//     border: solid 10px green;
//     align-items: center;
//     flex-direction: column;
//     justify-content: space-between;
// `


// export const TimerDisplay = styled.h2`

// `