import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButton({ visible, onClick }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={onClick}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-28 h-28 bg-cyan-500 text-white rounded-full shadow-lg z-50 flex items-center justify-center font-bold text-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          Get in Touch
        </motion.button>
      )}
    </AnimatePresence>
  );
}