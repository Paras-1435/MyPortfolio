import React, { useContext, useEffect, useState } from 'react';
import { themeContext } from '../useContext/store';

const TypingEffect = () => {

  const {theme}=useContext(themeContext)

  const text = 'While the world sleeps, I debug.';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 120 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setIsDeleting(true); // Start deleting after done
        }
      } else {
        // Deleting backward
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false); // Start typing again
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <div className= {theme==='dark'?'text-white':' text-white'}>

    <h2 className='text-2xl whitespace-nowrap   text-center ' style={{ fontFamily: 'monospace' ,fontSize: 'clamp(1rem, 4vw, 2rem)' }}>
      {displayedText}
      <span className="blinking-cursor ">|</span>
    </h2>
    </div>
  );
};

export default TypingEffect;
