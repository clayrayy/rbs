import styled from "styled-components";
import colors from "constants/colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  position: relative;
  max-width: 800px;
  flex-direction: column;
  color: ${colors.darkText};
  padding: 0.75em;
  overflow: hidden;
  margin: 0 auto 1em auto;
  border-radius: 5px;
  z-index: 2;

  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  background: ${colors.cardBackground};

  @media (max-width: 600px) {
    padding: 0.75em;
  }

  ${({ expandForSmallScreen }) =>
    expandForSmallScreen &&
    ` height: 175px;
        @media (max-width: 700px) {
            height: 300px
        }
        
    `}
`;

export const Title = styled.h1`
  color: ${colors.darkText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
  text-align: center;
  letter-spacing: 0.1px;
  justify-self: center;
  align-self: center;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 0.75rem);
  }
`;

export const Text = styled.p`
  font-weight: bold;
  max-width: 80%;
  width: 80%;
  font-size: 0.75rem;
  color: ${colors.darkText};

  @media (min-width: 600px) {
    font-size: 0.85rem;
  }

  ${({ textType }) =>
    textType === "session-date" &&
    `
        font-size: clamp(.75rem, -0.875rem + 8.333vw, .1rem);
        text-align: center;
        
        @media (min-width: 600px) {
            font-size: .75rem;
        }
        @media (min-width: 835px) {
            font-size: .85rem;
        }
    `}
  ${({ textType }) =>
    textType === "session-name" &&
    `
        font-size: clamp(.75rem, -0.875rem + 8.333vw, .1rem);
        text-align: center;
        
        @media (min-width: 600px) {
            font-size: .75rem;
        }
        @media (min-width: 835px) {
            font-size: .85rem;
        }
    `}

    ${({ textType }) =>
    textType === "result-number" &&
    `
        margin: 0 auto;
        border-top: solid 1px;
        border-bottom: solid 1px;
        width: 100%;
        max-width: 100%;
    `}
`;
export const LeftContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  /* border: solid 1px yellow; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ containerType }) =>
    containerType === "interval-dropdown" ? "flex: 1" : "flex: 1"};
  /* ${({ containerType }) =>
    containerType === "interval-dropdown" &&
    `
      flex-direction: row;
      // margin-left: 1em;
      justify-content: flex-start; 
      align-items: center;
    `} */

  ${({ containerType }) =>
    containerType === "datasheet" &&
    `
    text-align-center;
    align-items: center;
    
`}
`;

export const Image = styled(motion.img)`
width: 200px;
`


export const CenterContainer = styled(motion.div)`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: solid pink; */

  ${({ containerType }) =>
    containerType === "datasheet" &&
    `
    align-items: center;
    
`}

  ${({ containerType }) =>
    containerType === "datasheet-title" &&
    `
    // border: solid;
    // align-items: flex-start;
    // display: none;
    width: 100%;
    justify-self: flex-start;
    
`}

  ${({ containerType }) =>
    containerType === "results-title" &&
    `
    border-solid 1px;
    position: relative;
  `}
`;
export const RightContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  /* border: solid 1px green; */

  ${({ itemType }) =>
    itemType === "edit-container" &&
    `
    justify-content: center;
    align-items: center;
`}

  ${({ containerType }) =>
    containerType === "datasheet" &&
    `
    align-items: center;
`}
  /* ${({ containerType }) =>
    containerType === "interval-dropdown" &&
    `
    // border: solid 1px;
    align-items: flex-end;
    margin-right: 1em;
`} */
`;

export const Top = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0.5em;
  align-items: center;
  justify-content: space-between;
`;
export const Dropdown = styled(motion.div)`
width: 100%;
  /* width: ${({ dropdownType }) =>
    dropdownType === "session-list" ? "100%" : "100%"}; */
`;

export const DropdownIcon = styled.span`
  height: 5px;
  /* justify-self: flex-end; */
  position: relative;
  width: ${({ open }) => (open ? "15px" : "5px")};
  display: block;
  background-color: ${({ open, iconColor }) =>
    open
      ? `${colors.btnActive}`
      : `${
          iconColor === "light" ? colors.lightText : colors.headerBackground
        }`};
  border-radius: ${({ open }) => (open ? "10px" : "50%")};
  /* transform: translateY(-0.55em); */
  transition: all 0.25s ease;
  z-index: 153;

  &::before,
  &::after {
    content: "";
    background-color: ${({ open, iconColor }) =>
      open
        ? `${colors.btnActive}`
        : `${
            iconColor === "light" ? colors.lightText : colors.headerBackground
          }`};
    transition: all 0.25s ease;
    border-radius: ${({ open }) => (open ? "10px" : "50%")};
    height: 5px;
    width: ${({ open }) => (open ? "10px" : "5px")};
    position: absolute;
    z-index: 999;
    transition: all 0.25s ease;
  }

  &::after {
    /* background-color: green; */
    left: 7px;
  }

  &::before {
    right: 7px;
    /* background-color: red; */
  }
`;

