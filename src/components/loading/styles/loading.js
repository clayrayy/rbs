import styled, { css } from "styled-components";
import colors from "constants/colors";

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.35s ease-in-out;
  //specifies whether modal should be active
  width: 100%;
  height: 100%;
  /* background-color: rgba(255,255,255,1); */
  z-index: 9999; //brings modal z-index forward when modal is active
  padding: 0.5em;

  @media (min-width: 600px) {
    top: -15em;
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  color: white;
`;
