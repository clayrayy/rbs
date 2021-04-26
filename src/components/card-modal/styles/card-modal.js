import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .35s ease-in-out;
    opacity: ${({ blackout }) => blackout ? '1' : '0'}; //specifies whether modal should be active
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.9);
    z-index: ${({ bringForward }) => bringForward ? '9999' : '-1'}; //brings modal z-index forward when modal is active
    padding: .5em;
`

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* border: solid 1px green; */
`
export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* border: solid 1px green; */
`

export const RightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* border: solid 1px yellow; */
    width: 100%;

    ${({modalType}) => modalType === 'delete-duration' | modalType === 'interval' && `
        border-left: solid 1px white;
        justify-content: space-evenly;
    `}

`

