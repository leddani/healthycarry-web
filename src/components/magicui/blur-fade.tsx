'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function BlurFade({ children, className = '', delay = 0 }: BlurFadeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, delay }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}