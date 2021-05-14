import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";
import colors from "constants/colors";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  /* border: solid 1px yellow; */
`;

export const Frame = styled.div`
  border: solid 1px magenta;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Error = styled.div`
  color: red;
  text-align: center;
  margin: 1em;
`;

export const Base = styled.form`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  width: 90%;
  flex-direction: ${({ formType }) =>
    formType === "add-client" ? "column" : "row"};
  /* bordeR: solid 1px magenta; */
  ${({ formType }) =>
    formType === "add-session" &&
    `
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: .5em;
        grid-template-areas:
            'n n n n n t t t t t'
            '. . s s . . c c . .';
        justify-content: center;
        align-content: center;
    `}

  ${({ formType }) =>
    formType === "add-client" &&
    `
        align-items: center;
        // border: solid 1px magenta;
    `}

    ${({ formType }) =>
    formType === "add-duration" &&
    `
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 1em;
        
        margin-top: 1em;
    `}

    ${({ formType }) =>
    formType === "sign-in" &&
    `
        display: grid;
        justify-content: center;
        grid-template-rows: 1fr 1fr;
        gap: 1em;
        // transform: scale(1.4);
        margin: 3em auto;
    `}

    ${({ expandForSmallScreen }) =>
    expandForSmallScreen &&
    `
        @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1em;
        grid-template-areas:
            'n n'
            't t'
            's c'
    }
    `}

    ${({ formType }) =>
    formType === "sign-up" &&
    `
    flex-direction: column;
    max-width: 400px;
    `}
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.lightText};
  font-size: 1.2rem;
  margin-top: 0;

  ${({ formType }) =>
    formType === "sign-up" &&
    `
    color: ${colors.darkText}
    `}
`;

export const Link = styled(ReachRouterLink)``;

export const Text = styled.p``;

export const TextSmall = styled.p``;

export const Input = styled.input`
  /* margin-bottom: 20px; */
  padding: 5px 10px;
  background-color: ${colors.cardBackground};
  font-size: 1rem;
  border-radius: 15px;
  border: none;
  width: 100%;
  transition: all 0.25s ease;
  ${({ formType, gridArea }) =>
    formType === "add-session" &&
    `
        grid-area: ${gridArea};
        padding: .5em;
    `}
  ${({ formType }) => formType === "add-client" && ` margin-bottom: 3em`};
  /* ${({ addMarginLeft }) => addMarginLeft && "margin-left: 3em;"} */
  ${({ pwError }) => (pwError ? "border: solid 1px red;" : null)}

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }

  ${({ formType }) =>
    formType === "add-client" &&
    `
        padding: .75em;
        width: 70%;
        max-width: 600px;
    `};

  ${({ formType }) =>
    formType === "sign-up" &&
    `
        margin-bottom: 1em;
        `}
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  min-width: 100px;
  text-align: center;
  border-radius: 15px;
  /* width: 100%; */
  background-color: ${({ buttonType }) =>
    buttonType === "cancel" ? colors.headerBackground : colors.btnActive};
  color: ${colors.lightText};
  font-size: 1rem;
  transition: all 150ms cubic-bezier(0.5, 0, 0.5, 1);
  ${({ formType, gridArea }) =>
    formType === "add-session" &&
    `
        grid-area: ${gridArea};
        padding: .75em .75em;
        // width: 6em;
        // margin-top: .5em;
    `};
  &:active {
    background-color: ${colors.pageBackground};
    color: ${colors.darkText};
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }

  ${({ formType }) =>
    formType === "add-client" &&
    `
        padding: 1em 1.75em;
    `};

  ${({ buttonType }) =>
    buttonType === "end-session" &&
    `
    
    `};
`;

export const TitleContainer = styled.div``;
