import { motion } from 'framer-motion'
import React from 'react'

export default function PageTransition({ children }) {
  const transitionVariants = {
    show: {
      opacity: 1,
      y: 0,
    //   x: 0,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: '10%',
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: '10%',
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      variants={transitionVariants}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {children}
    </motion.div>
  )
}
