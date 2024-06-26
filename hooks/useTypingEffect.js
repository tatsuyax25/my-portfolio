'use client';
import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, speed, currentIndex]);

  return displayText;
};

export default useTypingEffect;