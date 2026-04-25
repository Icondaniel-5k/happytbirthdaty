'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StarBackground } from '@/components/birthday/StarBackground';
import { MusicToggle } from '@/components/birthday/MusicToggle';
import { Scene1_Intro } from '@/components/birthday/Scene1_Intro';
import { Scene2_Envelope } from '@/components/birthday/Scene2_Envelope';
import { Scene3_Letter } from '@/components/birthday/Scene3_Letter';
import { Scene4_Finish } from '@/components/birthday/Scene4_Finish';
import { Scene5_Celebration } from '@/components/birthday/Scene5_Celebration';

type Scene = 1 | 2 | 3 | 4 | 5;

export default function Home() {
  const [currentScene, setCurrentScene] = useState<Scene>(1);

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-900">
      {/* Background */}
      <StarBackground />

      {/* Music Toggle */}
      <MusicToggle />

      {/* Scenes */}
      <AnimatePresence mode="wait">
        {currentScene === 1 && (
          <Scene1_Intro key="scene1" onNext={() => setCurrentScene(2)} />
        )}
        {currentScene === 2 && (
          <Scene2_Envelope key="scene2" onOpen={() => setCurrentScene(3)} />
        )}
        {currentScene === 3 && (
          <Scene3_Letter key="scene3" onNext={() => setCurrentScene(4)} />
        )}
        {currentScene === 4 && (
          <Scene4_Finish key="scene4" onNext={() => setCurrentScene(5)} />
        )}
        {currentScene === 5 && (
          <Scene5_Celebration key="scene5" />
        )}
      </AnimatePresence>
    </div>
  );
}
