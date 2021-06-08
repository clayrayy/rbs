import React from "react";
import { PlusButton } from "./styles/rate";

export default function Rate({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

Rate.PlusButton = function RatePlusButton({ children, ...restProps }) {
  return <PlusButton {...restProps}>{children}</PlusButton>;
};

Rate.PlusButton = function RatePlusButton({ children, ...restProps }) {
  return <PlusButton {...restProps}>{children}</PlusButton>;
};
