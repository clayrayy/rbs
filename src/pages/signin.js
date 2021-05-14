import React from "react";
import { HeaderContainer } from "../containers/header";
import { SigninFormContainer } from "../containers/formcontainers/signin.js";
import { motion } from 'framer-motion'
import { pageTransitions } from "constants/motionVariants";

export default function Signin() {
  return (
    <>
      <HeaderContainer backIcon="true" title="Sign In" />
      
      <motion.div
            variants={pageTransitions}
            initial="hidden"
            animate="show"
            exit="exit"
          >
      <SigninFormContainer />
      </motion.div>
    </>
  );
}
