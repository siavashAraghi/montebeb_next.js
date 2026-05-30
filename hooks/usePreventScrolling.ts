import { useEffect, useRef, useState, useCallback } from 'react';

// Define the return type for clarity
interface UsePreventScroll {
  isPreventScroll: boolean;
  toggleScroll: () => void;
  preventScroll: () => void;
  restoreScroll: () => void;
}

const usePreventScrolling = (): UsePreventScroll => {
  const [isPreventScroll, setIsPreventScroll] = useState(false);
  const bodyRef = useRef<HTMLElement | null>(null); // Allow null initially
  const scrollbarWidthRef = useRef<number>(0); // To store calculated scrollbar width

  // Effect to get and set up body reference and scrollbar width
  useEffect(() => {
    // Ensure document.body is available
    if (document.body) {
      bodyRef.current = document.body;
      // Calculate scrollbar width once
      const htmlElement = document.documentElement; // documentElement is often preferred for this calculation
      const width = window.innerWidth - htmlElement.clientWidth;
      scrollbarWidthRef.current = width;

      // Clean up if the component unmounts
      return () => {
        // Ensure scroll is restored if the component unmounts while scroll is prevented
        if (isPreventScroll && bodyRef.current) {
          bodyRef.current.style.overflow = '';
          bodyRef.current.style.paddingRight = '';
        }
        bodyRef.current = null; // Clear ref
      };
    }
    // If document.body is not available (e.g., SSR before hydration), do nothing.
    // The effect will re-run on the client.
  }, []); // Empty dependency array: runs once on mount

  // Effect to apply/remove styles based on isPreventScroll state
  useEffect(() => {
    if (!bodyRef.current) return; // Exit if bodyRef isn't ready

    if (isPreventScroll) {
      // Apply styles to prevent scrolling
      bodyRef.current.style.overflow = 'hidden';
      bodyRef.current.style.paddingRight = `${scrollbarWidthRef.current}px`;
    } else {
      // Remove styles to restore scrolling
      bodyRef.current.style.overflow = '';
      bodyRef.current.style.paddingRight = '';
    }

    // Cleanup function: This will run when isPreventScroll changes and the old effect needs to be cleaned up.
    return () => {
      // Ensure cleanup happens on state change as well
      if (bodyRef.current) {
        bodyRef.current.style.overflow = '';
        bodyRef.current.style.paddingRight = '';
      }
    };
  }, [isPreventScroll]); // Dependency array: runs whenever isPreventScroll changes

  // Function to toggle the scroll state
  const toggleScroll = useCallback(() => {
    setIsPreventScroll(prev => !prev);
  }, []);

  // Function to explicitly prevent scroll
  const preventScroll = useCallback(() => {
    setIsPreventScroll(true);
  }, []);

  // Function to explicitly restore scroll
  const restoreScroll = useCallback(() => {
    setIsPreventScroll(false);
  }, []);

  return {
    isPreventScroll,
    toggleScroll,
    preventScroll,
    restoreScroll,
  };
};

export default usePreventScrolling;
