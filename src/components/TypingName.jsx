
import React, { useEffect, useState } from 'react';

export default function TypingName() {
 const text = 'Hi, I am Paras.';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 200 : 200;

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
    <h2 className='text-4xl ' style={{ fontFamily: 'monospace',fontSize: 'clamp(1rem, 4vw, 2rem)' }}>
      {displayedText}
      <span className="blinking-cursor ">|</span>
    </h2>
  );
};


