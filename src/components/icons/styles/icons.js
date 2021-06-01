import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "constants/colors";

export const Delete = styled(motion.span)`
  margin-right: 1em;
  color: ${colors.btnActive};
  /* border: solid 1px; */
  justify-self: flex-start;
`;

export const DownArrow = styled(motion.div)`
  font-size: 32px;
  color: ${({color}) => color === 'light' ? colors.lightText : colors.darkText};
  text-align: right;
  margin: 0;
  padding: 0;
  z-index: ${({ moveToBack }) => (moveToBack ? "0" : "1")};
  transition: all 0.3s ease-out;
  font-size: 30px;
  text-align: center;
  margin: 0 auto;
  ${({ isOpen }) =>
    isOpen &&
    `
        transform: scaleY(-1);
    `}
`;
