'use client';

import { motion } from 'framer-motion';

interface Scene1Props {
  onNext: () => void;
}

export function Scene1_Intro({ onNext }: Scene1Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-light text-pink-100 mb-6 tracking-wide">
          Take a Moment
        </h1>
        <p className="text-lg md:text-xl text-pink-200/80 mb-12 font-light">
          Before we begin, I have something special for you...
        </p>
      </motion.div>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)',
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-pink-300/40 backdrop-blur border border-pink-300/60 rounded-full text-pink-100 font-light hover:bg-pink-300/60 transition-all"
      >
        Begin
      </motion.button>
    </motion.div>
  );
}
