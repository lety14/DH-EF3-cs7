import { motion } from "framer-motion";
import { ComponentType } from "react";

type WithTransitionProps = {
  children?: JSX.Element;
};

export default function withTransition<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  const pageTransition = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
    out: {
      opacity: 0,
      scale: 1,
      y: 40,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (props: T & WithTransitionProps) => (
    <motion.div variants={pageTransition} animate="in" initial="out" exit="out">
      <WrappedComponent {...(props as T)} />
    </motion.div>
  );
}
