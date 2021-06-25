import React from "react";
import { HeaderContainer } from "../containers/header";
import { SignupFormContainer } from "../containers/formcontainers/signup";
import { motion } from "framer-motion";
import { MotionVariants } from "constants/motionVariants";

export default function Signup() {
  const { pageTransitions } =
    MotionVariants();
  return (
    <>
      <HeaderContainer backIcon='true' title='Sign Up' showMenu='false' />
      <motion.div
        variants={pageTransitions}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <SignupFormContainer />
      </motion.div>
    </>
  )
}
