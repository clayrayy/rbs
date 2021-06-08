import React from "react";
import { Container, ButtonContainer } from "./styles/frequencycounter";

export default function FrequencyCounter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FrequencyCounter.ButtonContainer = function FrequencyCounterButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};
