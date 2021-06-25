import React from "react";
import { HeaderContainer } from "../containers/header";
import { SigninFormContainer } from "../containers/formcontainers/signin.js";
import { motion } from 'framer-motion'
import { MotionVariants } from "constants/motionVariants";

export default function Signin() {
  const { pageTransitions } =
    MotionVariants();
  return (
    <>
      <HeaderContainer backIcon='true' title='Sign In' showMenu='false' />

      <motion.div
        variants={pageTransitions}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <SigninFormContainer />
      </motion.div>
    </>
  )
}
