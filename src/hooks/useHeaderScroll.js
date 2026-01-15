import { useState, useEffect } from 'react';

export const useHeaderScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled (for background style)
      setScrolled(currentScrollY > 50);
      
      // Hide/show header based on scroll direction
      if (currentScrollY > 100) {
        // Only hide when scrolling down past 100px
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsHidden(true);
        } else {
          // Scrolling up
          setIsHidden(false);
        }
      } else {
        // At top of page, always show
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);

      // Intersection Observer for scroll animations
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { scrolled, isHidden };
};
