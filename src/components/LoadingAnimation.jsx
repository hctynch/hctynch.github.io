import { useEffect, useState } from 'react';

const TypingAnimation = ({ text = 'Loading...', speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (index === text.length) {
      // Looping the animation after a pause
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className='font-Inter font-bold text-xl text-emerald-500'>
      {displayedText}
      <span className='animate-blink'>|</span>
    </span>
  );
};

export default TypingAnimation;