export const SessionItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  border-bottom: solid 1px;


  &:last-of-type {
    border-bottom: none;
  }

  ${({ itemType }) =>
    itemType === "link-to-session" &&
    `

        &:hover {
            transform: scale(1.04);
            background: rgb(17,53,119);
            background: linear-gradient(90deg, rgba(17,53,119,0) 14%, rgba(17,53,119,0.13209033613445376) 30%, rgba(17,53,119,0.1292892156862745) 70%, rgba(17,53,119,0) 86%);
        }
        cursor: pointer;
    
    `}
`;
export const ColumnsLabels = styled.div`
  width: 100%;
  /* border-bottom: solid 1px; */
  text-align: center;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  ${({ columnType }) =>
    columnType === "instruction-text" &&
    `
        border-bottom: 0;
    `}
`;

export const ListText = styled(motion.p)`
  /* font-size: clamp(0.75rem, -0.875rem + 8.333vw, 0.1rem); */
  text-align: center;
  /* max-width: 100%; */
  font-size: 0.75rem;
  color: ${colors.darkText};

  @media (min-width: 600px) {
    font-size: 0.85rem;
  }

  @media (min-width: 835px) {
    font-size: 1rem;
  }

  ${({ textType }) =>
    textType === "column-label" &&
    `
        font-weight: bold;
    `}

  ${({ textType }) =>
    textType === "total-behaviors" &&
    `
       position: absolute;
    `}
`;

export const DownArrow = styled.span`
  font-size: 30px;
  text-align: center;
  margin: 0 auto;
  color: ${({iconColor}) => iconColor === 'light' ? `${colors.lightText}` : 'inherit'};
  transition: all 0.25s ease;
  ${({ open }) =>
    open &&
    `
        transform: scaleY(-1);
    `}
`;

export const StartButton = styled.button`
  font-family: inherit;
  border: none;
  color: ${colors.lightText};
  height: 70px;
  width: 70px;
  border-radius: ${({ active }) => (active ? "50%" : "15%")};
  display: flex;
  font-size: 1.2rem;
  font-weight: 200;
  /* justify-self: flex-start; */
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  position: relative;
  background: ${({ disabled, active }) => {
    if (disabled) {
      return "#a0a0a0;";
    }
    if (active) {
      return `${colors.btnActive};`;
    } else return `${colors.startButton}`;
  }};

  -webkit-box-shadow: inset 0px 5px 17px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 5px 17px 0px rgba(0, 0, 0, 0.3);

  transition: all 0.3s ease-in-out;

  &:hover {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    outline: none;
    background: ${colors.accent};
    box-shadow: 26px 23px 37px -18px rgba(0, 0, 0, 0.46) inset;
    -webkit-box-shadow: 26px 23px 37px -18px rgba(0, 0, 0, 0.46) inset;
    -moz-box-shadow: 26px 23px 37px -18px rgba(0, 0, 0, 0.46) inset;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`;

export const ButtonText = styled.p`
  font-family: inherit;
  font-weight: 400;
  z-index: 5;
  font-size: 1rem;
  color: ${colors.lightText};

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const IntervalResultContainer = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  grid-auto-flow: column;
  text-align: center;
`;

export const IconContainer = styled.div`
  /* border: solid 1px pink; */
  align-self: flex-end;
  padding: 1em;
  flex: 1;
  z-index: 15;

  ${({ iconType }) =>
    iconType === "delete" &&
    `
    z-index: 155;
    position: absolute;
    top: -100%;
    // right: 0;
    padding: 1em;
    height: 20px;
    // border: solid;
    `}
  ${({ iconType }) =>
    iconType === "more-info" &&
    `
      padding: 0 .58em;
    `}

  ${({ iconType }) =>
    iconType === "add-tracker" &&
    `
    // background-color: green;
    position: absolute;
    top: -2.2em;
    right: -.75em;
    // top: -100%;
    // bottom: 100%;
      z-index: 160;
     
    `}
`;

export const ButtonContainer = styled.div`
  flex: 1;
  /* padding-right: 15px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: 1em; */
  margin: 0;
`;

export const IntervalResultItem = styled.div`
  margin-top: 2em;
  padding: 0;
  border-bottom: solid 1px;
  border-right: solid 1px;
  display: flex;
  flex-direction: column;
  &:first-of-type {
    border-left: solid 1px;
    /* border: 1px magenta solid; */
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* border:solid 1px magenta; */

  

  ${({columnType}) => columnType === 'labels' && `
    border-bottom: solid 1px;
  `}
`