import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Home = React.forwardRef(({globalMouseX, globalMouseY}, ref) => {
  const [jamesOffset, setJamesOffset] = useState(0);
  const [huntOffset, setHuntOffset] = useState(0);
  const [shineYPercent, setShineYPercent] = useState(50);
  const [shineXPercent, setShineXPercent] = useState(50);


  const maxSlideOffset = 100;

  useEffect(() => {
    if (ref.current) {
        const sectionRect = ref.current.getBoundingClientRect();
        const mouseX = globalMouseX;
        const mouseXRelativeToSection = mouseX - sectionRect.left;
        const normalizedX = Math.max(0, Math.min(1, mouseXRelativeToSection/sectionRect.width));
        const newOffset = (normalizedX - 0.5) * 2 * maxSlideOffset;
        setJamesOffset(newOffset);
        setHuntOffset(-newOffset);
        const mouseYRelativeToSection = globalMouseY - sectionRect.top;

        const normalizedY = Math.max(0, Math.min(1, mouseYRelativeToSection / sectionRect.height));

        const newShineYPercent = normalizedY * 100;
        const newShineXPercent = normalizedX * 100;
        setShineYPercent(newShineYPercent);
        setShineXPercent(newShineXPercent);
    }
  }, [globalMouseX, globalMouseY, ref]);

  const welcomeText = "Welcome to my Portfolio";

  const typingCharacterDelay = 0.05;
  const spaceExtraDelay = 0.1;

  let cumulativeDelay = 0;
  const charactersWithDelays = welcomeText.split("").map((char, index) => {
    const charDelay = typingCharacterDelay;
    const currentCharacterDelay = cumulativeDelay;

    if (char === ' ') {
      cumulativeDelay += charDelay + spaceExtraDelay;
    } else {
      cumulativeDelay += charDelay;
    }

    return {
      char: char,
      delay: currentCharacterDelay,
    };
  });

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom.delay + 1.0, 
        duration: 0.01, 
      },
    }),
  };

  return (
    <section
      ref={ref} 
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden relative cursor-ew-resize select-none"
      style={{ perspective: '1000px' }}
    >
      
        <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,255,0.4) 0%, transparent 60%)',
          backgroundSize: '300% 300%', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `${shineXPercent}% ${shineYPercent}%`,
          willChange: 'background-position', 
        }}
      ></div>
      
      <div
        className="relative text-center w-full h-full flex flex-col items-center justify-center z-10"
      >
        <h1
          className="text-[11rem] md:text-[15rem] font-extrabold text-slate-800 relative will-change-transform pointer-events-none -mt-[8rem]"
          style={{ transform: `translateX(${jamesOffset}px)` }}
        >
          James
        </h1>

        <h1
          className="text-[11rem] md:text-[15rem] font-extrabold text-slate-800 z-10 will-change-transform pointer-events-none -mt-[5rem] md:-mt-[10rem]"
          style={{ transform: `translateX(${huntOffset}px)` }}
        >
          Hunt
        </h1>

        <motion.h2
          className="text-3xl md:text-5xl font-light text-slate-600 font-mono"
          initial="hidden"
          animate="visible"
        >
          {charactersWithDelays.map((item, index) => (
            <motion.span
              key={index}
              variants={characterVariants}
              custom={item}
            >
              {item.char === " " ? "\u00A0" : item.char}
            </motion.span>
          ))}
        </motion.h2>

      </div>
    </section>
  );
});


export default Home;
