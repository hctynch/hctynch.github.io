import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeSection = ({ children }) => {
  const [thresholds, setThresholds] = useState({ threshold20: 0.2, threshold30: 0.3 }); // Dynamic thresholds
  const [opacityState, setOpacityState] = useState('opacity-0');
  const [lastY, setLastY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');

  // Update thresholds based on screen size
  useEffect(() => {
    const updateThresholds = () => {
      if (window.innerWidth < 768) {
        // For smaller screens
        setThresholds({ threshold20: 0.1, threshold30: 0.25 });
      } else {
        // For larger screens
        setThresholds({ threshold20: 0.2, threshold30: 0.5 });
      }
    };

    updateThresholds(); // Initial check
    window.addEventListener('resize', updateThresholds);
    return () => window.removeEventListener('resize', updateThresholds);
  }, []);

  // Ref for dynamic thresholds
  const { ref: ref20, inView: inView20 } = useInView({
    threshold: thresholds.threshold20,
    triggerOnce: false,
  });

  const { ref: ref30, inView: inView30 } = useInView({
    threshold: thresholds.threshold30,
    triggerOnce: false,
  });

  // Combine refs into a single callback ref
  const combinedRef = (node) => {
    if (node) {
      ref20(node);
      ref30(node);
    }
  };

  // Determine scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastY ? 'down' : 'up');
      setLastY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  // Determine opacity state
  useEffect(() => {
    if (inView30) {
      setOpacityState('opacity-100'); // Fully in view
    } else if (inView20) {
      setOpacityState(scrollDirection === 'down' ? 'opacity-50' : 'opacity-0'); // Partially in view
    } else {
      setOpacityState('opacity-0'); // Not in view
    }
  }, [inView20, inView30, scrollDirection]);

  return (
    <div
      ref={combinedRef}
      className={`transition-opacity duration-1000 ${opacityState}`}
    >
      {children}
    </div>
  );
};

export default FadeSection;
