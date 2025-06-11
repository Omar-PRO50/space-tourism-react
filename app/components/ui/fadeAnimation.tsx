import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export function ImgFadeAnimation({
  className,
  name,
  src,
}: {
  className: string;
  name: string;
  src: string;
}) {
  return (
    <AnimatePresence>
      <motion.img
        key={name}
        src={src}
        alt={name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`absolute ${className}`}
      />
    </AnimatePresence>
  );
}

export function TextFadeAnimation({
  children,
  animationkey,
}: {
  children: ReactNode;
  animationkey: string;
}) {
  return (
    <AnimatePresence>
      <motion.span
        key={animationkey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-1/2 w-full -translate-x-1/2"
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}
