import React from 'react'
import Homepage from 'components/homepage'
import { HeaderContainer } from 'containers/header'
import * as ROUTES from 'constants/routes'
import { SigninFormContainer } from '../containers/formcontainers/signin.js'
import { motion } from 'framer-motion'
import { MotionVariants } from 'constants/motionVariants.js'
import PageTransition from 'components/page-transition.js'

export default function Home() {
  return (
    <>
      {/* <HeaderContainer
        title=""
        name="home"
        backIcon={false}
        showMenu='false'
      /> */}
      <PageTransition>
        <Homepage>
          <SigninFormContainer />
        </Homepage>
      </PageTransition>
    </>
  )
}
