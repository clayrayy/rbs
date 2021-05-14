import { HeaderContainer } from "containers/header";
import { ProfileContainer } from "containers/profile";
import React from "react";
import { motion } from 'framer-motion'
import { pageTransitions } from "constants/motionVariants";

export default function Profile() {
  return (
    <>
      <HeaderContainer backIcon="true" title="Profile" />
      <motion.div
            variants={pageTransitions}
            initial="hidden"
            animate="show"
            exit="exit"
          >
      <ProfileContainer /></motion.div>
    </>
  );
}
