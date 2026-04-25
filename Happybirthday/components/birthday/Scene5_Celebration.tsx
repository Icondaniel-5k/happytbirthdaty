'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Scene5Props {
  onFinish?: () => void;
}

// Component for falling hearts
function FallingHeart({ delay }: { delay: number }) {
  const xStart = Math.random() * 100;
  const duration = 3 + Math.random() * 2;

  return (
    <motion.div
      initial={{ 
        x: `${xStart}vw`,
        y: -50, 
        opacity: 1,
        rotate: 0
      }}
      animate={{ 
        y: '100vh',
        rotate: 360,
        opacity: 0
      }}
      transition={{
        duration,
        delay,
        ease: 'easeIn',
      }}
      className="fixed text-4xl md:text-6xl pointer-events-none"
    >
      ❤️
    </motion.div>
  );
}

export function Scene5_Celebration({ onFinish }: Scene5Props) {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Create falling hearts with staggered timing
    const heartCount = 20;
    const newHearts = Array.from({ length: heartCount }, (_, i) => i);
    setHearts(newHearts);

    // Add more hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => [...prev, Math.max(...prev) + 1]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-300/20 via-purple-200/20 to-rose-300/20 pointer-events-none" />

      {/* Falling hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((id) => (
          <FallingHeart key={id} delay={id * 0.1} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Birthday message */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 mb-6 drop-shadow-2xl"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-12 drop-shadow-2xl"
        >
          Princess!!! 👑
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-8 max-w-md mx-auto"
        />

        {/* Subtitle with emojis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl font-semibold text-pink-600">
            You deserve all the love and happiness in the world 💕
          </p>
          <p className="text-xl md:text-2xl font-light text-rose-500">
            Thank you for being my superhero ✨
          </p>
        </motion.div>

        {/* Floating decorative hearts around text */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mt-12 text-5xl md:text-6xl"
        >
          💕 ✨ 💕
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
