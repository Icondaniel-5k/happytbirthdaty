'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface Scene4Props {
  onNext?: () => void;
}

export function Scene4_Finish({ onNext }: Scene4Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext?.();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onNext]);
  const floatingWords = [
    { text: 'Happy Birthday', delay: 0 },
    { text: 'I Love You', delay: 0.3 },
    { text: 'You Are Amazing', delay: 0.6 },
    { text: 'Forever', delay: 0.9 },
    { text: '💕', delay: 1.2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center z-10 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-6xl md:text-7xl font-light text-pink-100 mb-4 tracking-wider">
          Happy Birthday
        </h2>
        <p className="text-2xl text-pink-200/70 font-light">
          My Love, My Heart, My Everything
        </p>
      </motion.div>

      {/* Floating words */}
      <div className="relative h-64 w-full flex items-center justify-center">
        {floatingWords.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [100, -100],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 8,
            }}
            className="absolute text-pink-300/80 font-light text-xl md:text-2xl"
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Decorative hearts */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="mt-16 text-5xl"
      >
        💕
      </motion.div>
    </motion.div>
  );
}
