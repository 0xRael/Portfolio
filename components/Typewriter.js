"use client"
import  { useState, useEffect, useMemo } from 'react';

const useTypewriter = (text, speed = 20, pause=1000, repeat=true) => {
  const [index, setIndex] = useState(0);
  const displayText = useMemo(() => text.slice(0, index), [index]);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= text.length) {
      if (!repeat) { return }
      const timeoutId = setTimeout(() => {
        setReverse(true)
        setIndex(index-1)
      }, pause*5);

      return () => {
        clearTimeout(timeoutId);
      };
    };
    if (index <= 0) {
      const timeoutId = setTimeout(() => {
        setReverse(false)
        setIndex(1)
      }, pause);

      return () => {
        clearTimeout(timeoutId);
      };
    };
    
    if (!reverse){
      const timeoutId = setTimeout(() => {
        setIndex(i => i + 1);
      }, speed);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    const timeoutId = setTimeout(() => {
      setIndex(i => i - 1);
    }, speed/2);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  return displayText;
};

export const Typewriter = ({ text, speed, pause, repeat, className="" }) => {
    const displayText = useTypewriter(text, speed, pause, repeat);
  
    return <p className={className}>ㅤ{displayText}</p>;
};