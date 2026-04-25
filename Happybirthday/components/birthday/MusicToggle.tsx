'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.button
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed top-8 right-8 z-50 p-3 rounded-full bg-pink-200/80 backdrop-blur hover:bg-pink-300/80 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? (
        <svg className="w-6 h-6 text-pink-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-pink-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      )}
    </motion.button>
  );
}
