'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QuestionPopup } from './QuestionPopup';

interface Scene3Props {
  onNext: () => void;
}

const letterContent = [
  "My Dearest Love,",
  "",
  "Today, I wanted to pause the world for a moment and tell you something that gets lost in the everyday rush—how deeply I cherish you.",
  "",
  "I see you working tirelessly in nursing, carrying the weight of caring for others with such grace. I see you diving deep into code and systems, solving problems that would make most people's heads spin. And somehow, through all of it, you still make time to be present with me.",
  "",
  "You inspire me every single day. Your strength, your kindness, your brilliant mind—they light up my world.",
  "",
  "On this day, I want you to know: you deserve rest, joy, and all the love this world has to offer. You deserve to be celebrated not just today, but every day.",
  "",
  "Happy Birthday to the most extraordinary woman I know.",
  "",
  "Forever yours,",
  "Your Love 💕",
];

export function Scene3_Letter({ onNext }: Scene3Props) {
  const [displayedText, setDisplayedText] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);
  const fullText = letterContent.join('\n');

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayedText, fullText]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 flex items-center justify-center z-10 p-4"
      >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        {/* Letter paper */}
        <div className="bg-amber-50/95 backdrop-blur rounded-lg shadow-2xl p-8 md:p-12 min-h-96 border border-amber-100/50 relative overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-200/20 to-transparent rounded-bl-3xl" />

          {/* Typewriter text */}
          <div className="relative z-10 font-serif text-gray-800 leading-8 whitespace-pre-wrap text-lg">
            {displayedText}
            {displayedText.length < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="ml-1 text-yellow-600"
              >
                |
              </motion.span>
            )}
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
        </div>

        {/* Continue button (appears when text is done) */}
        {displayedText.length === fullText.length && !showQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <motion.button
              onClick={() => setShowQuestion(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-pink-300/40 backdrop-blur border border-pink-300/60 rounded-full text-pink-900 font-light hover:bg-pink-300/60 transition-all"
            >
              Next
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Question Popup */}
      {showQuestion && (
        <QuestionPopup onYes={onNext} />
      )}
    </>
  );
}
