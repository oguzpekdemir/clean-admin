
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when page is scrolled down 300px
    if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll functionality to look at the main window or a specific container
  // Since our layout handles scroll in a div ref in App.tsx, we might need to attach this logic there.
  // BUT, for a simpler global approach often used in these templates, we attach to window.
  // Note: If App.tsx uses a scrollable div instead of body scroll, this needs to listen to that div.
  // Based on App.tsx, we have a scrollContainerRef. 
  // To make this component self-contained and work with the App structure, 
  // we will accept the scroll container ref via context or props, OR
  // since we can't easily pass refs through the router structure here without Context,
  // we will hook into the window scroll just in case, but ideally, 
  // we should place this component INSIDE App.tsx where the ref is available.
  
  // However, simpler approach for this "drop-in" component:
  // Let's assume the main scroll is on the window or `html/body` for mobile,
  // and on the specific div for desktop.
  // For this specific template, the scroll is on a div with `ref={scrollContainerRef}` in App.tsx.
  // So, this component effectively needs to be placed *inside* App.tsx and controlled there, 
  // or we use a global event listener if possible.
  
  // Let's make this component purely the button UI, and handle logic in App.tsx for perfection.
  // WAIT, I can't modify App.tsx to pass refs easily to a lazy loaded component without props drilling.
  
  // ALTERNATIVE: Use an ID selector. The scroll container in App.tsx doesn't have an ID.
  // I will add an ID to the scroll container in App.tsx and listen to it here.
  
  useEffect(() => {
    const scrollableDiv = document.getElementById('main-scroll-container');
    
    const handleScroll = () => {
        if (scrollableDiv) {
            if (scrollableDiv.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        } else {
            // Fallback to window
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    if (scrollableDiv) {
        scrollableDiv.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
        if (scrollableDiv) scrollableDiv.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollableDiv = document.getElementById('main-scroll-container');
    if (scrollableDiv) {
        scrollableDiv.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Yukarı Çık"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default ScrollToTop;
