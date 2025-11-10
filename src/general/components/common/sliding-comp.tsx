import React from 'react';
import { motion } from 'framer-motion';

type slidingProps = {
  children: React.ReactNode;
};

export default function SlidingComp({ children }: slidingProps) {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: '0', opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}
