import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setTrailPositions((prev) => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        if (newPositions.length > 5) {
          newPositions.shift();
        }
        return newPositions;
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {trailPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="cursor-trail"
          initial={{ opacity: 0.5 }}
          animate={{
            x: pos.x - 5,
            y: pos.y - 5,
            opacity: 0.5 - (i * 0.1),
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </>
  );
};

export default CustomCursor;