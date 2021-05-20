export const accordionVariants = {
  open: {
    // opacity: 1,
    height: "auto",
    overflow: "hidden",
    // y: 0,
    // scaleY: 1,
    // scaleY: 1,
    transition: {
      duration: 0.35,
      // type: 'tween'
    },
  },
  collapsed: {
    // opacity: 0,
    height: 0,
    overflow: "hidden",
    // y: -50,
    // scaleY: 0,
    // scaleY: 0,
    transition: {
      duration: 0.35,
      // type: 'linear',
      // stiffness: 0
    },
  },
};

export const list = {
  hidden: { opacity: 0, transition: { delay: 1 } },
  show: {
    opacity: 1,
    transition: {
      //   type: 'tween',
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
};



export const trialRunning = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      // delay: 1,
      duration: 0.25,
    },
  },
};

export const deleteDisappear = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const deleteEventVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "linear",
      duration: 0.3,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
    },
  },
};

export const textDisappear = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const modalVariants = {
  open: {
    opacity: 1,
    y: 0,
    height: "auto",
    scale: 1,
    transition: {
      duration: .5,
      delay: .25
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 2,
      delay: .5
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    height: 'auto',
    y: 50,
    transition: {
      delay: .5,
      // type: 'linear',
      duration: .5,
    },
  },
};

export const pageTransitions = {
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: "10%",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: "10%",
    transition: {
      duration: 0.3,
    },
  },
};

export const modalFade = {
  show: {

  },
  hidden: {

  },
  exit: {

  }
}
