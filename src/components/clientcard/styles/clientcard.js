import styled from 'styled-components'
import { Link as ReachRouterLink } from 'styled-components'
import colors from "constants/colors";
import motion from 'framer-motion'

export const Container = styled.section`

    background: ${colors.cardBackground};
    color: ${colors.darkText};
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    width: 1000px;
    opacity: .1;
    margin: 0 auto 1em auto;
    padding: 10px 25px;
    border-radius: 15px;
    /* border: solid 1px magenta; */
    -webkit-box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16); 
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.16);
`
export const TitleContainer = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    
`

export const OpenClientIcon = styled.span`
    font-size: 30px;
    flex: 1;
`
export const IconContainer = styled.div`
    /* flex: 1; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border: solid 1px green; */
`
