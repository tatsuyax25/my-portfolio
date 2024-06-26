'use client';
import { useState, useEffect } from 'react';

const useTypingEffect = (textsInput, speed = 50, delayBetweenParagraphs = 1000) => {
  const texts = Array.isArray(textsInput) ? textsInput : [];
  const [displayTexts, setDisplayTexts] = useState(texts.map(() => ''));
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentParagraphIndex < texts.length) {
      if (currentCharIndex < texts[currentParagraphIndex].length) {
        const timer = setTimeout(() => {
          setDisplayTexts((prev) => {
            const newDisplayTexts = [...prev];
            newDisplayTexts[currentParagraphIndex] +=
              texts[currentParagraphIndex][currentCharIndex];
            return newDisplayTexts;
          });
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentParagraphIndex((prevIndex) => prevIndex + 1);
          setCurrentCharIndex(0);
        }, delayBetweenParagraphs);
        return () => clearTimeout(timer);
      }
    }
  }, [
    texts,
    speed,
    delayBetweenParagraphs,
    currentCharIndex,
    currentParagraphIndex,
  ]);

  return displayTexts;
};

export default useTypingEffect;