import React, {useEffect} from "react";
import scrollFx from '../../assets/scroll-effect.wav';

export const MainContent = () => {
  
  const scrollAudio = new Audio(scrollFx);
  const scrollEffectDelay = 3;
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let didScroll = false;
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    scrollAudio.volume = 0.15;
    
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  },)
  
  const scrollHandler = () => {
    let currentTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!didScroll && (currentTop > lastScrollTop)) {
      didScroll = true;
      
      scrollAudio.play().catch(() => {});
      setTimeout(() => {
        didScroll = false;
      }, 1000 * scrollEffectDelay)
    }
    lastScrollTop = currentTop;
  }
  
  return (
    <div className="main-content">
    </div>
  );
  
}
