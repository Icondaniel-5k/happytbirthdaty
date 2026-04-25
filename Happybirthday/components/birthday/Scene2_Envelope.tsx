'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Scene2Props {
  onOpen: () => void;
}

export function Scene2_Envelope({ onOpen }: Scene2Props) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1000);
  };

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
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <p className="text-center text-pink-200/70 text-lg font-light">
          Click on the envelope...
        </p>
      </motion.div>

      <motion.div
        onClick={handleClick}
        animate={
          isOpening
            ? {
                rotateX: -180,
                y: -50,
                opacity: 0,
              }
            : {
                y: [0, -10, 0],
              }
        }
        transition={
          isOpening
            ? { duration: 1, ease: 'easeInOut' }
            : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
        whileHover={!isOpening ? { scale: 1.05 } : {}}
        className="cursor-pointer perspective"
        style={{
          transformStyle: 'preserve-3d',
          width: '280px',
          height: '180px',
        }}
      >
        {/* Envelope */}
        <div className="relative w-full h-full">
          {/* Main envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg shadow-2xl overflow-hidden border border-pink-200">
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-200 to-pink-200" />

            {/* Envelope pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 280 180" preserveAspectRatio="none">
                <line
                  x1="140"
                  y1="0"
                  x2="0"
                  y2="90"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-pink-300"
                />
                <line
                  x1="140"
                  y1="0"
                  x2="280"
                  y2="90"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-pink-300"
                />
              </svg>
            </div>

            {/* Envelope flap (3D effect) */}
            <motion.div
              animate={
                isOpening
                  ? { rotateX: -180 }
                  : { rotateX: 0 }
              }
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-pink-200 to-pink-100 border-b border-pink-300 origin-top"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-pink-400/60 text-sm font-light tracking-widest">
                  FOR YOU
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
