import { useState, useEffect, useCallback } from 'react';

export const useScrollPosition = (sectionIds = [], offset = 100) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [previousScrollY, setPreviousScrollY] = useState(0);

  const updateScrollPosition = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setIsScrollingUp(currentScrollY < previousScrollY);
    setPreviousScrollY(currentScrollY);
    
    setScrollY(currentScrollY);
    
    setIsAtTop(currentScrollY < 10);
    
    if (sectionIds.length > 0) {
      const scrollPosition = currentScrollY + offset;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }
  }, [sectionIds, offset, previousScrollY]);

  useEffect(() => {
    updateScrollPosition();
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollPosition]);

  return {
    scrollY,
    activeSection,
    isScrollingUp,
    isAtTop
  };
};

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToElement;
};

export default useScrollPosition;