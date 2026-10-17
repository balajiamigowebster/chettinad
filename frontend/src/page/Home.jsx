import React, { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../home/Hero';

// Lazy load components below the fold to improve initial load time
const South = lazy(() => import('../home/South'));
const Intrest = lazy(() => import('../home/Intrest'));
const NonVeg = lazy(() => import('../home/NonVeg'));
const Story = lazy(() => import('../home/Story'));
const StoryBegins = lazy(() => import('../home/StoryBegins'));
const BeyondHome = lazy(() => import('../home/BeyondHome'));
const Speciality = lazy(() => import('../home/Speciality'));
const FromOurHome = lazy(() => import('../home/FromOurHome'));

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Since components are lazy loaded, try immediately, then after a delay if not found
      if (!tryScroll()) {
        const intervalId = setInterval(() => {
          if (tryScroll()) {
            clearInterval(intervalId);
          }
        }, 100);

        // Clean up interval after 3 seconds to avoid infinite polling if ID doesn't exist
        setTimeout(() => clearInterval(intervalId), 3000);
        
        return () => clearInterval(intervalId);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  const [loadBelowFold, setLoadBelowFold] = React.useState(false);

  useEffect(() => {
    // If navigating directly to a hash section, load immediately
    if (location.hash) {
      setLoadBelowFold(true);
      return;
    }

    // Defer loading below-the-fold components until user scrolls, touches, or after 3.5s
    const timer = setTimeout(() => {
      setLoadBelowFold(true);
    }, 3500);

    const onScrollOrTouch = () => {
      setLoadBelowFold(true);
      window.removeEventListener('scroll', onScrollOrTouch);
      window.removeEventListener('touchstart', onScrollOrTouch);
    };

    window.addEventListener('scroll', onScrollOrTouch, { passive: true });
    window.addEventListener('touchstart', onScrollOrTouch, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScrollOrTouch);
      window.removeEventListener('touchstart', onScrollOrTouch);
    };
  }, [location.hash]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      {/* Hero section loads immediately as it is above the fold */}
      <Hero />
      
      {/* Other sections load after Hero has finished initial paint */}
      {loadBelowFold && (
        <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center bg-transparent text-[#4a4036] font-serif">Loading content...</div>}>
          <South />
          <Intrest />
          <NonVeg />
          <Story />
          <StoryBegins />
          <BeyondHome />
          <Speciality />
          <FromOurHome />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
