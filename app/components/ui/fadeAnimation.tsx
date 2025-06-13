import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";

export function ImgFadeAnimation({
  className,
  name,
  src,
}: {
  className: string;
  name: string;
  src: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(Boolean(imgRef) || Boolean(imgRef.current?.complete));
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <span className="absolute top-1/2 left-1/2 -translate-1/2">
          <Quantum size="45" speed="2" color="#d0d6f9" />
        </span>
      )}
      <AnimatePresence>
        <motion.img
          key={name}
          src={src}
          ref={imgRef}
          alt={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute ${className}`}
        />
      </AnimatePresence>
    </>
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
