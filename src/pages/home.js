import React from "react";
import Homepage from "components/homepage";
import { HeaderContainer } from "containers/header";
import * as ROUTES from "constants/routes";
import { SigninFormContainer } from "../containers/formcontainers/signin.js";
import { motion } from 'framer-motion'
import { pageTransitions } from "constants/motionVariants.js";

export default function Home() {
  return (
    <>
      <HeaderContainer
        title="RBS Data"
        name="home"
        backIcon={false}
        showMenu={false}
      />
      <motion.div
        variants={pageTransitions}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Homepage>
          <Homepage.Title>Log in </Homepage.Title>
          <SigninFormContainer />
          <Homepage.Text>Need an account?</Homepage.Text>
          <Homepage.ButtonLink to={ROUTES.SIGN_UP}>
            Click here to sign up.
          </Homepage.ButtonLink>
        </Homepage>
      </motion.div>
    </>
  );
}
