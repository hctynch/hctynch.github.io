import { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const getRandomTimeout = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const typeNextCharacter = () => {
      if (currentIndex < text.length - 1) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
        setTimeout(typeNextCharacter, getRandomTimeout(100, 400)); // Typing speed
      }
    };

    typeNextCharacter(); // Start typing

    return () => {
      currentIndex = text.length;
    };
  }, [text]);

  return (
    <div className='flex justify-center font-source font-bold text-xl text-emerald-500 items-center'>
      <span className='relative'>
        {displayedText}
        <span className='typing-cursor'></span>
      </span>
    </div>
  );
};

export default TypingEffect;
