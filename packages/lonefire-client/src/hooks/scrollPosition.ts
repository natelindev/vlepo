import { useEffect, useRef, useState } from 'react';

export function useScrollPosition(): [number, number] {
  const [scrollPosition, setScrollPosition] = useState(0);
  const posRef = useRef(scrollPosition);
  const [speed, setSpeed] = useState(0);

  // const [DebouncedSpeed] = useDebounce(speed, 1500);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setSpeed(position - posRef.current);
    posRef.current = position;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return [scrollPosition, speed];
}
