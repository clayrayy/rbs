import { AnimationsContext } from "context/animations";
import { useContext } from "react";

export function MotionVariants() {
  const { animationsOn } = useContext(AnimationsContext);

  const accordionVariants = animationsOn
    ? {
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
      }
    : {};

  const list = animationsOn
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            //   type: 'tween',
            when: "beforeChildren",
            staggerChildren: 0.05,
          },
        },
      }
    : {};

  const item = animationsOn
    ? {
        show: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }
    : {};

  const trialRunning = animationsOn
    ? {
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
      }
    : {};

  const deleteDisappear = animationsOn
    ? {
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
      }
    : {};

  const deleteEventVariant = animationsOn
    ? {
        show: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.25,
            duration: 0.5,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        exit: {
          opacity: 0,

          transition: {
            duration: 0.5,
          },
        },
      }
    : {};

  const textDisappear = animationsOn
    ? {
        show: {
          opacity: 1,
          y: 0,
          transition: {
            dely: 0.25,
            duration: 0.5,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
      }
    : {};

  const modalVariants = animationsOn
    ? {
        open: {
          opacity: 1,
          y: 0,
          // height: 'auto',
          scale: 1,
          transition: {
            duration: 0.35,
            // delay: 0.25,
          },
        },
        hidden: {
          opacity: 0,
          // scale: 0.5,
          // height: '10px',
          transition: {
            duration: 0.35,
            // delay: 0.5,
          },
        },
        exit: {
          opacity: 0,
          // scale: .5,
          // height: "0",
          // y: 50,
          transition: {
            // delay: .25,
            // type: 'linear',
            duration: 0.35,
          },
        },
      }
    : {};

  const modalFade = animationsOn
    ? {
        show: { opacity: 1, y: 0 },
        hidden: { opacity: 0 },
        exit: {},
      }
    : {};

  const pageTransitions = animationsOn
    ? {
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
      }
    : {};

  const menuVariants = {
    hidden: { opacity: 0.5, x: "100%" },
    show: { opacity: 1, x: 0, transition: {
      duration: .25
    } },
    exit: { opacity: .5, x: "100%", transition: {
      duration: .25
    } },
  };

  return {
    accordionVariants,
    list,
    item,
    trialRunning,
    deleteDisappear,
    deleteEventVariant,
    textDisappear,
    modalVariants,
    pageTransitions,
    modalFade,
    menuVariants
  };
}
