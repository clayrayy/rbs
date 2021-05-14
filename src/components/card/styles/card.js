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

  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.16);
  background: ${colors.cardBackground};

  @media (max-width: 600px) {
    padding: 0.75em 0em;
  }

  ${({ expandForSmallScreen }) =>
    expandForSmallScreen &&
    `
        height: 175px;

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
    font-size: 1rem;
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
  flex: ${({ itemType }) => (itemType === "history" ? "4" : "1")};
  display: flex;
  flex-direction: column;
  ${({ itemType }) => itemType === "history" && `flex-direction: row;`}
  justify-content: center;
  align-items: flex-start;
  ${({ itemType }) =>
    itemType === "history" &&
    `justify-content: flex-start; align-items: center;`}

  ${({ containerType }) =>
    containerType === "datasheet" &&
    `
    align-items: center;
    
`} /* border: solid 1px orange; */
`;
export const CenterContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ containerType }) =>
    containerType === "datasheet" &&
    `
    align-items: center;
    
`}
`;
export const RightContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  /* border: solid 1px magenta; */

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
`;

export const Top = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0.5em;
  align-items: center;
  justify-content: space-between;
`;
export const Dropdown = styled(motion.div)`
  width: ${({ dropdownType }) =>
    dropdownType === "session-list" ? "80%" : "100%"};
`;

export const SessionItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: all .15s ease; */
  /* width: 80%; */
  max-width: 90%;
  margin: 0 auto;

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
  width: 90%;
  border-bottom: solid 1px;
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

export const ListText = styled.p`
  font-size: clamp(0.75rem, -0.875rem + 8.333vw, 0.1rem);
  text-align: center;
  /* transition: all .25s ease; */
  max-width: 100%;
  /* width: 80%; */
  font-size: 0.75rem;
  /* border: solid 1px; */
  color: ${colors.darkText};

  @media (min-width: 835px) {
    font-size: 0.85rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  ${({ textType }) =>
    textType === "column-label" &&
    `
        font-weight: bold;
    `}

  ${({ textType }) =>
    textType === "interval-result" &&
    `
       
    `}
`;
export const IntervalResultContainer = styled.div`
  margin: 0 auto;
  display: grid;
  width: 90%;
  /* background: yellow; */
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  grid-auto-flow: column;
  text-align: center;
  /* justify-items: center; */
  /* border: solid 1px; */
`;
export const IntervalResultItem = styled.div`
  /* margin: 0 auto; */
  margin-top: 2em;
  /* background: green; */
  border-bottom: solid 1px;
  border-right: solid 1px;
  /* text-align: center; */
  /* padding:  0 .5em; */
  /* font-weight: bold; */
  display: flex;
  flex-direction: column;
  &:first-of-type {
    border-left: solid 1px;
  }
`;
