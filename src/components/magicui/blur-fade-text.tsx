'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface BlurFadeTextProps {
  text: string;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export default function BlurFadeText({
  text,
  delay = 0,
  className = '',
  yOffset = 4
}: BlurFadeTextProps) {
  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0, filter: 'blur(10px)', y: yOffset }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {text}
      </motion.p>
    </AnimatePresence>
  );
}