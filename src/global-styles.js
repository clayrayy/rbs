import { createGlobalStyle } from 'styled-components'
import colors from "constants/colors";
//MAKE IT SO IT DONT SCROLL NO MO

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

    }

    
    html,
    body {
        font-size: 18px;
        box-sizing: border-box;
        margin: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.pageBackground};
    }
    
    label.radio {
    cursor: pointer
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none
}

label.radio span {
    background-color: ${colors.headerBackground};
    padding: 1em 20px;
    font-size: 1.4rem;
    min-width: 200px;
    text-align: center;
    display: inline-block;
    color: ${colors.lightText};
    border-radius:30px;
    transition:     all 150ms cubic-bezier(.5, 0, .5, 1);
    
    @media(max-width: 800px) {
    min-width: 175px;
    font-size: 1.2em;

}
}

label.radio input:checked+span {
    transform: scale(1.1);
    background-color: ${colors.accent};
    color: ${colors.lightText}
}

`