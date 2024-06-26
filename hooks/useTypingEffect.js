import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

export default useTypingEffect;