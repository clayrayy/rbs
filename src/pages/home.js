import React from "react";
import Homepage from "components/homepage";
import { HeaderContainer } from "containers/header";
import * as ROUTES from "constants/routes";
import { SigninFormContainer } from "../containers/formcontainers/signin.js";
import { motion } from "framer-motion";
import { MotionVariants } from "constants/motionVariants.js";


export default function Home() {
  const { pageTransitions } = MotionVariants();
  return (
    <>
      {/* <HeaderContainer
        title=""
        name="home"
        backIcon={false}
        showMenu='false'
      /> */}
      <motion.div
        variants={pageTransitions}
        initial="show"
        animate="show"
        exit="exit"
      >
        <Homepage>
          
          <SigninFormContainer />
          
        </Homepage>
      </motion.div>
    </>
  );
}
