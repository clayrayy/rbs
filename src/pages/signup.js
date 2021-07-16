import React from 'react'
import { HeaderContainer } from '../containers/header'
import { SignupFormContainer } from '../containers/formcontainers/signup'
import { motion } from 'framer-motion'
import { MotionVariants } from 'constants/motionVariants'
import PageTransition from 'components/page-transition'

export default function Signup() {
  const { pageTransitions } = MotionVariants()
  return (
    <>
      <HeaderContainer backIcon='true' title='Sign Up' showMenu='false' />
      <PageTransition>
        <SignupFormContainer />
      </PageTransition>
      {/* </motion.div> */}
    </>
  )
}
