import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: {
        type: "spring",
        mass: 0.6,
        damping: 10,
      },
    },
  };

  const createSplash = (e) => {
    setCursorVariant("click");
    setTimeout(() => setCursorVariant("default"), 500);
  };

  useEffect(() => {
    window.addEventListener("click", createSplash);
    return () => window.removeEventListener("click", createSplash);
  }, []);

  return (
    <div className="cursor-container">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <AnimatePresence>
        {cursorVariant === "click" && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              left: mousePosition.x,
              top: mousePosition.y,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              mixBlendMode: 'difference',
              pointerEvents: 'none',
              zIndex: 9998,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashCursor; 