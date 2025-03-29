'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function BlurFade({ children, delay = 0, className = '' }: BlurFadeProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}