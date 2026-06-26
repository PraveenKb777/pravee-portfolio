"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 250, -150, 0],
          y: [0, -180, 120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        pointer-events-none
        fixed
        -z-40
        h-[700px]
        w-[700px]
        rounded-full
        blur-[140px]
        bg-green-500/10
        top-[-250px]
        left-[-250px]
      "
      />

      <motion.div
        animate={{
          x: [0, -180, 250, 0],
          y: [0, 150, -120, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        pointer-events-none
        fixed
        -z-40
        h-[600px]
        w-[600px]
        rounded-full
        blur-[150px]
        bg-emerald-400/5
        bottom-[-250px]
        right-[-250px]
      "
      />
    </>
  );
}