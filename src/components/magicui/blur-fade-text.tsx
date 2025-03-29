'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BlurFadeTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: keyof JSX.IntrinsicElements;
}

export default function BlurFadeText({ 
  text, 
  className = '', 
  delay = 0,
  tag: Tag = 'span' 
}: BlurFadeTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <Tag>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ 
                duration: 0.5, 
                delay: delay + (index * 0.03) 
              }}
              className={className}
            >
              {char}
            </motion.span>
          ))}
        </Tag>
      )}
    </AnimatePresence>
  );
}