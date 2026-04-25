'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface QuestionPopupProps {
  onYes: () => void;
  onNo?: () => void;
}

export function QuestionPopup({ onYes, onNo }: QuestionPopupProps) {
  const [nahClicks, setNahClicks] = useState(0);
  const [yesBtnScale, setYesBtnScale] = useState(1);

  const nahButtonStates = [
    'Nah',
    'You sure? 😢',
    'Are you joking? 😢',
  ];

  const currentNahText = nahButtonStates[Math.min(nahClicks, 2)];
  const isButtonGrowing = nahClicks > 2;

  const handleNahClick = () => {
    const newClicks = nahClicks + 1;
    setNahClicks(newClicks);
    if (newClicks > 2) {
      setYesBtnScale(1 + (newClicks - 3) * 0.15);
    }
    onNo?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center z-30 p-4 bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative"
      >
        {/* Main popup container */}
        <div className="bg-gradient-to-br from-pink-100/95 to-rose-50/95 backdrop-blur rounded-3xl shadow-2xl p-10 md:p-14 border border-pink-200/60 max-w-md">
          {/* Decorative floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -right-8 text-6xl opacity-40"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-8 text-6xl opacity-40"
          >
            ✨
          </motion.div>

          {/* Question text */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-center mb-10 font-serif"
          >
            Will You Remain Mine, My SuperHero?
          </motion.h2>

          {/* Buttons container */}
          <div className="flex gap-4 md:gap-6 justify-center items-center relative h-16">
            {/* Yes button - grows with each Nah click */}
            <motion.button
              onClick={onYes}
              animate={{ scale: yesBtnScale }}
              transition={{ type: 'spring', stiffness: 150 }}
              whileHover={{ brightness: 1.1 }}
              whileTap={{ scale: yesBtnScale * 0.95 }}
              className="relative z-20 px-10 py-4 md:px-12 md:py-5 bg-gradient-to-br from-green-400 to-emerald-500 text-white font-bold text-lg md:text-xl rounded-full shadow-lg hover:shadow-2xl transition-shadow whitespace-nowrap"
            >
              Yes
            </motion.button>

            {/* Nah button */}
            {!isButtonGrowing && (
              <motion.button
                onClick={handleNahClick}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ brightness: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700 font-semibold text-lg md:text-xl rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                {currentNahText}
              </motion.button>
            )}
          </div>

          {/* Encouraging message when Nah is clicked */}
          {nahClicks > 0 && !isButtonGrowing && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-6 text-pink-600 font-semibold text-sm md:text-base"
            >
              Come on, I know you want to say Yes! 💫
            </motion.p>
          )}

          {/* Message when Yes button starts growing */}
          {isButtonGrowing && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-6 text-pink-600 font-semibold text-sm md:text-base"
            >
              I see you... 😏💕
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
