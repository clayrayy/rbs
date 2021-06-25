import { HeaderContainer } from "containers/header";
import { ProfileContainer } from "containers/profile";
import React from "react";
import { motion } from 'framer-motion'
import { MotionVariants } from "constants/motionVariants";

export default function Profile() {
  const { pageTransitions } =
    MotionVariants();
  return (
    <>
      <HeaderContainer backIcon="true" title="Profile" showMenu='false'/>
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
