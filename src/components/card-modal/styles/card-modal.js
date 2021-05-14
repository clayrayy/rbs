import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* border-radius: 25px; */

  z-index: ${({ bringForward }) =>
    bringForward
      ? "9999"
      : "-1"}; //brings modal z-index forward when modal is active
  //specifies whether modal should be active
  /* transition: all .35s ease-in-out;  */
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* border: solid 1px green; */

  ${({ containerType }) => containerType === "past-sessions"}
`;
export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* border: solid 1px green; */
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: solid 1px yellow; */
  width: 100%;

  ${({ modalType }) =>
    (modalType === "delete-duration") | (modalType === "interval") &&
    `
        border-left: solid 1px white;
        justify-content: space-evenly;
    `}
`;
export const Text = styled.p`
  color: white;
  max-width: 80%;
  width: 80%;
  font-size: 0.75rem;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;
