
import { useEffect, useRef, useState } from 'react';

/**
 * Hook to handle the easter egg functionality
 */
export const useEasterEgg = (code: string[]) => {
  const [isActive, setIsActive] = useState(false);
  const sequenceRef = useRef<string[]>([]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // Add the key to the sequence
      sequenceRef.current = [...sequenceRef.current, key].slice(-code.length);
      
      // Check if the sequence matches the easter egg code
      if (sequenceRef.current.join('') === code.join('')) {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 10000); // Reset after 10 seconds
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [code]);
  
  return isActive;
};
